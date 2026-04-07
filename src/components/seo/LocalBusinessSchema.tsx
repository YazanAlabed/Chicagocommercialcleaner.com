export default function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Chicago Commercial Cleaner',
    url: 'https://chicagocommercialcleaner.com',
    telephone: '+1-630-349-2862',
    email: 'info@chicagocommercialcleaner.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '180 N Ada, Suite 821',
      addressLocality: 'Chicago',
      addressRegion: 'IL',
      postalCode: '60607',
      addressCountry: 'US',
    },
    areaServed: [
      { '@type': 'City', name: 'Chicago' },
      { '@type': 'City', name: 'Schaumburg' },
      { '@type': 'City', name: 'Naperville' },
      { '@type': 'City', name: 'Oak Brook' },
      { '@type': 'City', name: 'Evanston' },
      { '@type': 'City', name: 'Skokie' },
      { '@type': 'City', name: 'Arlington Heights' },
      { '@type': 'City', name: 'Des Plaines' },
      { '@type': 'City', name: 'Elk Grove Village' },
    ],
    serviceType: [
      'Commercial Cleaning',
      'Office Cleaning',
      'Janitorial Services',
      'Post-Construction Cleaning',
      'Medical Facility Cleaning',
      'Restaurant Cleaning',
      'Warehouse Cleaning',
      'Industrial Cleaning',
      'Carpet Cleaning',
      'Floor Care',
      'Window Cleaning',
      'Day Porter Services',
      'After Hours Cleaning',
      'Green Cleaning',
    ],
    priceRange: '$$',
    image: 'https://chicagocommercialcleaner.com/images/logo.png',
    description:
      'Professional commercial cleaning services in Chicago. Licensed, bonded, insured & eco-friendly. Serving offices, medical facilities, warehouses, and restaurants across Chicagoland.',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
