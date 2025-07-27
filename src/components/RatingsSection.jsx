import React from 'react';
import RatingCard from './RatingCard.jsx';

function RatingsSection() {
  const ratings = [
    { name: 'Amit Sharma', rating: 5, review: 'Excellent service and innovative solutions!' },
    { name: 'Priya Singh', rating: 4, review: 'Great team, highly recommended for startups.' },
    { name: 'Rahul Verma', rating: 5, review: 'Top-notch tech support and delivery.' },
  ];

  return (
    <section className="p-6 bg-gray-700 rounded-lg mt-6">
      <h2 className="text-3xl font-semibold text-center text-green-500 mb-6">Client Ratings</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ratings.map((rating, index) => (
          <RatingCard key={index} name={rating.name} rating={rating.rating} review={rating.review} />
        ))}
      </div>
    </section>
  );
}

export default RatingsSection;