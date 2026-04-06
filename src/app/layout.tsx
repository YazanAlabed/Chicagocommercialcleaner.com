import type { Metadata } from 'next';
import { Archivo_Black, IBM_Plex_Mono, Public_Sans } from 'next/font/google';
import './globals.css';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const archivoBlack = Archivo_Black({
  variable: '--font-display',
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: '--font-heading',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const publicSans = Public_Sans({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Chicago Commercial Cleaner | Professional Cleaning Services',
  description:
    'Professional commercial cleaning services in Chicago. Licensed, bonded, insured & eco-friendly. Serving offices, medical facilities, warehouses, and restaurants. Get your free quote today.',
  keywords: [
    'commercial cleaning Chicago',
    'office cleaning Chicago',
    'janitorial services Chicago',
    'post construction cleaning Chicago',
    'medical office cleaning Chicago',
  ],
  authors: [{ name: 'Chicago Commercial Cleaner' }],
  creator: 'Chicago Commercial Cleaner',
  publisher: 'Chicago Commercial Cleaner',
  metadataBase: new URL('https://chicagocommercialcleaner.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Chicago Commercial Cleaner | Professional Cleaning Services',
    description:
      'Professional commercial cleaning services in Chicago. Licensed, bonded, insured & eco-friendly.',
    url: 'https://chicagocommercialcleaner.com',
    siteName: 'Chicago Commercial Cleaner',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chicago Commercial Cleaner',
    description:
      'Professional commercial cleaning services in Chicago. Get your free quote today.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'YOUR_GOOGLE_SITE_VERIFICATION',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivoBlack.variable} ${ibmPlexMono.variable} ${publicSans.variable} h-full antialiased`}
    >
      <head>
        <LocalBusinessSchema />
      </head>
      <body className="min-h-full flex flex-col bg-bg-base text-fg-primary">
        <Navbar />
        <main className="flex-grow relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}