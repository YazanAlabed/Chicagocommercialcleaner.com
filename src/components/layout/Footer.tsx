import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-100 mt-auto">
      <div className="container py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <p className="font-semibold text-lg tracking-tight mb-4">
              Chicago Cleaner
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              Professional commercial cleaning across Chicagoland.
            </p>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Services
            </p>
            <div className="flex flex-col gap-3">
              <Link href="/services/office-cleaning" className="text-sm text-gray-600 hover:text-black transition-colors">
                Office Cleaning
              </Link>
              <Link href="/services/janitorial-services" className="text-sm text-gray-600 hover:text-black transition-colors">
                Janitorial
              </Link>
              <Link href="/services/post-construction-cleaning" className="text-sm text-gray-600 hover:text-black transition-colors">
                Post-Construction
              </Link>
            </div>
          </div>

          {/* Locations */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Locations
            </p>
            <div className="flex flex-col gap-3">
              <Link href="/locations/loop" className="text-sm text-gray-600 hover:text-black transition-colors">
                The Loop
              </Link>
              <Link href="/locations/river-north" className="text-sm text-gray-600 hover:text-black transition-colors">
                River North
              </Link>
              <Link href="/locations" className="text-sm text-gray-600 hover:text-black transition-colors">
                All Locations
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Company
            </p>
            <div className="flex flex-col gap-3">
              <Link href="/about" className="text-sm text-gray-600 hover:text-black transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-sm text-gray-600 hover:text-black transition-colors">
                Contact
              </Link>
              <Link href="/get-a-quote" className="text-sm text-accent hover:opacity-80 transition-opacity">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400">
            © {currentYear} Chicago Commercial Cleaner
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-xs text-gray-400 hover:text-gray-600 transition-colors">
              Privacy
            </Link>
            <Link href="/terms-of-service" className="text-xs text-gray-400 hover:text-gray-600 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}