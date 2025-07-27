import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2, ease: 'easeOut' },
  }),
  hover: { scale: 1.05, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)' },
};

const iconVariants = {
  initial: { y: 0 },
  animate: { y: [-5, 5, -5], transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' } },
  hover: { rotate: 10, scale: 1.2, transition: { duration: 0.3 } },
};

function ServiceCard({ title, desc, icon, index }) {
  return (
    <Tilt options={{ max: 15, scale: 1.05, speed: 400 }}>
      <motion.div
        className="relative bg-gray-800/30 backdrop-blur-lg rounded-lg p-6 border border-green-500/20 hover:border-green-500/50 transition-all duration-300 text-center sm:snap-start dark:bg-gray-900/30"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        custom={index}
        role="article"
        aria-labelledby={`service-title-${title}`}
        tabIndex={0}
      >
        <motion.div
          className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-teal-400 text-white text-3xl mb-4 mx-auto shadow-lg"
          variants={iconVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          aria-hidden="true"
        >
          {icon}
        </motion.div>
        <h3
          id={`service-title-${title}`}
          className="text-xl font-semibold text-white mb-2 drop-shadow-md"
        >
          {title}
        </h3>
        <p className="text-sm text-gray-200 mb-4 leading-relaxed">
          {desc}
        </p>
        <a
          href="/contact"
          className="inline-block px-4 py-2 text-green-400 font-medium rounded-md bg-green-500/10 hover:bg-green-500/20 hover:text-green-300 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-gray-900 relative overflow-hidden"
          aria-label={`Learn more about ${title}`}
        >
          <span className="relative z-10">Learn More</span>
          <span className="absolute inset-0 bg-green-400/30 opacity-0 hover:opacity-50 transition-opacity duration-300 rounded-md" />
        </a>
      </motion.div>
    </Tilt>
  );
}

export default ServiceCard;