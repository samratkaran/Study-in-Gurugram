// components/Carousel.tsx

import React, { useState, useEffect } from 'react';
import { StaticImageData } from 'next/image';
import CollegeCard from '@/components/homepage/Coursescard/CollegeCard';

interface CarouselProps {
  items: {
    imageSrc: StaticImageData;
    name: string;
    location: string;
    courses: string;
    examsAccepted: string;
    avgPackage: string;
  }[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  // Update visibleCards based on window size
  useEffect(() => {
    const updateVisibleCards = () => {
      setVisibleCards(window.innerWidth < 768 ? 1 : 3); // 1 card for mobile (<768px), 3 for desktop (>=768px)
    };

    // Set initial value
    updateVisibleCards();

    // Update on resize
    window.addEventListener('resize', updateVisibleCards);

    // Cleanup on unmount
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - visibleCards : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= items.length - visibleCards ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full overflow-hidden">
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 bg-gray-200 hover:bg-gray-300 p-2 rounded-full shadow-md focus:outline-none"
      >
        &#10094; {/* Left Arrow */}
      </button>
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
      >
        {items.map((item, index) => (
          <div key={index} className={`w-full ${visibleCards === 3 ? 'md:w-1/3' : 'w-full'} p-4 flex-shrink-0`}>
            <CollegeCard
              imageSrc={item.imageSrc}
              name={item.name}
              location={item.location}
              courses={item.courses}
              examsAccepted={item.examsAccepted}
              avgPackage={item.avgPackage}
            />
          </div>
        ))}
      </div>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 bg-gray-200 hover:bg-gray-300 p-2 rounded-full shadow-md focus:outline-none"
      >
        &#10095; {/* Right Arrow */}
      </button>
    </div>
  );
};

export default Carousel;
