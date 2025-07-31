import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import TeamSection from '../components/TeamSection';
import { useTheme } from '../context/ThemeContext';

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

    const heroVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    };

    return (
      <motion.section
        className="py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-100/50 dark:from-gray-900 via-gray-800/50 dark:via-gray-800/50 to-gray-200/50 dark:to-gray-950 text-gray-900 dark:text-gray-100 font-inter relative overflow-hidden snap-start min-h-screen flex items-center"
        variants={heroVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        aria-labelledby="about-heading"
      >
        <div className="absolute inset-0 particle-bg opacity-5 dark:opacity-10" />
        <div className="max-w-6xl mx-auto lg:grid lg:grid-cols-2 gap-8 items-center relative z-10">
          <motion.div variants={heroVariants}>
            <h1
              id="about-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-gray-100 mb-6 tracking-tight"
            >
              About{' '}
              <span className="bg-gradient-to-r from-green-500 to-teal-400 text-transparent bg-clip-text">
                MonkeyTech
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl max-w-3xl mb-10 leading-relaxed text-gray-600 dark:text-gray-200">
              Founded in 2025 by Kaushal Tiwari and Vishal Rathi, MonkeyTech is a pioneering startup revolutionizing digital solutions with innovative, user-centric products.
            </p>
            <motion.a
              href="/services"
              className="inline-block px-8 py-4 bg-gradient-to-r from-green-500 to-teal-400 text-gray-900 dark:text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-gray-900"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Explore MonkeyTech services"
            >
              Explore Our Solutions
            </motion.a>
          </motion.div>
          <Tilt options={{ max: 15, scale: 1.05, speed: 400 }}>
            <div
              className="flip-card perspective-1000 cursor-pointer"
              onClick={() => setIsFlipped(!isFlipped)}
            >
              <div
                className={`flip-card-inner transition-transform duration-700 preserve-3d ${
                  isFlipped ? 'rotate-y-180' : ''
                }`}
                style={{ height: '400px' }}
              >
                {/* Front Side */}
                <div
                  className={`flip-card-front relative bg-gray-800/30 dark:bg-gray-900/30 backdrop-blur-lg rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-green-500/20 hover:border-green-500/50 backface-hidden`}
                >
                  <img
                    src="/images/About.png"
                    alt="About MonkeyTech"
                    className="w-full h-full object-cover rounded-xl"
                    onError={(e) => {
                      console.error('Failed to load /images/About.png:', e);
                      e.target.src = 'https://via.placeholder.com/400?text=About+MonkeyTech';
                    }}
                    loading="lazy"
                  />
                </div>
                {/* Back Side */}
                <div
                  className={`flip-card-back relative bg-gray-800/30 dark:bg-gray-900/30 backdrop-blur-lg rounded-xl p-6 text-center flex items-center justify-center border border-green-500/20 rotate-y-180 backface-hidden`}
                >
                  <div>
                    <img
                      src="/images/About.png"
                      alt="About MonkeyTech"
                      className="w-full h-full object-cover rounded-xl opacity-50 absolute inset-0"
                      onError={(e) => {
                        console.error('Failed to load /images/About.png on back:', e);
                        e.target.src = 'https://via.placeholder.com/400?text=About+MonkeyTech';
                      }}
                      loading="lazy"
                    />
                    <p className="relative z-10 text-sm text-gray-200 dark:text-gray-300 leading-relaxed">
                      Discover our journey and mission to revolutionize digital solutions with cutting-edge technology.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Tilt>
        </div>
      </motion.section>
    );
  };

  // Mission Section
  const Mission = () => (
    <motion.section
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-100/50 dark:from-gray-900 via-gray-800/50 dark:via-gray-800/50 to-gray-200/50 dark:to-gray-950 text-gray-900 dark:text-gray-100 font-inter snap-start min-h-screen flex items-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
      aria-labelledby="mission-heading"
    >
      <div className="absolute inset-0 particle-bg opacity-5 dark:opacity-10" />
      <motion.div className="max-w-4xl mx-auto text-center relative z-10">
        <h2
          id="mission-heading"
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-gray-100 mb-10 tracking-tight"
        >
          Our{' '}
          <span className="bg-gradient-to-r from-green-500 to-teal-400 text-transparent bg-clip-text">
            Mission
          </span>
        </h2>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-200 leading-relaxed">
          At MonkeyTech, we transform ideas into reality through innovative software solutions, crafting impactful, user-centric products that drive growth and success.
        </p>
      </motion.div>
    </motion.section>
  );

  // Timeline Section
  const Timeline = () => {
    const events = [
      {
        year: '2025',
        title: 'Founded',
        desc: 'MonkeyTech was founded by Kaushal Tiwari and Vishal Rathi with a vision to transform technology. 🚀',
        icon: '🚀',
      },
      {
        year: '2026',
        title: 'First International Client',
        desc: 'Secured our first international client, expanding our global reach. 🌍',
        icon: '🌍',
      },
      {
        year: '2027',
        title: 'Innovation Lab Launched',
        desc: 'Launched our Innovation Lab to pioneer AI-driven solutions. 💡',
        icon: '💡',
      },
    ];

    const timelineVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    };

    return (
      <motion.section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-100/50 dark:from-gray-900 via-gray-800/50 dark:via-gray-800/50 to-gray-200/50 dark:to-gray-950 text-gray-900 dark:text-gray-100 font-inter snap-start min-h-screen flex items-center"
        variants={timelineVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        aria-labelledby="timeline-heading"
      >
        <div className="absolute inset-0 particle-bg opacity-5 dark:opacity-10" />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.h2
            id="timeline-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center text-gray-900 dark:text-gray-100 mb-12 tracking-tight"
            variants={timelineVariants}
          >
            Our{' '}
            <span className="bg-gradient-to-r from-green-500 to-teal-400 text-transparent bg-clip-text">
              Journey
            </span>
          </motion.h2>
          <div className="relative">
            <div className="absolute left-4 sm:left-1/2 w-1 bg-gradient-to-b from-green-500 to-teal-400 h-full -translate-x-1/2"></div>
            {events.map((event, index) => (
              <motion.article
                key={event.year}
                className={`mb-12 flex items-center ${isMobile || index % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}
                initial={{ opacity: 0, x: isMobile || index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: index * 0.3 }}
                viewport={{ once: true }}
                role="article"
                aria-labelledby={`event-${index}`}
              >
                <div className="w-full sm:w-1/2 px-4">
                  <div className="bg-gray-800/30 dark:bg-gray-900/30 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-green-500/20">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{event.icon}</span>
                      <h3
                        id={`event-${index}`}
                        className="text-xl font-semibold text-green-500 dark:text-green-400"
                      >
                        {event.year}: {event.title}
                      </h3>
                    </div>
                    <p className="text-sm mt-2 text-gray-200 dark:text-gray-300 leading-relaxed">
                      {event.desc}
                    </p>
                  </div>
                </div>
                <div className="hidden sm:block w-1/2">
                  <motion.div
                    className="w-4 h-4 bg-green-500 rounded-full absolute left-1/2 -translate-x-1/2"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>
    );
  };

  // Achievements Section
  const Achievements = () => {
    const stats = [
      { label: 'Clients Served', value: 150, suffix: '+' },
      { label: 'Countries Reached', value: 20, suffix: '+' },
      { label: 'Projects Delivered', value: 300, suffix: '+' },
    ];

    const statVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.3, ease: 'easeOut' },
      }),
    };

    return (
      <motion.section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-100/50 dark:from-gray-900 via-gray-800/50 dark:via-gray-800/50 to-gray-200/50 dark:to-gray-950 text-gray-900 dark:text-gray-100 font-inter snap-start min-h-screen flex items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        aria-labelledby="achievements-heading"
      >
        <div className="absolute inset-0 particle-bg opacity-5 dark:opacity-10" />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.h2
            id="achievements-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center text-gray-900 dark:text-gray-100 mb-12 tracking-tight"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            Our{' '}
            <span className="bg-gradient-to-r from-green-500 to-teal-400 text-transparent bg-clip-text">
              Achievements
            </span>
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="relative bg-gray-800/30 dark:bg-gray-900/30 backdrop-blur-lg rounded-xl p-6 text-center shadow-lg border border-green-500/20 hover:border-green-500/50 transition-all duration-300"
                variants={statVariants}
                initial="hidden"
                whileInView="visible"
                custom={index}
                viewport={{ once: true }}
                role="article"
                aria-labelledby={`stat-${index}`}
              >
                <motion.p
                  id={`stat-${index}`}
                  className="text-4xl font-bold text-green-500 dark:text-green-400 mb-2"
                  initial={{ innerText: 0 }}
                  animate={{ innerText: stat.value }}
                  transition={{ duration: 2, ease: 'easeOut' }}
                >
                  {({ innerText }) => <span>{Math.round(innerText)}{stat.suffix}</span>}
                </motion.p>
                <p className="text-sm text-gray-200 dark:text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    );
  };

  // Floating CTA Ribbon
  const CTA = () => (
    <motion.div
      className="fixed bottom-6 right-6 bg-gradient-to-r from-green-500 to-teal-400 text-gray-900 dark:text-white px-6 py-3 rounded-xl shadow-lg z-20 overflow-hidden"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(16, 185, 129, 0.3)' }}
      aria-live="polite"
    >
      <a
        href="/contact"
        className="text-sm font-semibold hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 focus:ring-offset-green-500"
        aria-label="Get started with MonkeyTech"
      >
        Ready to Innovate? Join Us Today!
      </a>
      <motion.span
        className="absolute inset-0 bg-green-400/30 opacity-0"
        whileHover={{ opacity: 0.2, scale: 1.5 }}
        transition={{ duration: 0.3 }}
        style={{ borderRadius: '50%', transformOrigin: 'center' }}
      />
    </motion.div>
  );

  // Background Particles
  const Particle = ({ style }) => (
    <motion.div
      className="absolute w-6 h-6 bg-gradient-to-br from-green-500 to-teal-400 rounded-full opacity-20 blur-sm"
      animate={{
        x: [0, 40, -40, 0],
        y: [0, -20, 20, 0],
        scale: [1, 1.3, 0.7, 1],
      }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: Math.random() }}
      style={style}
    />
  );

  return (
    <main
      className="min-h-screen bg-gradient-to-br from-gray-100/50 dark:from-gray-900 via-gray-800/50 dark:via-gray-800/50 to-gray-200/50 dark:to-gray-950 text-gray-900 dark:text-gray-100 font-inter relative overflow-hidden snap-y snap-mandatory"
      role="main"
      aria-label="MonkeyTech About Page"
    >
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "MonkeyTech",
          "foundingDate": "2025",
          "founder": [
            {
              "@type": "Person",
              "name": "Kaushal Tiwari",
              "jobTitle": "Founder & CEO",
              "sameAs": "https://www.linkedin.com/in/kaushal-tiwari-294628227/"
            },
            {
              "@type": "Person",
              "name": "Vishal Rathi",
              "jobTitle": "Co-Founder & CTO",
              "sameAs": "https://www.linkedin.com/in/vishal-rathi-b24904275/"
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
      <style jsx>{`
        .particle-bg {
          background: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"%3E%3Cpath fill="%2310B981" fill-opacity="0.15" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,133.3C960,139,1056,213,1152,229.3C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,0,320Z"%3E%3C/path%3E%3C/svg%3E')
            center/cover;
          animation: waveFlow 30s linear infinite;
        }
        @keyframes waveFlow {
          0% { background-position: 0 0; }
          100% { background-position: 1440px 0; }
        }
        .font-inter {
          font-family: 'Inter', sans-serif;
        }
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
          height: 400px;
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </main>
  );
}

export default About;