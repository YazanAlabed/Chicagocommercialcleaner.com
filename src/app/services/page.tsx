import { Metadata } from 'next';
import ServicesPageContent from './services-page-content';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Services | Chicago Commercial Cleaner',
  description:
    'Professional commercial cleaning services in Chicago. Office cleaning, janitorial services, post-construction, medical facilities, and more.',
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}