// components/ImageSlider.tsx

import React from 'react';
import Image from 'next/image';

// Replace these with your local images or image URLs
import image1 from '@/Assets/Tata_Consultancy_Services_Logo 1.png';
import image2 from '@/Assets/Tata_Consultancy_Services_Logo 1.png';
import image3 from '@/Assets/Tata_Consultancy_Services_Logo 1.png';
import image4 from '@/Assets/Tata_Consultancy_Services_Logo 1.png';
import image5 from '@/Assets/Tata_Consultancy_Services_Logo 1.png';
import image6 from '@/Assets/Tata_Consultancy_Services_Logo 1.png';
import image7 from '@/Assets/Tata_Consultancy_Services_Logo 1.png';
import image8 from '@/Assets/Tata_Consultancy_Services_Logo 1.png';
import image9 from '@/Assets/Tata_Consultancy_Services_Logo 1.png';

const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9];

const ImageSlider: React.FC = () => {
  return (
    <div className="overflow-hidden relative w-full mb-12">
      <div className="flex w-max animate-slide">
        {images.map((image, index) => (
          <div key={index} className="flex-shrink-0 mx-2 sm:mx-3 md:mx-4 lg:mx-6 w-48 md:w-64 lg:w-80 h-8 md:h-64 lg:h-40 relative">
            <Image src={image} alt={`Slide ${index + 1}`} layout="fill" objectFit="contain" className="rounded-md" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
