'use client'
import Image from 'next/image';
import React from 'react';

const GallerySection = () => {
  // Gallery images data with client cards
  const topRowImages = [
    {
      id: 1,
      src: "https://interiorwalaa.smepulse.in/Frame%201321314801.png",
      alt: "Modern corridor with industrial design elements",
      category: "Commercial",
      clientName: "Tech Startup Hub",
      description: "We've designed and curated pieces that are a cut above your average home goods."
    },
    {
      id: 2,
      src: "https://interiorwalaa.smepulse.in/Frame%201321314801.png",
      alt: "Cozy cafe interior with warm lighting",
      category: "Hospitality",
      clientName: "Urban Coffee Co",
      description: "We've designed and curated pieces that are a cut above your average home goods."
    },
    {
      id: 3,
      src: "https://interiorwalaa.smepulse.in/Frame%201321314801.png",
      alt: "Minimalist dining room with wooden furniture",
      category: "Residential",
      clientName: "The Hendersons",
      description: "We've designed and curated pieces that are a cut above your average home goods."
    },
    {
      id: 4,
      src: "https://interiorwalaa.smepulse.in/Frame%201321314801.png",
      alt: "Bright workspace with modern furniture",
      category: "Office",
      clientName: "Creative Agency",
      description: "We've designed and curated pieces that are a cut above your average home goods."
    },
    {
      id: 5,
      src: "https://interiorwalaa.smepulse.in/Frame%201321314801.png",
      alt: "Elegant living room with red accent wall",
      category: "Residential",
      clientName: "Villa Moderna",
      description: "We've designed and curated pieces that are a cut above your average home goods."
    }
  ];

  const bottomRowImages = [
    {
      id: 6,
      src: "https://interiorwalaa.smepulse.in/Frame%201321314801.png",
      alt: "Industrial style interior with exposed elements",
      category: "Commercial",
      clientName: "Factory Loft",
      description: "We've designed and curated pieces that are a cut above your average home goods."
    },
    {
      id: 7,
      src: "https://interiorwalaa.smepulse.in/Frame%201321314801.png",
      alt: "Contemporary seating area with unique lighting",
      category: "Hospitality",
      clientName: "Boutique Hotel",
      description: "We've designed and curated pieces that are a cut above your average home goods."
    },
    {
      id: 8,
      src: "https://interiorwalaa.smepulse.in/Frame%201321314801.png",
      alt: "Modern dining space with sleek design",
      category: "Residential",
      clientName: "Penthouse Suite",
      description: "We've designed and curated pieces that are a cut above your average home goods."
    },
    {
      id: 9,
      src: "https://interiorwalaa.smepulse.in/Frame%201321314801.png",
      alt: "Creative workspace with natural elements",
      category: "Office",
      clientName: "Design Studio",
      description: "We've designed and curated pieces that are a cut above your average home goods."
    },
    {
      id: 10,
      src: "https://interiorwalaa.smepulse.in/Frame%201321314801.png",
      alt: "Warm restaurant interior with rich colors",
      category: "Hospitality",
      clientName: "Gourmet Bistro",
      description: "We've designed and curated pieces that are a cut above your average home goods."
    }
  ];

  interface ImageProps {
    src: string;
    alt: string;
    category: string;
    clientName: string;
    description: string;
  }

  const ClientCard = ({ image }: { image: ImageProps }) => (
    <div className="flex-shrink-0 w-[450px] ">
      <div className="bg-white overflow-hidden h-72 flex">
        {/* Image Section */}
        <div className="w-60 relative overflow-hidden flex-shrink-0">
          <Image
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover transition-transform duration-500 "
            loading="lazy"
            width={250}
            height={250}
          />
          <div className="absolute top-4 right-4">
            <div className="w-6 h-6 bg-amber-600  flex items-center justify-center">
              <div className="w-3 h-3 bg-white "></div>
            </div>
          </div>
        </div>
        
        {/* Content Section */}
        <div className="flex-1 p-4 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">{image.clientName}</h3>
            <p className="text-gray-600 text-xs leading-relaxed mb-3">
              {image.description}
            </p>
          </div>
          <button className="text-amber-600 font-medium text-xs hover:text-amber-700 transition-colors self-start">
            Take a look →
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-16 px-4 bg-gray-50 overflow-hidden">
      <div className="">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Projects
          </h2>
        </div>

        {/* Top Row - Right to Left Scroll */}
        <div className=" relative">
          <div className="overflow-hidden">
            <div 
              className="flex animate-scroll-rtl hover:animation-paused"
              style={{
                width: 'calc(450px * 10)', // 5 cards * 2 for seamless loop (updated width)
                animation: 'scroll-rtl 30s linear infinite'
              }}
            >
              {/* Duplicate cards for seamless loop */}
              {[...topRowImages, ...topRowImages].map((image) => (
                <ClientCard key={`top-${image.id}`} image={image} />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Row - Left to Right Scroll */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex animate-scroll-ltr hover:animation-paused"
              style={{
                width: 'calc(384px * 10)', // 5 cards * 2 for seamless loop (updated width)
                animation: 'scroll-ltr 30s linear infinite'
              }}
            >
              {/* Duplicate cards for seamless loop */}
              {[...bottomRowImages, ...bottomRowImages].map((image) => (
                <ClientCard key={`bottom-${image.id}`} image={image} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-rtl {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes scroll-ltr {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        
        .animate-scroll-rtl {
          animation: scroll-rtl 30s linear infinite;
        }
        
        .animate-scroll-ltr {
          animation: scroll-ltr 30s linear infinite;
        }
        
        .hover\\:animation-paused:hover {
          animation-play-state: paused;
        }
        
        /* Ensure smooth performance */
        .animate-scroll-rtl,
        .animate-scroll-ltr {
          will-change: transform;
        }
      `}</style>
    </section>
  );
};

export default GallerySection;