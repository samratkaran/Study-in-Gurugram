// components/FeaturesSection.tsx
import React from 'react';
import Image from 'next/image';
import image1 from '@/Assets/homepage_1 (1).png'
import image2 from '@/Assets/homepage_1 (2).png'
import image3 from '@/Assets/homepage_1 (3).png'
import image4 from '@/Assets/homepage_1 (4).png'
import image5 from '@/Assets/homepage_1 (5).png'
import image6 from '@/Assets/homepage_1 (6).png'
// import image from '@/Assets/homepage_1 (1).png'

const features = [
  {
    title: 'Lifestyle & Amenities',
    description:
      'Lorem ipsum dolor sit amet consectetur. Nunc cras non odio vulputate. Suspendisse ut et justo aliquam sit purus ipsum ut. Sit integer aenean justo eget in eu vitae nec.',
    imageUrl: image1,
  },
  {
    title: 'Hostel/Accommodation',
    description:
      'Lorem ipsum dolor sit amet consectetur. Nunc cras non odio vulputate. Suspendisse ut et justo aliquam sit purus ipsum ut. Sit integer aenean justo eget in eu vitae nec. Consectetur urna magn.',
    imageUrl: image2,
  },
  {
    title: 'Scope of Tourism',
    description:
      'Lorem ipsum dolor sit amet consectetur. Nunc cras non odio vulputate. Suspendisse ut et justo aliquam sit purus ipsum ut. Sit integer aenean justo eget in eu vitae nec. Consectetur.',
    imageUrl: image3,
  },
  {
    title: 'Transport Service',
    description:
      'Lorem ipsum dolor sit amet consectetur. Nunc cras non odio vulputate. Suspendisse ut et justo aliquam sit purus ipsum ut. Sit integer aenean justo eget in eu vitae nec. Consectetur urna magn.',
    imageUrl: image4,
  },
  {
    title: 'Entertainment Spots',
    description:
      'Lorem ipsum dolor sit amet consectetur. Nunc cras non odio vulputate. Suspendisse ut et justo aliquam sit purus ipsum ut. Sit integer aenean justo eget in eu vitae nec. Consectetur ipsum ut.',
    imageUrl: image5,
  },
  {
    title: 'Festivities and Corporate Events',
    description:
      'Lorem ipsum dolor sit amet consectetur. Nunc cras non odio vulputate. Suspendisse ut et justo aliquam sit purus ipsum ut. Sit integer aenean justo eget in eu vitae nec. Consectetur.',
    imageUrl: image6,
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col bg-white rounded-lg shadow-md overflow-hidden ${
              index % 3 === 0 ? 'md:col-span-2' : ''
            }`}
          >
            <Image
              src={feature.imageUrl}
              alt={feature.title}
              width={1000}
              height={100}
              className=" h-64 "
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
