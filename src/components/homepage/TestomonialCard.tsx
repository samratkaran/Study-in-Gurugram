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
    <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6 p-6 bg-white shadow-lg rounded-md w-full mx-auto h-auto lg:h-[24rem]">
      <div className="flex w-full h-full gap-4">
        {/* First Two Images in One Div (Visible on lg and above) */}
        <div className="hidden lg:flex flex-col lg:flex-row gap-2 lg:gap-4 w-[35%] h-full">
          {images.slice(0, 2).map((image, index) => (
            <div key={index} className="w-full lg:w-1/2 h-40 lg:h-full relative">
              <Image src={image} alt={`Testimonial ${index + 1}`} layout="fill" objectFit="cover" className="rounded-md" />
            </div>
          ))}
        </div>
        {/* Quote Section (Always Visible) */}
        <div className="flex-1 w-full lg:w-[40%] px-4 lg:px-8 py-4 text-center lg:text-left h-full flex flex-col justify-center">
          <p className="text-gray-700 text-lg italic mb-4">{quote}</p>
          <p className="font-bold text-gray-800">{author}</p>
          <p className="text-gray-500">{designation}</p>
        </div>
        {/* Third Image (Visible on lg and above) */}
        <div className="hidden lg:flex flex-shrink-0 w-[15%] h-40 lg:h-full relative">
          <Image src={images[2]} alt="Testimonial 3" layout="fill" objectFit="cover" className="rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
