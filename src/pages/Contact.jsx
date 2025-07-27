import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useDragControls } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMap, FaStreetView, FaSatellite } from 'react-icons/fa';

// Contact Info Subcomponent
const ContactInfo = ({ isMobile }) => {
  const controls = useDragControls();
  const constraintsRef = useRef(null);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5, ease: 'easeOut' },
    }),
  };

  return (
    <div className="relative" ref={constraintsRef}>
      <motion.div
        drag={!isMobile}
        dragControls={controls}
        dragConstraints={constraintsRef}
        dragElastic={0.2}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`bg-white/80 dark:bg-gray-900/20 backdrop-blur-xl rounded-2xl p-6 lg:p-8 border border-gray-200 dark:border-gray-600/10 hover:border-green-500/40 transition-all duration-300 shadow-2xl ${isMobile ? 'sticky top-16' : ''}`}
        style={{ '--glow-color': 'rgba(52, 211, 153, 0.3)' }}
      >
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-50 mb-6">Contact Information</h2>
        <div className="space-y-4">
          {[
            { icon: FaEnvelope, text: 'monkeyytech05@gmail.com', href: 'mailto:monkeyytech05@gmail.com' },
            { icon: FaPhone, text: '+91 93160 36603', href: 'https://wa.me/919316036603' },
            { icon: FaMapMarkerAlt, text: 'Surat, India' },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.href || '#'}
              custom={index}
              variants={variants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05, x: 5, '--glow-intensity': '0.5' }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center text-gray-800 dark:text-gray-100 hover:text-green-600 dark:hover:text-green-300 transition-colors duration-200 relative overflow-hidden"
              style={{ '--glow-intensity': '0' }}
            >
              <item.icon className="mr-3 text-xl" />
              <span>{item.text}</span>
              <motion.span
                className="absolute inset-0 bg-green-500/20"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 2, opacity: 0.3 }}
                transition={{ duration: 0.4 }}
                style={{ borderRadius: '50%', transformOrigin: 'center' }}
              />
            </motion.a>
          ))}
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-medium text-gray-900 dark:text-gray-50 mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            {[
              { icon: FaFacebook, href: 'https://facebook.com', color: '#3B5998' },
              { icon: FaTwitter, href: 'https://x.com/MonkeyyTech/', color: '#1DA1F2' },
              { icon: FaInstagram, href: 'https://instagram.com', color: '#E1306C' },
              { icon: FaLinkedin, href: 'https://www.linkedin.com/in/monkeyy-tech-a83b2a368/', color: '#0077B5' },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                custom={index}
                variants={variants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.3, rotate: 5, '--glow-intensity': '0.5' }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-800 dark:text-gray-100 hover:text-[var(--social-color)] transition-colors duration-200 relative"
                style={{ '--social-color': social.color, '--glow-intensity': '0' }}
              >
                <social.icon size={24} />
                <motion.span
                  className="absolute inset-0 bg-[var(--social-color)]/20"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 2, opacity: 0.3 }}
                  transition={{ duration: 0.4 }}
                  style={{ borderRadius: '50%', transformOrigin: 'center' }}
                />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Contact Form Subcomponent
