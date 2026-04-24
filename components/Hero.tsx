'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section 
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-between"
      style={{
        backgroundImage: 'url(/hero-bg.png)',
      }}
    >
      {/* Centered Content */}
      <div className="flex-1 flex items-center justify-center w-full">
        <div className="text-center max-w-2xl px-4 sm:px-6">
          {/* Main Heading */}
          <h1 
            className="text-4xl sm:text-5xl font-semibold text-white mb-6 tracking-tight leading-snug"
            style={{
              textShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
            }}
          >
            Build Without Limits
          </h1>

          {/* Subheading */}
          <p 
            className="text-lg sm:text-xl text-white mb-10 tracking-tight leading-relaxed"
            style={{
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
            }}
          >
            Create and scale modern products faster.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            {/* Primary Button */}
            <button 
              className="px-7 py-3 bg-slate-100 text-black font-medium rounded transition-all duration-300 hover:bg-slate-200 hover:scale-105 active:scale-95"
              style={{
                fontFamily: 'Inter, sans-serif',
              }}
            >
              Get Started
            </button>

            {/* Secondary Button */}
            <button 
              className="px-7 py-3 bg-transparent text-white font-medium rounded transition-all duration-300 hover:bg-white/10 hover:scale-105 active:scale-95"
              style={{
                fontFamily: 'Inter, sans-serif',
              }}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Footer on background image */}
      <footer className="w-full px-4 sm:px-6 py-6">
        <div className="max-w-7xl mx-auto">
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
    </section>
  );
}
