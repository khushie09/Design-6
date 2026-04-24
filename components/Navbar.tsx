'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50">
      {/* Transparent background */}
      <div className="absolute inset-0 bg-transparent" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="group">
              <span className="text-xl md:text-2xl font-bold text-white">
                Brand
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link href="#features" className="px-4 py-2 text-sm font-medium text-white hover:text-blue-200 transition-colors duration-200">
              Features
            </Link>
            <Link href="#product" className="px-4 py-2 text-sm font-medium text-white hover:text-blue-200 transition-colors duration-200">
              Product
            </Link>
            <Link href="#pricing" className="px-4 py-2 text-sm font-medium text-white hover:text-blue-200 transition-colors duration-200">
              Pricing
            </Link>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:flex items-center">
            <button className="px-6 py-2.5 bg-white/20 text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:bg-white/30">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
