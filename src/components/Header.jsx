import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <header className="flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8 bg-gray-900/90 dark:bg-gray-100/90 backdrop-blur-md text-white dark:text-gray-900 sticky top-0 z-50 shadow-md">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center space-x-2"
      >
        <img
          src="/images/header.png"
          alt="MonkeyTech Logo"
          className="h-10 sm:h-12 w-auto"
          onError={(e) => {
            console.error('Failed to load /images/header.png. Check if the file exists in public/images/. Using fallback:', e);
            e.target.src = 'https://via.placeholder.com/48?text=MonkeyTech+Logo';
          }}
          onLoad={() => console.log('Successfully loaded /images/header.png')}
        />
        <span className="text-xl sm:text-2xl font-bold text-green-400 dark:text-green-600">MonkeyTech</span>
      </motion.div>

      <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
        {navItems.map((item) => (
          <motion.div
            key={item.path}
            whileHover={{ scale: 1.05, color: '#34D399' }}
            transition={{ duration: 0.2 }}
          >
            <Link
              to={item.path}
              className="text-sm lg:text-base font-medium text-white dark:text-gray-900 hover:text-green-400 dark:hover:text-green-600 transition-colors duration-200"
            >
              {item.label}
            </Link>
          </motion.div>
        ))}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-700 dark:bg-gray-200 hover:bg-gray-600 dark:hover:bg-gray-300 transition-colors duration-200"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? (
            <FaSun className="text-yellow-400" size={20} />
          ) : (
            <FaMoon className="text-gray-900" size={20} />
          )}
        </motion.button>
      </nav>

      <div className="md:hidden flex items-center space-x-2">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-700 dark:bg-gray-200 hover:bg-gray-600 dark:hover:bg-gray-300 transition-colors duration-200"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? (
            <FaSun className="text-yellow-400" size={20} />
          ) : (
            <FaMoon className="text-gray-900" size={20} />
          )}
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleMobileMenu}
          className="p-2 rounded-full bg-gray-700 dark:bg-gray-200 hover:bg-gray-600 dark:hover:bg-gray-300 transition-colors duration-200"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <FaTimes className="text-white dark:text-gray-900" size={20} />
          ) : (
            <FaBars className="text-white dark:text-gray-900" size={20} />
          )}
        </motion.button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="absolute top-full left-0 w-full bg-gray-900/95 dark:bg-gray-100/95 backdrop-blur-md md:hidden flex flex-col items-center py-6 space-y-4 shadow-md"
          >
            {navItems.map((item) => (
              <motion.div
                key={item.path}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  to={item.path}
                  onClick={closeMobileMenu}
                  className="text-base font-medium text-white dark:text-gray-900 hover:text-green-400 dark:hover:text-green-600 transition-colors duration-200"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;