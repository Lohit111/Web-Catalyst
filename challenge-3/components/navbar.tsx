'use client';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { useTheme } from '@/contexts/ThemeProvider';

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useTheme();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu visibility
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null); // Ref for the mobile menu

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close dropdown and mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef, mobileMenuRef]);

  return (
    <nav className="flex sticky top-0 z-50 w-full p-4 px-4 md:px-16 bg-gray-200 dark:bg-gray-800 justify-between items-center left-0">
      <div>
        <h1 className="text-gray-900 dark:text-white font-extrabold text-2xl md:text-3xl">WorkConnect</h1>
      </div>

      {/* Hamburger menu for mobile */}
      <div className="md:hidden flex items-center gap-2">
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-gray-300 text-gray-800 dark:bg-gray-700 dark:text-white shadow-lg"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
        <button onClick={toggleMobileMenu} className="text-gray-900 dark:text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Desktop menu */}
      <div className="hidden md:flex items-center gap-4">
        {/* Explore Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={toggleDropdown}
            className="text-gray-900 dark:text-white px-4 py-2 rounded hover:bg-gray-300 dark:hover:bg-gray-700"
          >
            Explore
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 rounded-md shadow-lg py-1 z-20">
              <Link href="/explore/1" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">
                Category 1
              </Link>
              <Link href="/explore/2" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">
                Category 2
              </Link>
              <Link href="/explore/all" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">
                View All
              </Link>
            </div>
          )}
        </div>

        <Link className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" href="/join">
          Join
        </Link>
        <Link className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" href="/sign-in">
          Sign In
        </Link>
        <Link className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" href="/become-a-seller">
          Become a Seller.
        </Link>
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-gray-300 text-gray-800 dark:bg-gray-700 dark:text-white shadow-lg"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div ref={mobileMenuRef} className="md:hidden absolute top-full left-0 w-full bg-gray-200 dark:bg-gray-800 shadow-lg py-2 flex flex-col items-center gap-4">
          {/* Explore Dropdown for mobile */}
          <div className="relative w-full text-center">
            <button
              onClick={toggleDropdown}
              className="text-gray-900 dark:text-white px-4 py-2 rounded hover:bg-gray-300 dark:hover:bg-gray-700 w-full"
            >
              Explore
            </button>
            {isDropdownOpen && (
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white dark:bg-gray-700 rounded-md shadow-lg py-1 z-20">
                <Link href="/explore/category1" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">
                  Category 1
                </Link>
                <Link href="/explore/category2" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">
                  Category 2
                </Link>
                <Link href="/explore/all" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">
                  View All
                </Link>
              </div>
            )}
          </div>
          <Link className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full text-center" href="/join">
            Join
          </Link>
          <Link className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full text-center" href="/sign-in">
            Sign In
          </Link>
          <Link className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full text-center" href="/become-a-seller">
            Become a Seller.
          </Link>
        </div>
      )}
    </nav>
  );
}
