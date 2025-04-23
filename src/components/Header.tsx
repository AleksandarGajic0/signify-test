import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-semibold text-gray-700">
          <Link href="/">Signify</Link> {/* Placeholder Logo/Text */}
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex space-x-4">
          <Link href="/features" className="text-gray-600 hover:text-blue-600">Features</Link>
          <Link href="/pricing" className="text-gray-600 hover:text-blue-600">Pricing</Link>
          <Link href="/security" className="text-gray-600 hover:text-blue-600">Security</Link>
        </div>

        {/* Action Buttons (Desktop) */}
        <div className="hidden md:flex items-center space-x-3">
          <Link href="/login" className="px-4 py-2 text-gray-600 hover:text-blue-600">
            Log In
          </Link>
          <Link href="/signup" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Sign Up Free
          </Link>
        </div>

        {/* Mobile Menu Button (Placeholder) */}
        <div className="md:hidden">
          <button type="button" className="text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800">
            {/* Basic Hamburger Icon */}
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
            </svg>
          </button>
        </div>
      </nav>
      {/* Mobile Menu (Placeholder - logic needed) */}
      {/* <div className="md:hidden hidden"> ... mobile links ... </div> */}
    </header>
  );
};

export default Header;
