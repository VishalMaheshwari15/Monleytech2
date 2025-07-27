import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';
import { useTheme } from '../context/ThemeContext';

const services = [
  { title: 'Website Development', desc: 'Custom websites with SEO and modern tech stacks.', icon: '🌐', category: 'Web' },
  { title: 'Application Development', desc: 'Native and cross-platform mobile and web apps.', icon: '📱', category: 'App' },
  { title: 'Software Development', desc: 'Tailored software solutions for business needs.', icon: '💻', category: 'Software' },
  { title: 'UI/UX Design', desc: 'Intuitive and user-centric design experiences.', icon: '🎨', category: 'Design' },
  { title: 'Power BI & Excel Dashboard', desc: 'Data-driven dashboards for actionable insights.', icon: '📊', category: 'Data' },
  { title: 'Digital Marketing Services', desc: 'SEO, social media, and content marketing strategies.', icon: '📣', category: 'Marketing' },
  { title: 'AI and Agentic Automation', desc: 'Advanced AI and autonomous agent solutions for business automation.', icon: '🤖', category: 'AI' },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const filterVariants = {
  active: { scale: 1.1, backgroundColor: '#00FF9C', color: '#1F2937' },
  inactive: { scale: 1, backgroundColor: 'transparent', color: '#D1D5DB' },
};

function ServicesSection() {
  const { theme } = useTheme();
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...new Set(services.map((service) => service.category))];
  const filteredServices = filter === 'All' ? services : services.filter((service) => service.category === filter);

  return (
    <section
      className={`min-h-screen py-20 px-6 sm:px-10 lg:px-16 bg-gradient-to-br from-gray-100/50 dark:from-gray-900 dark:to-gray-800 via-white/50 dark:via-gray-800/50 to-gray-200/50 dark:to-gray-950/50 text-gray-900 dark:text-gray-100 font-inter relative overflow-hidden`}
      aria-labelledby="services-heading"
    >
      <div className="absolute inset-0 particle-bg opacity-5 dark:opacity-10" />
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Technology Solutions",
          "provider": {
            "@type": "Organization",
            "name": "MonkeyTech",
            "url": "https://www.monkeytech.com"
          },
          "description": "Comprehensive technology solutions including website development, application development, software development, UI/UX design, Power BI dashboards, digital marketing, and AI with agentic automation.",
          "offers": [
            ${services.map(
              (service) => `{
                "@type": "Offer",
                "name": "${service.title}",
                "description": "${service.desc}",
                "category": "${service.category}"
              }`
            ).join(',')}
          ]
        }
      `}</script>
      <motion.div
        className="text-center mb-12 relative z-10 max-w-4xl mx-auto"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <h2
          id="services-heading"
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white tracking-tight drop-shadow-md"
        >
          Our{' '}
          <span className="bg-gradient-to-r from-teal-400 to-emerald-500 text-transparent bg-clip-text">
            Services
          </span>
        </h2>
        <motion.p
          className="mt-6 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed text-gray-700 dark:text-gray-300"
          variants={sectionVariants}
          transition={{ delay: 0.2 }}
        >
          Empower your business with MonkeyTech’s cutting-edge services, designed to deliver innovation and growth.
        </motion.p>
      </motion.div>
      <nav className="flex flex-wrap justify-center gap-3 mb-12 relative z-10" aria-label="Service category filter">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-5 py-2 rounded-lg border border-gray-300 dark:border-gray-700 text-sm font-medium transition-all duration-300 ${
              filter === category
                ? 'bg-teal-400 text-gray-900 shadow-md'
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
            } focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-gray-900`}
            variants={filterVariants}
            animate={filter === category ? 'active' : 'inactive'}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`Filter services by ${category}`}
          >
            {category}
          </motion.button>
        ))}
      </nav>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {filteredServices.map((service, index) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            desc={service.desc}
            icon={service.icon}
            index={index}
          />
        ))}
      </div>
      <motion.div
        className="fixed bottom-6 right-6 bg-gradient-to-r from-teal-400 to-emerald-500 text-white px-6 py-3 rounded-xl shadow-lg z-20 overflow-hidden"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0, 128, 0, 0.3)' }}
        aria-live="polite"
      >
        <a
          href="/contact"
          className="text-sm font-semibold hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-teal-500 relative z-10"
          aria-label="Get started with MonkeyTech services"
        >
          Get Started
        </a>
        <motion.span
          className="absolute inset-0 bg-teal-400/30 opacity-0"
          whileHover={{ opacity: 0.2, scale: 1.5 }}
          transition={{ duration: 0.3 }}
          style={{ borderRadius: '50%', transformOrigin: 'center' }}
        />
      </motion.div>
      <style jsx>{`
        .particle-bg {
          background: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"%3E%3Cpath fill="%2300FF9C" fill-opacity="0.1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,133.3C960,139,1056,213,1152,229.3C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,0,320Z"%3E%3C/path%3E%3C/svg%3E')
            center/cover;
          animation: waveFlow 20s linear infinite;
        }
        @keyframes waveFlow {
          0% { background-position: 0 0; }
          100% { background-position: 1440px 0; }
        }
        .font-inter {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
    </section>
  );
}

export default ServicesSection;