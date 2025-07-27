import React from 'react';
import HeroSection from '../components/HeroSection.jsx';
import ServicesSection from '../components/ServicesSection.jsx';
import FeaturesSection from '../components/FeaturesSection.jsx';
import TeamSection from '../components/TeamSection.jsx';
import RatingsSection from '../components/RatingsSection.jsx';
import ContactSection from '../components/ContactSection.jsx';
import PortfolioSection from '../components/PortfolioSection.jsx';
import TestimonialsSection from '../components/TestimonialsSection.jsx';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 dark:from-gray-900 via-gray-800 dark:via-gray-800 to-black dark:to-gray-950 text-white transition-colors duration-300">
      <section id="hero">
        <HeroSection />
      </section>
      <section id="services">
        <ServicesSection />
      </section>
      <section id="portfolio">
        <PortfolioSection />
      </section>
      
      <section id="features">
        <FeaturesSection />
      </section>
      <section id="team">
        <TeamSection />
      </section>
      <section id="ratings">
        <RatingsSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
    </div>
  );
}

export default Home;