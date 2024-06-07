import React from 'react';

interface HeadTextProps {
  textvalue: string;
}

const HeadText: React.FC<HeadTextProps> = ({ textvalue }) => {
  return (
    <h1 className='text-center mt-12 mb-12 text-6xl font-black' style={{color:"#183041"}}>
      {textvalue}
    </h1>
  );
};

export default HeadText;

