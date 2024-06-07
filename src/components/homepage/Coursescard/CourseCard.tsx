// components/homepage/Coursescard/CourseCard.tsx

import React from 'react';
import Image from 'next/image';
import demoImage from '@/Assets/courses-example.png';

const CourseCard: React.FC = () => {
  return (
    <div className="border border-slate-400 p-4  shadow-md bg-white">
      <Image src={demoImage} alt="Course" className="w-full h-auto object-cover rounded-md" />
      <p className="text-xl sm:text-2xl font-bold text-center pt-4">  Lorem Course
      </p>
    </div>
  );
};

export default CourseCard;