const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', mobile: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: '' });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.mobile.trim() || !/^\d{10}$/.test(formData.mobile)) newErrors.mobile = 'Valid 10-digit mobile number is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      const message = `Name: ${formData.name}\nMobile: ${formData.mobile}\nMessage: ${formData.message}\nCheck us out on Instagram: https://www.instagram.com/monkeyy.tech/`;
      const whatsappNumber = '919316036603';
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      setFormData({ name: '', mobile: '', message: '' });
      setStatus('success');
      setTimeout(() => setStatus(null), 3000);
    } else {
      setErrors(validationErrors);
    }
  };

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5, ease: 'easeOut' },
    }),
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="bg-white/80 dark:bg-gray-900/20 backdrop-blur-xl rounded-2xl p-6 lg:p-8 border border-gray-200 dark:border-gray-600/10 hover:border-green-500/40 transition-all duration-300 shadow-2xl"
      style={{ '--glow-color': 'rgba(52, 211, 153, 0.3)' }}
    >
      <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-50 mb-6">Send Us a Message</h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        {[
          { id: 'name', type: 'text', label: 'Name', placeholder: 'Your Name' },
          { id: 'mobile', type: 'tel', label: 'Mobile Number', placeholder: 'Your 10-digit Mobile Number' },
          { id: 'message', type: 'textarea', label: 'Message', placeholder: 'Your Message', rows: 4 },
        ].map((field, index) => (
          <motion.div
            key={field.id}
            custom={index}
            variants={variants}
            initial="hidden"
            animate="visible"
          >
            <label htmlFor={field.id} className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-1">
              {field.label}
            </label>
            {field.type === 'textarea' ? (
              <textarea
                id={field.id}
                name={field.id}
                rows={field.rows}
                value={formData[field.id]}
                onChange={handleChange}
                className={`w-full px-4 py-2 bg-gray-100 dark:bg-gray-800/20 border border-gray-300 dark:border-gray-600/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900 dark:text-gray-100 placeholder-gray-400/70 transition-all duration-200 ${errors[field.id] ? 'border-red-500' : ''}`}
                placeholder={field.placeholder}
                required
                aria-describedby={errors[field.id] ? `${field.id}-error` : undefined}
              />
            ) : (
              <input
                type={field.type}
                id={field.id}
                name={field.id}
                value={formData[field.id]}
                onChange={handleChange}
                className={`w-full px-4 py-2 bg-gray-100 dark:bg-gray-800/20 border border-gray-300 dark:border-gray-600/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900 dark:text-gray-100 placeholder-gray-400/70 transition-all duration-200 ${errors[field.id] ? 'border-red-500' : ''}`}
                placeholder={field.placeholder}
                required
                aria-describedby={errors[field.id] ? `${field.id}-error` : undefined}
              />
            )}
            {errors[field.id] && (
              <p id={`${field.id}-error`} className="text-red-500 text-sm mt-1">
                {errors[field.id]}
              </p>
            )}
          </motion.div>
        ))}
        <motion.button
          type="submit"
          disabled={status === 'loading'}
          whileHover={{ scale: 1.05, boxShadow: '0 0 15px var(--glow-color)' }}
          whileTap={{ scale: 0.95 }}
          className={`w-full bg-green-500 dark:bg-green-600 text-white py-3 rounded-lg font-medium transition-colors duration-200 relative overflow-hidden ${status === 'loading' ? 'opacity-70 cursor-not-allowed' : ''}`}
        >
          <span className="relative z-10">
            {status === 'loading' ? 'Sending...' : status === 'success' ? 'Sent!' : status === 'error' ? 'Error!' : 'Send Message'}
          </span>
          <motion.span
            className="absolute inset-0 bg-green-400/50"
            initial={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 2, opacity: 0.3 }}
            transition={{ duration: 0.4 }}
            style={{ borderRadius: '50%', transformOrigin: 'center' }}
          />
        </motion.button>
        <AnimatePresence>
          {status === 'success' && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="text-green-500 text-sm text-center"
            >
              Message sent via WhatsApp! Thank you for reaching out.
            </motion.p>
          )}
          {status === 'error' && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="text-red-500 text-sm text-center"
            >
              Failed to open WhatsApp. Please try again or contact us directly.
            </motion.p>
          )}
        </AnimatePresence>
      </form>
    </motion.div>
  );
};

