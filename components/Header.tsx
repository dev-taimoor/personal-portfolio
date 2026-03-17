// components/Header.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../data';
import { NavLink } from '../types';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'dark:bg-gray-900/95 bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="#home" className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            Taimoor
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link: NavLink) => (
              <Link
                key={link.name}
                href={link.href}
                className="dark:text-gray-300 text-gray-700 hover:text-orange-500 transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-200 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Hire Me Button */}
          <Link
            href="#contact"
            className="hidden md:inline-flex items-center px-6 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium rounded-full hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-200 transform hover:scale-105"
          >
            Hire Me
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden dark:text-gray-300 text-gray-700 dark:hover:text-white hover:text-gray-900"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 dark:border-t dark:border-gray-800 border-t border-gray-300">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link: NavLink) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="dark:text-gray-300 text-gray-700 hover:text-orange-500 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium rounded-full hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Hire Me
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;