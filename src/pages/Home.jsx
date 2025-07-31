import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import FeaturesSection from '../components/FeaturesSection';
import TeamSection from '../components/TeamSection';
import RatingsSection from '../components/RatingsSection';
import ContactSection from '../components/ContactSection';
import PortfolioSection from '../components/PortfolioSection';
import TestimonialsSection from '../components/TestimonialsSection';

function Home() {
  return (
    <main
      className="min-h-screen bg-gradient-to-b from-blue-900 dark:from-gray-900 via-gray-800 dark:via-gray-800 to-black dark:to-gray-950 text-white font-inter transition-colors duration-300"
      role="main"
      aria-label="MonkeyTech Homepage"
    >
      <section id="hero" className="snap-start">
        <HeroSection />
      </section>
      <section id="services" className="snap-start">
        <ServicesSection />
      </section>
      <section id="portfolio" className="snap-start">
        <PortfolioSection />
      </section>
      <section id="features" className="snap-start">
        <FeaturesSection />
      </section>
      <section id="team" className="snap-start">
        <TeamSection />
      </section>
     
      <section id="ratings" className="snap-start">
        <RatingsSection />
      </section>
      <section id="contact" className="snap-start">
        <ContactSection />
      </section>
      <style jsx>{`
        .font-inter {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
    </main>
  );
}

export default Home;