// Map Section Subcomponent
const MapSection = ({ isMobile }) => {
  const [view, setView] = useState('map');
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  const mapUrls = {
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.976792770693!2d72.79769187544048!3d21.17024088068817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e5940973e5b%3A0x8b6c6f3c7a8f4e7e!2sSurat%2C%20Gujarat%2C%20India!5e0!3m2!1sen!2sus!4v1627500000000!5m2!1sen!2sus',
    street: 'https://www.google.com/maps/embed?pb=!1m0!3m2!1sen!2sus!4v1627500000000!5m2!1sen!2sus',
    satellite: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.976792770693!2d72.79769187544048!3d21.17024088068817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e5940973e5b%3A0x8b6c6f3c7a8f4e7e!2sSurat%2C%20Gujarat%2C%20India!5e1!3m2!1sen!2sus!4v1627500000000!5m2!1sen!2sus',
  };

  useEffect(() => {
    if (isMapLoaded) return;
    const timer = setTimeout(() => setIsMapLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, [isMapLoaded]);

  const handleSwipe = (direction) => {
    const views = ['map', 'street', 'satellite'];
    const currentIndex = views.indexOf(view);
    if (direction === 'left' && currentIndex < views.length - 1) {
      setView(views[currentIndex + 1]);
    } else if (direction === 'right' && currentIndex > 0) {
      setView(views[currentIndex - 1]);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 relative z-10"
      onTouchStart={(e) => {
        if (!isMobile) return;
        const touchStartX = e.touches[0].clientX;
        e.currentTarget.ontouchend = (e2) => {
          const touchEndX = e2.changedTouches[0].clientX;
          if (touchStartX - touchEndX > 50) handleSwipe('left');
          if (touchEndX - touchStartX > 50) handleSwipe('right');
        };
      }}
    >
      <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-50 mb-6 text-center">Our Location</h2>
      <div className="bg-white/80 dark:bg-gray-900/20 backdrop-blur-xl rounded-2xl p-6 border border-gray-200 dark:border-gray-600/10 overflow-hidden shadow-2xl">
        <div className="flex space-x-2 mb-4">
          {[
            { key: 'map', label: 'Map View', icon: FaMap },
            { key: 'street', label: 'Street View', icon: FaStreetView },
            { key: 'satellite', label: 'Satellite', icon: FaSatellite },
          ].map((tab) => (
            <motion.button
              key={tab.key}
              onClick={() => setView(tab.key)}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                view === tab.key
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-800/30 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700/50'
              }`}
              aria-pressed={view === tab.key}
            >
              <tab.icon className="mr-2" size={18} />
              {tab.label}
            </motion.button>
          ))}
        </div>
        <motion.div
          key={view}
          initial={{ opacity: 0, rotateY: 90 }}
          animate={{ opacity: 1, rotateY: 0 }}
          exit={{ opacity: 0, rotateY: -90 }}
          transition={{ duration: 0.4 }}
          className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden"
        >
          {isMapLoaded ? (
            <iframe
              title={`MonkeyTech Location - ${view}`}
              src={mapUrls[view]}
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              className="transition-opacity duration-300"
            />
          ) : (
            <div className="w-full h-full bg-gray-200/50 dark:bg-gray-700/50 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                className="w-8 h-8 border-2 border-green-500 border-t-transparent rounded-full"
              />
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

// Floating Orb Component
const FloatingOrb = () => (
  <motion.div
    className="absolute w-16 h-16 bg-gradient-to-br from-green-400 to-cyan-400 rounded-full opacity-20 blur-xl"
    animate={{
      x: [0, 100, -100, 0],
      y: [0, -50, 50, 0],
      scale: [1, 1.2, 0.8, 1],
    }}
    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
    style={{ top: '20%', left: '10%' }}
  />
);

// Main Contact Component
function Contact() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100/50 dark:from-gray-900/50 via-white/50 dark:via-gray-800/50 to-gray-200/50 dark:to-gray-950/50 text-gray-900 dark:text-white font-inter relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('https://via.placeholder.com/1920x1080?text=Contact+Wave')] bg-cover bg-center opacity-5 dark:opacity-10 animate-pulse-slow pointer-events-none" />
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-cyan-500/10 dark:from-green-500/20 dark:to-cyan-500/20"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />
      {Array.from({ length: 3 }).map((_, i) => (
        <FloatingOrb key={i} />
      ))}

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-center py-16 relative z-10"
        style={{ transform: isMobile ? '' : 'translateY(calc(var(--scroll-y) * -0.2))' }}
      >
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-gray-50 tracking-wide drop-shadow-2xl">
          Get in{' '}
          <span className="bg-gradient-to-r from-green-400 to-cyan-400 text-transparent bg-clip-text">Touch</span>
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-4 text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto text-gray-700 dark:text-gray-200 leading-relaxed"
        >
          We’d love to hear from you! Reach out for collaboration or support.
        </motion.p>
      </motion.header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="lg:grid lg:grid-cols-2 lg:gap-12 space-y-12 lg:space-y-0"
          layout
          transition={{ layout: { duration: 0.5, ease: 'easeOut' } }}
        >
          <ContactInfo isMobile={isMobile} />
          <ContactForm />
        </motion.div>
        <MapSection isMobile={isMobile} />
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.05; }
          50% { opacity: 0.1; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s infinite;
        }
        .font-inter {
          font-family: 'Inter', sans-serif;
        }
        :root {
          --glow-color: rgba(52, 211, 153, 0.3);
          --glow-intensity: 0;
        }
        .shadow-2xl {
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 0 10px var(--glow-color);
        }
        .shadow-2xl:hover {
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 0 20px calc(var(--glow-intensity) * var(--glow-color));
        }
      `}</style>
    </div>
  );
}

export default Contact;