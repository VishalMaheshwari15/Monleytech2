
import React from 'react';

function HeroSection() {
  return (
    <section
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 dark:from-green-800 to-blue-700 dark:to-blue-900 text-white overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <img
          src="/src/images/logo.png"
          alt="MonkeyTech Logo"
          className="mx-auto h-32 mb-8 animate-bounce-slow"
          onError={(e) => (e.target.src = 'https://via.placeholder.com/128')} // Fallback image
        />
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white dark:text-gray-100 mb-6 drop-shadow-xl animate-fade-in">
          Welcome to <span className="text-green-400">MonkeyTech</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-100 dark:text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8 animate-slide-up">
          Revolutionizing digital solutions with cutting-edge technology and innovative approaches.
        </p>
        <button
          className="px-8 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-lg hover:bg-green-600 dark:hover:bg-green-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400"
          aria-label="Explore MonkeyTech services"
        >
          Explore Now
        </button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-black dark:from-gray-950 to-transparent"></div>
    </section>
  );
}

export default HeroSection;























