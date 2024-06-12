// components/WhyChooseUsSection.tsx
import React from 'react';

const WhyChooseUs: React.FC = () => {
  return (
    <div className="p-4 md:p-8 lg:p-12 bg-white flex justify-center items-start gap-4 flex-wrap">
      <h2 className="text-5xl font-bold text-gray-800 mb-8 md:mb-12  text-center md:text-justify md:border-r-2 md:border-black pr-8 md:h-36">
        Why <br /> Choose Us?
      </h2>
      <hr className='text-3xl ' />
      {/* Vertical line */}
      <div className="hidden md:block h-full border-l-2 border-gray-300"></div>
      <div className="space-y-4 md:space-y-6">
        <div className="p-4 border border-gray-300 rounded-md shadow-md">
          <h3 className="font-semibold text-gray-800 mb-2">Supportive Academic Mentor-</h3>
          <p className="text-gray-600">
            We are dedicated to nurturing your growth and guiding you toward success in your educational endeavors.
          </p>
        </div>
        <div className="p-4 border border-gray-300 rounded-md shadow-md">
          <h3 className="font-semibold text-gray-800 mb-2">Gurugrams Pathway to Excellence-</h3>
          <p className="text-gray-600">
            Step into the thriving educational scene of Gurugram with our exclusive guidance. Your aspirations meet the opportunities of a vibrant academic hub.
          </p>
        </div>
        <div className="p-4 border border-gray-300 rounded-md shadow-md">
          <h3 className="font-semibold text-gray-800 mb-2">Navigating Futures & Creating Legacies-</h3>
          <p className="text-gray-600">
            Navigate your future with a consultant who creates legacies. Our success stories are a testament to our commitment to building impactful educational journeys.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
