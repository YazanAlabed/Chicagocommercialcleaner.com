import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const quoteSchema = z.object({
  businessName: z.string().min(1),
  contactName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1),
  serviceType: z.string().min(1),
  squareFootage: z.string().optional(),
});

// Simple in-memory rate limiting (for production, use Redis or similar)
const ipRequestMap = new Map<string, { count: number; timestamp: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 60 * 1000; // 1 hour
  const maxRequests = 5;

  const record = ipRequestMap.get(ip);

  if (!record) {
    ipRequestMap.set(ip, { count: 1, timestamp: now });
    return true;
  }

  if (now - record.timestamp > windowMs) {
    // Reset after window
    ipRequestMap.set(ip, { count: 1, timestamp: now });
    return true;
  }

  if (record.count >= maxRequests) {
    return false;
  }

  record.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip =
      request.headers.get('x-forwarded-for') ||
      request.headers.get('x-real-ip') ||
      'unknown';

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Rate limit exceeded. Please try again later.' },
        { status: 429 }
      );
    }

    // Parse and validate request body
    const body = await request.json();
    const validatedData = quoteSchema.parse(body);

    // TODO: Implement email notification
    // For now, we'll log the data and return success
    // In production, use Resend or similar service:
    //
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'quotes@chicagocommercialcleaner.com',
    //   to: 'leads@chicagocommercialcleaner.com',
    //   subject: `New Quote Request: ${validatedData.businessName}`,
    //   html: `...`,
    // });

    console.log('Quote request received:', {
      ...validatedData,
      timestamp: new Date().toISOString(),
      ip,
    });

    // Store in a JSON file as a simple database
    // In production, use a real database
    try {
      const fs = await import('fs/promises');
      const path = await import('path');

      const dataDir = path.join(process.cwd(), 'data');
      await fs.mkdir(dataDir, { recursive: true });

      const leadsFile = path.join(dataDir, 'leads.json');
      let leads: unknown[] = [];

      try {
        const existing = await fs.readFile(leadsFile, 'utf-8');
        leads = JSON.parse(existing);
      } catch {
        // File doesn't exist yet
      }

      leads.push({
        ...validatedData,
        id: `lead_${Date.now()}`,
        timestamp: new Date().toISOString(),
        source: 'website',
        status: 'new',
      });

      await fs.writeFile(leadsFile, JSON.stringify(leads, null, 2));
    } catch (error) {
      console.error('Failed to store lead:', error);
      // Continue to return success to the user
    }

    return NextResponse.json(
      {
        success: true,
        message:
          'Quote request received. We will contact you within 1 business hour.',
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          error: 'Invalid request data',
          details: error.issues,
        },
        { status: 400 }
      );
    }

    console.error('Quote submission error:', error);

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
