import React from 'react';
import { useThemeStore } from '../stores/themeStore';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

function Navbar() {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              JSON Schema Studio
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {theme === 'dark' ? (
                <SunIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              ) : (
                <MoonIcon className="h-5 w-5 text-gray-500" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;