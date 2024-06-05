import React, { useEffect, useState } from 'react';
import image1 from '@/Assets/image-1.png';
import image2 from '@/assets/image-2.png';
import image3 from '@/assets/image-3.png';
import { AiTwotoneMessage } from "react-icons/ai";

import Image from 'next/image';

const images = [image1, image2, image3];

const CarouselWithForm = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-1000 h-screen"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="flex-shrink-0 w-full h-screen">
            <Image src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex justify-between items-center px-4">
        <div className="w-full sm:w-1/2 text-white p-10">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">Lorem ipsum dolor amet siyt a text</h1>
        </div>
        <div className="w-full sm:w-1/2 h-full flex justify-end items-center p-10">
          <div className={`bg-white p-8 rounded-lg shadow-lg w-full max-w-md ${isFormVisible ? 'block' : 'hidden sm:block'}`}>
            <h2 className="text-2xl font-bold mb-4 text-center">Get in touch</h2>
            <p className="text-gray-600 mb-6 text-center">We love to hear from you. Please fill out this form.</p>
            <form>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input type="text" placeholder="First name" className="p-2 border rounded-md w-full" />
                <input type="text" placeholder="Last name" className="p-2 border rounded-md w-full" />
              </div>
              <input type="text" placeholder="Mobile Number" className="p-2 border rounded-md w-full mb-4" />
              <input type="email" placeholder="you@gmail.com" className="p-2 border rounded-md w-full mb-4" />
              <input type="text" placeholder="XYZ college Gurgaon" className="p-2 border rounded-md w-full mb-4" />
              <input type="text" placeholder="B.Tech CSE" className="p-2 border rounded-md w-full mb-4" />
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input type="text" placeholder="State" className="p-2 border rounded-md w-full" />
                <input type="text" placeholder="City" className="p-2 border rounded-md w-full" />
              </div>
              <button type="submit" className="w-full bg-yellow-500 text-white p-2 rounded-md">Submit</button>
            </form>
          </div>
          <div className="sm:hidden">
            <button onClick={() => setIsFormVisible(!isFormVisible)}>
            <AiTwotoneMessage  />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselWithForm;
