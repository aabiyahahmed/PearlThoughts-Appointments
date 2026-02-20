"use client";
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navigation Header */}
      <header className="px-6 py-4 flex justify-between items-center border-b border-gray-100 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#4dbcd8] rounded-lg"></div>
          <span className="text-xl text-gray-900 font-medium tracking-tight">HealthPortal</span>
        </div>
        <div className="flex gap-4">
          <Link href="/login" className="text-sm text-gray-600 hover:text-[#4dbcd8] transition-colors pt-2">
            Login
          </Link>
          <Link href="/signup" className="bg-[#4dbcd8] text-white px-5 py-2 rounded-xl text-sm transition-transform active:scale-95">
            Get Started
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center max-w-4xl mx-auto">
        <span className="text-[#4dbcd8] text-sm uppercase tracking-widest mb-4">Modern Healthcare Solutions</span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight mb-6">
          Your health journey <br /> starts with a simple click.
        </h1>
        <p className="text-gray-600 text-lg mb-10 max-w-2xl leading-relaxed">
          Access top-rated specialists, book instant appointments, and manage your 
          medical records in one secure, professional platform.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link href="/signup" className="bg-[#4dbcd8] text-white px-10 py-4 rounded-2xl text-lg hover:bg-[#3ea9c4] transition-all text-center">
            Create Free Account
          </Link>
          <Link href="/doctors" className="border-2 border-gray-200 text-gray-700 px-10 py-4 rounded-2xl text-lg hover:bg-gray-50 transition-all text-center">
            Browse Doctors
          </Link>
        </div>

        
      </main>

      {/* Simple Footer */}
      <footer className="p-8 text-center text-gray-400 text-sm border-t border-gray-50">
        &copy; 2026 HealthPortal Inc. All rights reserved.
      </footer>
    </div>
  );
}

function Feature({ label, desc }: { label: string; desc: string }) {
  return (
    <div className="text-center">
      <h3 className="text-gray-900 font-medium mb-2">{label}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}