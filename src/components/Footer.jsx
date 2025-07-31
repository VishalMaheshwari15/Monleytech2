import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Added AnimatePresence
import { FaTwitter, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa';

function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubscribed(true);
    setEmail('');
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  const socialVariants = {
    hover: { scale: 1.1, rotate: 5 },
    tap: { scale: 0.9 },
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-200 py-12 px-4 sm:px-6 lg:px-8 mt-12 font-inter relative backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-green-500 dark:text-green-400 drop-shadow-md">
              MonkeyTech
            </h3>
            <p className="text-sm text-gray-300 dark:text-gray-200 leading-relaxed">
              Empowering innovation through cutting-edge technology solutions.
            </p>
            <div className="flex space-x-4">
              {[
                { href: 'https://x.com/MonkeyyTech/', icon: FaTwitter, label: 'Twitter', color: '#1DA1F2' },
                { href: 'https://github.com/monkeytech', icon: FaGithub, label: 'GitHub', color: '#333' },
                { href: 'https://www.instagram.com/monkeyy.tech?igsh=MTFsZzRuZjd4cTZkMQ==', icon: FaInstagram, label: 'Instagram', color: '#E1306C' },
                { href: 'https://wa.me/919316036603', icon: FaWhatsapp, label: 'WhatsApp', color: '#25D366' },
              ].map(({ href, icon: Icon, label, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={socialVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="text-gray-400 hover:text-[var(--social-color)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                  style={{ '--social-color': color }}
                  aria-label={`Visit MonkeyTech on ${label}`}
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <nav className="space-y-4" aria-label="Footer navigation">
            <h3 className="text-lg font-semibold text-green-500 dark:text-green-400 drop-shadow-md">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: '/about', text: 'About Us' },
                { href: '/services', text: 'Services' },
                { href: '/contact', text: 'Contact' },
                { href: '/privacy', text: 'Privacy Policy' },
              ].map(({ href, text }) => (
                <li key={text}>
                  <a
                    href={href}
                    className="text-gray-300 dark:text-gray-200 hover:text-green-400 dark:hover:text-green-300 hover:underline transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                  >
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Newsletter Signup */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-green-500 dark:text-green-400 drop-shadow-md">
              Newsletter
            </h3>
            <p className="text-sm text-gray-300 dark:text-gray-200 leading-relaxed">
              Stay updated with our latest news and offers.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 p-3 rounded-lg bg-gray-800/30 text-gray-200 border border-green-500/20 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300 backdrop-blur-sm"
                aria-label="Email address for newsletter"
                required
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-3 bg-gradient-to-r from-green-500 to-teal-400 text-gray-900 dark:text-white font-semibold rounded-lg hover:from-green-600 hover:to-teal-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10">Subscribe</span>
                <span className="absolute inset-0 bg-green-400/50 opacity-0 hover:opacity-30 transition-opacity duration-300 rounded-lg" />
              </motion.button>
            </form>
            <AnimatePresence>
              {isSubscribed && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="text-green-400 text-sm mt-2"
                >
                  Thanks for subscribing!
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-green-500/20 text-center">
          <p className="text-xs sm:text-sm text-gray-300 dark:text-gray-200">
            © {new Date().getFullYear()} MonkeyTech. All rights reserved.
          </p>
          <p className="text-xs sm:text-sm mt-2 text-gray-300 dark:text-gray-200">
            Designed by MonkeyTech Team
          </p>
        </div>
      </div>
      <style jsx>{`
        .font-inter {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
    </footer>
  );
}

export default Footer;