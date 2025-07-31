import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

function TeamSection() {
  const { theme } = useTheme();
  const teamMembers = [
    {
      name: 'Kaushal Tiwari ',
      role: 'Founder & CEO',
      detail: 'As the visionary behind MonkeyTech, I lead with a passion for innovation and strategic growth, steering the company toward cutting-edge solutions since its inception in 2025.',
      image: '/images/Kaushal.jpg',
      linkedin: 'https://www.linkedin.com/in/kaushal-tiwari-294628227/',
    },
    {
      name: 'Vishal Rathi',
      role: 'Co-Founder & CTO',
      detail: 'A key architect of MonkeyTech’s technical foundation, I bring fresh expertise in building scalable systems, contributing to our journey since 2025.',
      image: '/images/Vishal.png',
      linkedin: 'www.linkedin.com/in/vishal-rathi-b24904275/',
    },
  ];

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
            height: 400px;
          }
          .flip-card-inner {
            position: relative;
            width: 100%;
            height: 100%;
            transition: transform 0.7s;
          }
          .flip-card-front,
          .flip-card-back {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
          }
        `}
      </style>
      <section className={`py-16 px-6 rounded-lg shadow-2xl mb-16 ${theme === 'dark' ? 'bg-[#0c1b2c]' : 'bg-gray-100'}`}>
        <h2 className={`text-4xl font-bold text-green-400 text-center mb-12 drop-shadow-md ${theme === 'dark' ? 'text-shadow-dark' : 'text-shadow-light'}`}>Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => {
            const [isFlipped, setIsFlipped] = useState(false);

            return (
              <div
                key={index}
                className="flip-card perspective-1000 cursor-pointer"
                onClick={() => setIsFlipped(!isFlipped)}
              >
                <div className={`flip-card-inner transition-transform duration-700 preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
                  {/* Front Side */}
                  <div className={`flip-card-front rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300 backface-hidden ${theme === 'dark' ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-700'}`}>
                    <img
                      src={member.image}
                      alt={`${member.name} portrait`}
                      className="w-48 h-48 mx-auto rounded-full object-cover mb-4"
                      onError={(e) => {
                        console.error(`Failed to load ${member.image}. Check if it exists in public/images/. Using fallback:`, e);
                        e.target.src = `https://via.placeholder.com/192?text=${member.name}`;
                      }}
                      onLoad={() => console.log(`Successfully loaded ${member.image}`)}
                    />
                    <h3 className={`text-xl font-semibold ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>{member.name}</h3>
                    <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>{member.role}</p>
                    <motion.a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`mt-4 inline-block ${theme === 'dark' ? 'text-green-400 hover:text-green-300' : 'text-green-600 hover:text-green-700'}`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={`Visit ${member.name}'s LinkedIn profile`}
                    >
                      <FaLinkedin size={24} />
                    </motion.a>
                  </div>
                  {/* Back Side */}
                  <div className={`flip-card-back rounded-lg p-6 text-center shadow-md flex items-center justify-center rotate-y-180 backface-hidden ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-300 text-gray-900'}`}>
                    <div>
                      <img
                        src={member.image}
                        alt={`${member.name} portrait`}
                        className="w-48 h-48 mx-auto rounded-full object-cover mb-4 opacity-50"
                        onError={(e) => {
                          console.error(`Failed to load ${member.image} on back. Using fallback:`, e);
                          e.target.src = `https://via.placeholder.com/192?text=${member.name}`;
                        }}
                        onLoad={() => console.log(`Successfully loaded ${member.image} on back`)}
                      />
                      <h3 className="text-xl font-semibold mb-3">{member.name}</h3>
                      <p className="text-sm leading-relaxed">{member.detail}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default TeamSection;