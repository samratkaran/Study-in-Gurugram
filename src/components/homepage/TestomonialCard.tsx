// components/TestimonialCard.tsx

import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface TestimonialCardProps {
  images: StaticImageData[];
  quote: string;
  author: string;
  designation: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ images, quote, author, designation }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-6 p-6 bg-white shadow-lg rounded-md w-full mx-auto h-auto lg:h-[28rem]">
      <div className="flex gap-2 lg:gap-4 w-full lg:w-auto h-full">
        {images.slice(0, 2).map((image, index) => (
          <div key={index} className="w-11/12 h-full relative">
            <Image src={image} alt={`Testimonial ${index + 1}`} layout="fill" objectFit="cover" className="rounded-md" />
          </div>
        ))}
        <div className="flex-1 w-11/12 px-4 lg:px-8 py-4 text-center lg:text-left h-full flex flex-col justify-center">
          <p className="text-gray-700 text-lg italic mb-4">{quote}</p>
          <p className="font-bold text-gray-800">{author}</p>
          <p className="text-gray-500">{designation}</p>
        </div>
        <div className="w-11/12 h-full relative">
          <Image src={images[2]} alt="Testimonial 3" layout="fill" objectFit="cover" className="rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
