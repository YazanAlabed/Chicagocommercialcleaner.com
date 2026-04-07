// Site-wide constants
export const SITE_NAME = 'Chicago Commercial Cleaner';
export const SITE_URL = 'https://chicagocommercialcleaner.com';

// Business Information
export const BUSINESS = {
  name: 'Chicago Commercial Cleaner',
  phone: '630-349-2862',
  email: 'info@chicagocommercialcleaner.com',
  address: {
    street: '180 N Ada, Suite 821',
    city: 'Chicago',
    state: 'IL',
    zip: '60607',
  },
  hours: {
    monday: '8:00 AM - 6:00 PM',
    tuesday: '8:00 AM - 6:00 PM',
    wednesday: '8:00 AM - 6:00 PM',
    thursday: '8:00 AM - 6:00 PM',
    friday: '8:00 AM - 6:00 PM',
    saturday: '9:00 AM - 2:00 PM',
    sunday: 'Closed',
  },
};

// Service Areas
export const SERVICE_AREAS = {
  chicagoNeighborhoods: [
    'Loop',
    'River North',
    'West Loop',
    'Streeterville',
    'Gold Coast',
    'South Loop',
    'Lincoln Park',
    'Wicker Park',
    'Hyde Park',
    'Lakeview',
  ],
  suburbs: [
    'Schaumburg',
    'Naperville',
    'Oak Brook',
    'Evanston',
    'Skokie',
    'Arlington Heights',
    'Des Plaines',
    'Elk Grove Village',
    'Orland Park',
    'Downers Grove',
    'Tinley Park',
    'Palatine',
    'Lombard',
    'Wheaton',
    'Oak Park',
    'Cicero',
    'Bedford Park',
  ],
};

// Services
export const SERVICES = [
  { slug: 'office-cleaning', name: 'Office Cleaning', icon: 'Building2' },
  {
    slug: 'janitorial-services',
    name: 'Janitorial Services',
    icon: 'Sparkles',
  },
  {
    slug: 'post-construction-cleaning',
    name: 'Post-Construction Cleaning',
    icon: 'Hammer',
  },
  {
    slug: 'medical-facility-cleaning',
    name: 'Medical Facility Cleaning',
    icon: 'HeartPulse',
  },
  {
    slug: 'restaurant-cleaning',
    name: 'Restaurant Cleaning',
    icon: 'Utensils',
  },
  {
    slug: 'warehouse-cleaning',
    name: 'Warehouse Cleaning',
    icon: 'Warehouse',
  },
  {
    slug: 'industrial-cleaning',
    name: 'Industrial Cleaning',
    icon: 'Factory',
  },
  { slug: 'carpet-cleaning', name: 'Carpet Cleaning', icon: 'Layers' },
  { slug: 'floor-care', name: 'Floor Care', icon: 'Footprints' },
  { slug: 'window-cleaning', name: 'Window Cleaning', icon: 'Square' },
  {
    slug: 'day-porter-services',
    name: 'Day Porter Services',
    icon: 'UserCheck',
  },
  {
    slug: 'after-hours-cleaning',
    name: 'After Hours Cleaning',
    icon: 'Moon',
  },
  { slug: 'green-cleaning', name: 'Green Cleaning', icon: 'Leaf' },
];

// Trust Badges
export const TRUST_BADGES = [
  { icon: 'Shield', text: 'Licensed & Insured' },
  { icon: 'MapPin', text: 'Locally Owned' },
  { icon: 'Leaf', text: 'Eco-Friendly' },
  { icon: 'BadgeCheck', text: 'Free Estimates' },
];
