
import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

function RatingCard({ name, rating, review }) {
  // Generate star icons based on rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<FaStar key={i} className="text-yellow-400" aria-hidden="true" />);
      } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" aria-hidden="true" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400" aria-hidden="true" />);
      }
    }
    return stars;
  };

  return (
    <div
      className="bg-gray-800 dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
      role="article"
      aria-labelledby={`rating-title-${name}`}
    >
      <h3 id={`rating-title-${name}`} className="text-lg font-semibold text-green-500 dark:text-green-400 mb-2">
        {name}
      </h3>
      <div className="flex mb-3" aria-label={`Rating: ${rating} out of 5 stars`}>
        {renderStars(rating)}
      </div>
      <p className="text-gray-300 dark:text-gray-400 text-sm leading-relaxed">{review}</p>
    </div>
  );
}

export default RatingCard;
