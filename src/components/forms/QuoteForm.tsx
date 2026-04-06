'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import { CheckCircle, Loader2 } from 'lucide-react';

const quoteSchema = z.object({
  businessName: z.string().min(1, 'Business name is required'),
  contactName: z.string().min(1, 'Contact name is required'),
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
  phone: z
    .string()
    .min(1, 'Phone number is required')
    .regex(
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
      'Invalid phone number'
    ),
  serviceType: z.string().min(1, 'Please select a service type'),
  squareFootage: z.string().optional(),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

const serviceOptions = [
  { value: 'office-cleaning', label: 'Office Cleaning' },
  { value: 'janitorial-services', label: 'Janitorial Services' },
  { value: 'post-construction', label: 'Post-Construction Cleaning' },
  { value: 'medical-facility', label: 'Medical Facility Cleaning' },
  { value: 'restaurant', label: 'Restaurant Cleaning' },
  { value: 'warehouse', label: 'Warehouse Cleaning' },
  { value: 'industrial', label: 'Industrial Cleaning' },
  { value: 'carpet-cleaning', label: 'Carpet Cleaning' },
  { value: 'floor-care', label: 'Floor Care' },
  { value: 'window-cleaning', label: 'Window Cleaning' },
  { value: 'day-porter', label: 'Day Porter Services' },
  { value: 'after-hours', label: 'After Hours Cleaning' },
  { value: 'green-cleaning', label: 'Green Cleaning' },
  { value: 'other', label: 'Other (please specify in message)' },
];

const squareFootageOptions = [
  { value: 'under-1000', label: 'Under 1,000 sq ft' },
  { value: '1000-5000', label: '1,000 - 5,000 sq ft' },
  { value: '5000-10000', label: '5,000 - 10,000 sq ft' },
  { value: '10000-25000', label: '10,000 - 25,000 sq ft' },
  { value: '25000-plus', label: '25,000+ sq ft' },
  { value: 'unsure', label: 'Not sure / Prefer not to say' },
];

export default function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
  });

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit quote request');
      }

      setIsSuccess(true);
      reset();
    } catch (error) {
      setSubmitError(
        'Something went wrong. Please try again or call us directly.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-[#ECFEFF] border border-[#0891B2] rounded-xl p-8 text-center">
        <div className="flex justify-center mb-4">
          <CheckCircle className="w-16 h-16 text-[#22C55E]" />
        </div>
        <h3 className="text-xl font-semibold text-[#164E63] mb-2">
          Thank You!
        </h3>
        <p className="text-[#64748B]">
          We've received your quote request and will get back to you within 1
          business hour.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Input
          label="Business Name"
          {...register('businessName')}
          error={errors.businessName?.message}
        />
        <Input
          label="Contact Name"
          {...register('contactName')}
          error={errors.contactName?.message}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Input
          label="Email Address"
          type="email"
          {...register('email')}
          error={errors.email?.message}
        />
        <Input
          label="Phone Number"
          type="tel"
          placeholder="(312) 555-1234"
          {...register('phone')}
          error={errors.phone?.message}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Select
          label="Type of Service Needed"
          options={serviceOptions}
          {...register('serviceType')}
          error={errors.serviceType?.message}
        />
        <Select
          label="Approximate Square Footage"
          options={squareFootageOptions}
          {...register('squareFootage')}
        />
      </div>

      {submitError && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-600 text-sm">{submitError}</p>
        </div>
      )}

      <div className="pt-2">
        <Button
          type="submit"
          variant="secondary"
          size="lg"
          className="w-full md:w-auto"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Submitting...
            </>
          ) : (
            'Get Your Free Quote'
          )}
        </Button>
      </div>

      <p className="text-sm text-[#64748B] text-center md:text-left">
        By submitting this form, you agree to our privacy policy. We'll never
        share your information.
      </p>
    </form>
  );
}
