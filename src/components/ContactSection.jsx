import React from 'react';

function ContactSection() {
  return (
    <section className="py-16 px-6 bg-gray-800 rounded-lg shadow-lg mb-12">
      <h2 className="text-4xl font-bold text-center text-green-400 mb-10">Contact Us</h2>
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-gray-300 mb-6">Get in touch with us for more information or support.</p>
        <input 
          type="text" 
          placeholder="Your Email" 
          className="w-full p-3 mb-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <textarea 
          placeholder="Your Message" 
          className="w-full p-3 mb-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          rows="4"
        ></textarea>
        <button className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-300">
          Send Message
        </button>
      </div>
    </section>
  );
}

export default ContactSection;