import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FaStar } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  {
    quote: 'MonkeyTech transformed our business with their innovative solutions!',
    author: 'Sarah K., CEO',
    rating: 5,
  },
  {
    quote: 'Their AI-driven platform boosted our efficiency by 40%.',
    author: 'Mike L., CTO',
    rating: 4,
  },
  {
    quote: 'Exceptional support and cutting-edge technology!',
    author: 'Emma R., Founder',
    rating: 5,
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const slideVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, delay: i * 0.2, ease: 'easeOut' },
  }),
};

function TestimonialsSection() {
  return (
    <section
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 via-secondary to-gray-900 text-white font-inter relative overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      <div className="absolute inset-0 particle-bg opacity-10" />
      <motion.div
        className="text-center mb-12 relative z-10"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2
          id="testimonials-heading"
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight text-primary drop-shadow-xl animate-glow"
        >
          What Our Clients Say
        </h2>
        <motion.p
          className="mt-4 text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed text-gray-200"
          variants={sectionVariants}
          transition={{ delay: 0.2 }}
        >
          Hear from those who’ve experienced MonkeyTech’s innovation firsthand.
        </motion.p>
      </motion.div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        className="max-w-7xl mx-auto relative z-10"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className="bg-gray-800/30 backdrop-blur-lg rounded-lg p-6 border border-primary/20 hover:border-primary/50 transition-all duration-300 text-center dark:bg-gray-900/30 animate-glow"
              variants={slideVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              role="article"
              aria-labelledby={`testimonial-title-${index}`}
              tabIndex={0}
            >
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-primary" size={20} />
                ))}
              </div>
              <p id={`testimonial-title-${index}`} className="text-sm text-gray-200 mb-4 leading-relaxed">
                {testimonial.quote}
              </p>
              <h3 className="text-lg font-semibold text-white">{testimonial.author}</h3>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
      <style jsx>{`
        .particle-bg {
          background: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"%3E%3Cpath fill="%2300FF9C" fill-opacity="0.1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,133.3C960,139,1056,213,1152,229.3C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,0,320Z"%3E%3C/path%3E%3C/svg%3E')
            center/cover;
          animation: waveFlow 20s linear infinite;
        }
        @keyframes waveFlow {
          0% { background-position: 0 0; }
          100% { background-position: 1440px 0; }
        }
        .swiper-button-next,
        .swiper-button-prev {
          color: #00FF9C;
        }
        .swiper-pagination-bullet-active {
          background: #00FF9C;
        }
      `}</style>
    </section>
  );
}

export default TestimonialsSection;