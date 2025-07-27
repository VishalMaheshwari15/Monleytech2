  
import React from 'react';
import { FaRocket, FaServer, FaHeadset } from 'react-icons/fa';

const features = [
  {
    title: 'Innovative Solutions',
    desc: 'Cutting-edge tech to solve modern challenges with ease.',
    icon: <FaRocket size={32} className="text-green-500" />,
  },
  {
    title: 'Scalable Infrastructure',
    desc: 'Grow with our robust and scalable systems.',
    icon: <FaServer size={32} className="text-green-500" />,
  },
  {
    title: '24/7 Support',
    desc: 'Round-the-clock assistance for your needs.',
    icon: <FaHeadset size={32} className="text-green-500" />,
  },
];

function FeaturesSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Our <span className="text-green-500 dark:text-green-400">Key Features</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus-within:ring-2 focus-within:ring-green-500"
              tabIndex={0}
              role="article"
              aria-labelledby={`feature-title-${index}`}
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900 mx-auto mb-4">
                {feature.icon}
              </div>
              <h3
                id={`feature-title-${index}`}
                className="text-xl font-semibold text-gray-900 dark:text-white mb-2 text-center"
              >
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm text-center">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
