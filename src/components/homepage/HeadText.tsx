// src/components/HeadText.tsx

import React from 'react';
import clsx from 'clsx'; // Optional: For better class merging

interface HeadTextProps {
  textvalue: string;
  className?: any; // Optional className prop
}

const HeadText: React.FC<HeadTextProps> = ({ textvalue, className }) => {
  return (
    <h1 className={clsx('text-center mt-12 mb-12 md:text-6xl text-4xl font-black', className)} style={{ color: "#183041" }}>
      {textvalue}
    </h1>
  );
};

export default HeadText;
