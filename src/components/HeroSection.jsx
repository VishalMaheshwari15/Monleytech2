import React from 'react';
import { motion } from 'framer-motion';

function HeroSection() {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, ease: 'easeOut' } },
  };

  const logoVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: [0, -10, 0],
      opacity: 1,
      transition: { duration: 1.5, ease: 'easeInOut', repeat: Infinity, repeatType: 'loop' },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2, ease: 'easeOut' } },
  };

  const subtextVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4, ease: 'easeOut' } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.6, ease: 'easeOut' } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
    tap: { scale: 0.95 },
  };

  return (
    <motion.section
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 dark:from-green-800 to-blue-700 dark:to-blue-900 text-white overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
      }}
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
      role="banner"
      aria-label="MonkeyTech Hero Section"
    >
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.img
          src="/images/logo.png"
          alt="MonkeyTech Logo"
          className="mx-auto h-32 mb-8"
          onError={(e) => {
            console.error('Failed to load /images/logo.png:', e);
            e.target.src = 'https://via.placeholder.com/128?text=MonkeyTech+Logo';
          }}
          variants={logoVariants}
          initial="hidden"
          animate="visible"
          loading="lazy"
        />
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white dark:text-gray-100 mb-6 drop-shadow-xl font-inter tracking-tight"
          variants={headingVariants}
          initial="hidden"
          animate="visible"
        >
          Welcome to <span className="text-green-400">MonkeyTech</span>
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl text-gray-100 dark:text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8 font-inter"
          variants={subtextVariants}
          initial="hidden"
          animate="visible"
        >
          Revolutionizing digital solutions with cutting-edge technology and innovative approaches.
        </motion.p>
        <motion.a
          href="/services"
          className="inline-block px-8 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-lg hover:bg-green-600 dark:hover:bg-green-700 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-400/50 font-inter"
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          whileTap="tap"
          aria-label="Explore MonkeyTech services"
          role="button"
        >
          Explore Now
        </motion.a>
      </div>

      {/* Decorative Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black dark:from-gray-950 to-transparent z-0"></div>

      {/* Subtle Particle Effect */}
      {Array.from({ length: 3 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 bg-green-400 rounded-full opacity-20 blur-sm"
          style={{ top: `${20 + i * 30}%`, left: `${10 + i * 30}%` }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      <style jsx>{`
        .font-inter {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "MonkeyTech",
          "url": "https://www.monkeytech.com",
          "description": "Revolutionizing digital solutions with cutting-edge technology and innovative approaches.",
          "publisher": {
            "@type": "Organization",
            "name": "MonkeyTech",
            "logo": {
              "@type": "ImageObject",
              "url": "/images/logo.png"
            }
          }
        }
      `}</script>
    </motion.section>
  );
}

export default HeroSection;