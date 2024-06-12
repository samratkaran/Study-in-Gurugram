// components/TestimonialCarousel.tsx

import React, { useState } from 'react';
import TestimonialCard from '@/components/homepage/TestomonialCard';
import { StaticImageData } from 'next/image';

interface TestimonialCarouselProps {
  testimonials: {
    images: StaticImageData[];
    quote: string;
    author: string;
    designation: string;
  }[];
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleTestimonials = 1;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - visibleTestimonials : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - visibleTestimonials ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full overflow-hidden">
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 bg-gray-200 hover:bg-gray-300 p-2 rounded-full shadow-md focus:outline-none">
        &#10094; {/* Left Arrow */}
      </button>
      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100 / visibleTestimonials}%)` }}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full flex-shrink-0 p-4">
            <TestimonialCard
              images={testimonial.images}
              quote={testimonial.quote}
              author={testimonial.author}
              designation={testimonial.designation}
            />
          </div>
        ))}
      </div>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 bg-gray-200 hover:bg-gray-300 p-2 rounded-full shadow-md focus:outline-none">
        &#10095; {/* Right Arrow */}
      </button>
    </div>
  );
};

export default TestimonialCarousel;
