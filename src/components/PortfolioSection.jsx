import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';

const portfolioItems = [
  {
    title: 'Background Design',
    desc: 'Custom tech-themed background visuals.',
    img: '/images/data1.jpg',
    link: 'https://dawdul99.blogspot.com/2025/03/backraunt-imag.html',
  },
  {
    title: 'Virtual Assistant',
    desc: 'AI-powered sound-based virtual assistant.',
    img: '/images/data2.jpg',
    link: 'https://dawdul99.blogspot.com/2025/02/i-will-be-your-sound-virtual-assistant.html',
  },
  {
    title: 'Data Entry & Web Research',
    desc: 'Reliable and accurate data management services.',
    img: '/images/data3.jpg',
    link: 'https://dawdul99.blogspot.com/2025/02/i-will-do-perfect-data-entry-web.html',
  },
  {
    title: 'YouTube Thumbnail Design',
    desc: 'Creative thumbnail designs for your YouTube channel.',
    img: '/images/data4.jpg',
    link: 'https://dawdul99.blogspot.com/2025/02/thumbnail-design-for-biggest-youtube.html',
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2 },
  }),
  hover: { scale: 1.05, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)' },
};

function PortfolioSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-900 dark:from-gray-900 via-gray-800 dark:via-gray-800 to-black dark:to-gray-950 text-white font-inter relative overflow-hidden">
      <div className="absolute inset-0 particle-bg"></div>
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          "name": "MonkeyTech Portfolio",
          "creator": {
            "@type": "Organization",
            "name": "MonkeyTech",
            "url": "https://www.monkeytech.com"
          },
          "description": "A showcase of MonkeyTech's innovative projects.",
          "hasPart": [
            ${portfolioItems.map(
              (item) => `{
                "@type": "CreativeWork",
                "name": "${item.title}",
                "description": "${item.desc}",
                "url": "${item.link}"
              }`
            ).join(',')}
          ]
        }
      `}</script>
      <motion.div
        className="text-center mb-16 relative z-10"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-200 tracking-tight drop-shadow-xl">
          Our <span className="bg-gradient-to-r from-gray-300 to-gray-400 text-transparent bg-clip-text">Portfolio</span>
        </h2>
        <motion.p
          className="mt-4 text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed text-gray-300"
          variants={sectionVariants}
          transition={{ delay: 0.2 }}
        >
          Explore our showcase of cutting-edge projects that redefine technology and innovation.
        </motion.p>
      </motion.div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {portfolioItems.map((item, index) => (
          <Tilt key={index} options={{ max: 15, scale: 1.05, speed: 400 }}>
            <motion.div
              className="relative bg-gray-800/30 backdrop-blur-lg rounded-lg p-6 border border-gray-600/30 hover:border-gray-500/70 transition-all duration-300 text-center"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              custom={index}
              whileHover="hover"
              role="article"
              aria-labelledby={`portfolio-title-${index}`}
              tabIndex={0}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
                loading="lazy"
              />
              <h3 id={`portfolio-title-${index}`} className="text-xl font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                {item.desc}
              </p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-gray-300 font-medium hover:text-gray-200 transition-colors duration-200"
                aria-label={`Learn more about ${item.title}`}
              >
                Learn More
              </a>
            </motion.div>
          </Tilt>
        ))}
      </div>
      <style jsx>{`
        .particle-bg {
          position: absolute;
          inset: 0;
          background: url('https://via.placeholder.com/1920x1080?text=Tech+Wave') center/cover;
          opacity: 0.15;
          animation: particleFlow 50s linear infinite;
        }
        @keyframes particleFlow {
          0% { background-position: 0 0; }
          100% { background-position: 0 -1000px; }
        }
        .font-inter {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
    </section>
  );
}

export default PortfolioSection;