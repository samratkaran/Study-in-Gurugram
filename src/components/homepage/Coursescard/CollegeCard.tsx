import React from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import CollegeImage from "@/Assets/collegeImage.png"

interface InstituteCardProps {
  imageSrc: StaticImageData;
  name: string;
  location: string;
  courses: string;
  examsAccepted: string;
  avgPackage: string;
}

const CollegeCard: React.FC<InstituteCardProps> = ({ 
  imageSrc, 
  name, 
  location, 
  courses, 
  examsAccepted, 
  avgPackage 
}) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 shadow-md flex flex-col items-center space-y-4 md:w-11/12 w-full">
      <div className="w-full h-48 relative">
        <Image src={imageSrc} alt={name} layout="fill" objectFit="cover" className="rounded-md" />
      </div>
      <h2 className="text-xl font-semibold text-center font-bold">{name}</h2>
      <div className="w-full flex flex-col space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="font-medium">Location</span>
          <span className="text-gray-500">{location}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Courses</span>
          <span className="text-gray-500">{courses}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Exam Accepted</span>
          <span className="text-gray-500">{examsAccepted}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Average Package</span>
          <span className="text-gray-500">{avgPackage}</span>
        </div>
      </div>
      <div className="w-full flex space-x-2">
        <button className="flex-1 bg-yellow-500 text-white text-sm py-2 rounded-md hover:bg-orange-600">Apply Now</button>
        <button className="flex-1 bg-gray-100 text-blue-500 text-sm py-2 rounded-md hover:bg-gray-200">Compare +</button>
      </div>
    </div>
  );
};

export default CollegeCard;
