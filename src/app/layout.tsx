import type { Metadata } from 'next';
import { Lexend } from 'next/font/google';
import './globals.css';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const lexend = Lexend({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Chicago Commercial Cleaner | Professional Office & Janitorial Services',
  description: 'Licensed, bonded & insured commercial cleaning across Chicagoland. Office cleaning, janitorial services, post-construction & more. Free quote in 60 minutes.',
  metadataBase: new URL('https://chicagocommercialcleaner.com'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lexend.variable} antialiased`}>
      <head>
        <LocalBusinessSchema />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-slate-900">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
