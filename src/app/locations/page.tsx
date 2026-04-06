import { Metadata } from 'next';
import LocationsPageContent from './locations-page-content';

export const metadata: Metadata = {
  title: 'Service Areas | Chicago Commercial Cleaner',
  description:
    'Commercial cleaning services throughout Chicago and surrounding suburbs. The Loop, River North, Schaumburg, Naperville, and more.',
};

export default function LocationsPage() {
  return <LocationsPageContent />;
}