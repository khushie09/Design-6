'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/80">
            © 2026 Brand. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="text-sm text-white/80 hover:text-white transition-colors duration-200">
              Privacy
            </Link>
            <span className="text-white/40">•</span>
            <Link href="#" className="text-sm text-white/80 hover:text-white transition-colors duration-200">
              Terms
            </Link>
            <span className="text-white/40">•</span>
            <Link href="#" className="text-sm text-white/80 hover:text-white transition-colors duration-200">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
