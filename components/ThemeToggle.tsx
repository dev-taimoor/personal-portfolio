// components/ThemeToggle.tsx
'use client';

import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check current theme on mount
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    const newIsDark = !isDark;
    
    if (newIsDark) {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
    
    setIsDark(newIsDark);
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 w-14 h-14 dark:bg-gray-800 bg-gray-100 rounded-full flex items-center justify-center dark:text-gray-400 text-gray-700 dark:hover:text-white hover:text-gray-900 dark:hover:bg-gray-700 hover:bg-gray-200 transition-all duration-200 shadow-lg z-50 border dark:border-gray-700 border-gray-300"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light Mode' : 'Dark Mode'}
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default ThemeToggle;