'use client';
import React from 'react';
import Image from 'next/image';

const items = [
  { src: 'https://interiorwalaa.smepulse.in/living-room-with-couch-painting-wall%201%20(1).png', title: 'Cozy Living Room' },
  { src: 'https://interiorwalaa.smepulse.in/a506b29235acd804840bf8e65834cdc504afc47f.jpg', title: 'Modern Kitchen' },
  { src: 'https://interiorwalaa.smepulse.in/e853760eeddaf4327b3e5b027b7957b9bf39d601.jpg', title: 'Elegant Bedroom' },
  { src: 'https://interiorwalaa.smepulse.in/e853760eeddaf4327b3e5b027b7957b9bf39d601.jpg', title: 'Charming Balcony' },
];

const HappyHomesSection = () => (
  <div className="relative w-full h-screen">
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory hide-scrollbar">
      {items.map((item, index) => (
        <div
          key={index}
          className="relative w-full h-screen snap-start"
        >
          <Image
            src={item.src}
            alt={item.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute bottom-8 right-4 sm:bottom-12 sm:right-8 md:bottom-16 md:right-10 lg:bottom-20 lg:right-12 z-10 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-md text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-medium font-['WorkSans']">
            {item.title}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default HappyHomesSection;
