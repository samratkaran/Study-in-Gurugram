import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { StaticImageData } from 'next/image';

interface CardProps {
  imageSrc: StaticImageData;
  text: string;
  link: string;
}

const NewsHome: React.FC<CardProps> = ({ imageSrc, text, link }) => {
  return (
    <div className="border border-gray-200 rounded-md p-4 shadow-md flex flex-col md:flex-row items-start w-full md:w-5/12 space-y-4 md:space-y-0 md:space-x-4">
      <div className="w-full md:w-1/3 h-48 relative">
        <Image src={imageSrc} alt="Card Image" layout="fill" objectFit="cover" className="rounded-md" />
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <p className="text-gray-700 text-base md:text-lg mb-2">{text}</p>
        <div className="text-right">
          <Link href={link}>
            <span className="text-blue-500 hover:text-blue-700 text-sm font-medium flex items-center justify-end cursor-pointer">
              View more
              <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.293 9H3a1 1 0 010-2h9.293L8.646 4.354a.5.5 0 11.708-.708l5 5a.5.5 0 010 .708l-5 5a.5.5 0 11-.708-.708L12.293 9z" clipRule="evenodd" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsHome;
