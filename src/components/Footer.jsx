import React, { useState } from 'react';
import { FaTwitter, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate newsletter subscription
    setIsSubscribed(true);
    setEmail('');
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-teal-900 text-gray-200 py-12 px-4 sm:px-6 lg:px-8 mt-12 font-inter relative backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-green-400 drop-shadow-md">MonkeyTech</h3>
            <p className="text-sm leading-relaxed">
              Empowering innovation through cutting-edge technology solutions.
            </p>
            <div className="flex space-x-4">
              {[
                { href: 'https://twitter.com/monkeytech', icon: FaTwitter, label: 'Twitter' },
                { href: 'https://github.com/monkeytech', icon: FaGithub, label: 'GitHub' },
                { href: 'https://linkedin.com/company/monkeytech', icon: FaLinkedin, label: 'LinkedIn' },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-300 hover:scale-110 hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                  aria-label={`Visit MonkeyTech on ${label}`}
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <nav className="space-y-4" aria-label="Footer navigation">
            <h3 className="text-lg font-semibold text-green-400 drop-shadow-md">Quick Links</h3>
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
                    className="hover:text-green-300 hover:underline transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                  >
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Newsletter Signup */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-green-400 drop-shadow-md">Newsletter</h3>
            <p className="text-sm leading-relaxed">Stay updated with our latest news and offers.</p>
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 p-3 rounded-md bg-gray-800/30 text-white border border-green-500/20 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300 backdrop-blur-sm"
                aria-label="Email address for newsletter"
                required
              />
              <button
                type="submit"
                className="px-4 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold rounded-md hover:from-green-600 hover:to-teal-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10">Subscribe</span>
                <span className="absolute inset-0 bg-green-400/50 opacity-0 hover:opacity-30 transition-opacity duration-300 rounded-md" />
              </button>
            </form>
            {isSubscribed && (
              <p className="text-green-400 text-sm mt-2 opacity-0 animate-fade-in">
                Thanks for subscribing!
              </p>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-green-500/20 text-center">
          <p className="text-xs sm:text-sm">
            © {new Date().getFullYear()} MonkeyTech. All rights reserved.
          </p>
          <p className="text-xs mt-2">
            Designed with <span className="text-red-500">♥</span> by MonkeyTech Team
          </p>
        </div>
      </div>
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </footer>
  );
}

export default Footer;