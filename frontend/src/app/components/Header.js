'use client';
import { ChevronDown } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white text-gray-800 px-10 py-3 flex justify-between items-center shadow">
      {/* Left Section: Logo + Main Nav */}
      <div className="flex items-center space-x-8">
        {/* Text Logo */}
        <div className="text-2xl font-bold text-blue-700 tracking-wide">PRACTO</div>

        {/* Main Navigation */}
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <a href="#" className="text-blue-700 border-b-2 border-blue-700 pb-1">Find Doctors</a>
          <a href="#" className="hover:text-blue-700 text-gray-600">Video Consult</a>
          <a href="#" className="hover:text-blue-700 text-gray-600">Surgeries</a>
        </nav>
      </div>

      {/* Right Section: Secondary Nav + Login */}
      <div className="flex items-center space-x-6 text-sm font-medium">
        <div className="flex items-center space-x-1">
          <span className="bg-blue-900 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded">NEW</span>
          <a href="#" className="hover:text-blue-700 text-gray-600 flex items-center gap-1">
            For Corporates
            <ChevronDown size={14} className="mt-0.5" />
          </a>
        </div>

        <a href="#" className="hover:text-blue-700 text-gray-600 flex items-center gap-1">
          For Providers
          <ChevronDown size={14} className="mt-0.5" />
        </a>

        <a href="#" className="hover:text-blue-700 text-gray-600">Security & help</a>

        <button className="border border-gray-300 px-4 py-1.5 rounded-md text-sm text-gray-700 hover:shadow-sm hover:border-gray-400">
          Login / Signup
        </button>
      </div>
    </header>
  );
}
