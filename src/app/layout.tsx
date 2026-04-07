import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({
  variable: '--font-text',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Chicago Commercial Cleaner',
  description: 'Professional commercial cleaning in Chicago.',
  metadataBase: new URL('https://chicagocommercialcleaner.com'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <head>
        <LocalBusinessSchema />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-black">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}