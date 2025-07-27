import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { FaLinkedin } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import TeamSection from '../components/TeamSection';

function About() {
  const { theme } = useTheme();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Hero Section
  const Hero = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-100 to-gray-300 dark:from-[#0c1b2c] dark:to-[#1e3a5f] relative z-10 snap-start min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto lg:grid lg:grid-cols-2 gap-0 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-primary dark:text-primary mb-6 tracking-tight">
              About MonkeyTech
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl max-w-3xl mb-10 leading-relaxed text-gray-900 dark:text-gray-200">
              Founded in 2025 by Vishal Rathi and Kaushal Tiwari, MonkeyTech is a pioneering startup revolutionizing digital solutions.
            </p>
            <motion.a
              href="/services"
              className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-teal-500 text-gray-900 dark:text-white font-semibold rounded-full shadow-neon hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Our Solutions
            </motion.a>
          </motion.div>
          <div
            className="flip-card perspective-1000 cursor-pointer"
            onClick={() => setIsFlipped(!isFlipped)}
          >
            <div className={`flip-card-inner transition-transform duration-700 preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`} style={{ height: '500px' }}>
              {/* Front Side */}
              <div className={`flip-card-front rounded-lg text-center shadow-md hover:shadow-lg transition-shadow duration-300 backface-hidden ${theme === 'dark' ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-700'}`}>
                <div className="h-[500px] w-full overflow-hidden rounded-lg">
                  <img
                    src="/images/About.png"
                    alt="About MonkeyTech"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      console.error('Failed to load /images/About.png. Check if the file exists in public/images/. Using fallback:', e);
                      e.target.src = 'https://via.placeholder.com/240?text=About+MonkeyTech';
                    }}
                    onLoad={() => console.log('Successfully loaded /images/About.png')}
                  />
                </div>
              </div>
              {/* Back Side */}
              <div className={`flip-card-back rounded-lg text-center shadow-md flex items-center justify-center rotate-y-180 backface-hidden ${theme === 'dark' ? 'bg-green-700 text-white' : 'bg-green-500 text-gray-100'}`}>
                <div>
                  <div className="h-[500px] w-full overflow-hidden rounded-lg">
                    <img
                      src="/images/About.png"
                      alt="About MonkeyTech"
                      className="w-full h-full object-cover opacity-50"
                      onError={(e) => {
                        console.error('Failed to load /images/About.png on back. Using fallback:', e);
                        e.target.src = 'https://via.placeholder.com/240?text=About+MonkeyTech';
                      }}
                      onLoad={() => console.log('Successfully loaded /images/About.png on back')}
                    />
                  </div>
                  <p className="text-sm leading-relaxed">Discover our journey and mission to revolutionize digital solutions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  // Mission Section
  const Mission = () => (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0c1b2c] snap-start min-h-screen flex items-center">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-primary dark:text-primary mb-10">Our Mission</h2>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-900 dark:text-gray-200 leading-relaxed">
          At MonkeyTech, we transform ideas into reality through innovative software solutions, crafting impactful, user-centric products.
        </p>
      </motion.div>
    </section>
  );

  // Timeline Section
  const Timeline = () => {
    const events = [
      { year: '2025', title: 'Founded', desc: 'MonkeyTech was founded with a vision to transform tech. 🚀', icon: '🚀' },
      { year: '2026', title: 'First International Client', desc: 'Secured our first international client, expanding our global reach. 🌍', icon: '🌍' },
      { year: '2027', title: 'Innovation Lab Launched', desc: 'Launched our Innovation Lab to pioneer AI-driven solutions. 💡', icon: '💡' },
    ];

    return (
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-100 to-gray-300 dark:from-[#0c1b2c] dark:to-[#1e3a5f] snap-start min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-4xl sm:text-5xl font-bold text-center text-primary dark:text-primary mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            Our Journey
          </motion.h2>
          <div className="relative">
            <div className="absolute left-4 sm:left-1/2 w-1 bg-gradient-to-b from-primary to-teal-500 h-full -translate-x-1/2"></div>
            {events.map((event, index) => (
              <motion.article
                key={event.year}
                className={`mb-12 flex items-center ${index % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: index * 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-full sm:w-1/2 px-4">
                  <div className="bg-white dark:bg-[#1e3a5f] p-6 rounded-xl shadow-neon">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{event.icon}</span>
                      <h3 className="text-xl font-semibold text-primary dark:text-primary">{event.year}: {event.title}</h3>
                    </div>
                    <p className="text-base mt-2 text-gray-900 dark:text-gray-200">{event.desc}</p>
                  </div>
                </div>
                <div className="hidden sm:block w-1/2">
                  <motion.div
                    className="w-4 h-4 bg-primary rounded-full absolute left-1/2 -translate-x-1/2"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // Achievements Section
  const Achievements = () => {
    const stats = [
      { label: 'Clients Served', value: 150, suffix: '+' },
      { label: 'Countries Reached', value: 20, suffix: '+' },
      { label: 'Projects Delivered', value: 300, suffix: '+' },
    ];

    return (
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-100 to-gray-300 dark:from-[#0c1b2c] dark:to-[#1e3a5f] snap-start min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-4xl sm:text-5xl font-bold text-center text-primary dark:text-primary mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            Our Achievements
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.3 }}
                viewport={{ once: true }}
              >
                <motion.p
                  className="text-4xl font-bold text-primary dark:text-primary"
                  initial={{ innerText: 0 }}
                  animate={{ innerText: stat.value }}
                  transition={{ duration: 2, ease: 'easeOut' }}
                >
                  {({ innerText }) => <span>{Math.round(innerText)}{stat.suffix}</span>}
                </motion.p>
                <p className="text-lg text-gray-900 dark:text-gray-200">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // Floating CTA Ribbon
  const CTA = () => (
    <motion.div
      className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-teal-500 text-gray-900 dark:text-white px-6 py-3 rounded-full shadow-neon z-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <a href="/contact" className="text-sm font-medium hover:underline">
        Ready to Innovate? Join Us Today!
      </a>
    </motion.div>
  );

  // Background Particles
  const Particle = ({ style }) => (
    <motion.div
      className="absolute w-8 h-8 bg-gradient-to-br from-primary to-teal-400 rounded-full opacity-20 blur-lg"
      animate={{
        x: [0, 50, -50, 0],
        y: [0, -30, 30, 0],
        scale: [1, 1.2, 0.8, 1],
      }}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: Math.random() }}
      style={style}
    />
  );

  return (
    <>
      <style>
        {`
          .perspective-1000 {
            perspective: 1000px;
          }
          .preserve-3d {
            transform-style: preserve-3d;
          }
          .rotate-y-180 {
            transform: rotateY(180deg);
          }
          .backface-hidden {
            backface-visibility: hidden;
          }
          .flip-card {
            position: relative;
            width: 100%;
          }
          .flip-card-inner {
            position: relative;
            width: 100%;
            height: 100%;
          }
          .flip-card-front,
          .flip-card-back {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
          }
          .font-inter {
            font-family: 'Inter', sans-serif;
          }
        `}
      </style>
      <main className="min-h-screen bg-white dark:bg-[#0c1b2c] text-gray-900 dark:text-white font-inter relative overflow-hidden snap-y snap-mandatory">
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "MonkeyTech",
            "foundingDate": "2025",
            "founder": [
              {
                "@type": "Person",
                "name": "Vishal Rathi",
                "jobTitle": "Co-Founder & CEO"
              },
              {
                "@type": "Person",
                "name": "Kaushal Tiwari",
                "jobTitle": "Co-Founder & CTO"
              }
            ],
            "description": "MonkeyTech is a pioneering startup founded in 2025, revolutionizing digital solutions with innovative, user-centric products.",
            "url": "https://www.monkeytech.com"
          }
        `}</script>
        {Array.from({ length: 5 }).map((_, i) => (
          <Particle key={i} style={{ top: `${20 + i * 15}%`, left: `${10 + i * 20}%` }} />
        ))}
        <Hero />
        <Mission />
        <Timeline />
        <TeamSection />
        <Achievements />
        <CTA />
      </main>
    </>
  );
}

export default About;