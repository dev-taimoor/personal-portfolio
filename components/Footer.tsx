// components/Footer.tsx
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { navLinks, socialLinks, contactInfo } from '../data';
import { NavLink, SocialLink } from '../types';
import DynamicIcon from './ui/DynamicIcon';

const Footer = () => {
  return (
    <footer className="dark:bg-gray-900 bg-white dark:border-gray-800 border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Link href="#home" className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-4 block">
              Taimoor
            </Link>
            <p className="dark:text-gray-400 text-gray-600 mb-6 max-w-md">
              Senior Full Stack Developer with 5+ years building SaaS platforms, e-commerce sites, and custom web applications.
              Let's work together to bring your ideas to life.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social: SocialLink) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 dark:bg-gray-800 bg-gray-200 rounded-full flex items-center justify-center dark:text-gray-400 text-gray-600 hover:text-orange-500 dark:hover:bg-gray-700 hover:bg-gray-300 transition-all duration-200"
                >
                  <span className="sr-only">{social.name}</span>
                  <DynamicIcon name={social.icon} size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold dark:text-white text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link: NavLink) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="dark:text-gray-400 text-gray-600 hover:text-orange-500 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold dark:text-white text-gray-900 mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center dark:text-gray-400 text-gray-600">
                <Mail className="w-4 h-4 mr-3 text-orange-500" />
                <span className="text-sm">{contactInfo.email}</span>
              </div>
              <div className="flex items-center dark:text-gray-400 text-gray-600">
                <Phone className="w-4 h-4 mr-3 text-orange-500" />
                <span className="text-sm">{contactInfo.phone}</span>
              </div>
              <div className="flex items-center dark:text-gray-400 text-gray-600">
                <MapPin className="w-4 h-4 mr-3 text-orange-500" />
                <span className="text-sm">{contactInfo.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="dark:border-gray-800 border-t border-gray-300 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="dark:text-gray-400 text-gray-600 text-sm">
            © 2026 Taimoor Ahmad. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-orange-500 text-sm transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-orange-500 text-sm transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;