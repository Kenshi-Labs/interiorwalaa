'use client'
import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation';

const GallerySection = () => {
  const router = useRouter();

  // Gallery images data with client cards
  const topRowImages = [
    {
      id: 1,
      src: "https://interiorwalaa.smepulse.in/643d0a12c41f409f8b9ad632431f1f7e02deeb6f.jpg",
      alt: "Modern corridor with industrial design elements",
      category: "Commercial",
      clientName: "Tech Startup Hub",
      slug: "tech-startup-hub",
      description: "We've designed and curated pieces that are a cut above your average home goods."
    },
    {
      id: 2,
      src: "https://interiorwalaa.smepulse.in/21aac1dbc99e33d922b13dc7d7677367fa7d906d.jpg",
      alt: "Cozy cafe interior with warm lighting",
      category: "Hospitality",
      clientName: "Urban Coffee Co",
      slug: "urban-coffee-co",
      description: "We've designed and curated pieces that are a cut above your average home goods."
    },
    {
      id: 3,
      src: "https://interiorwalaa.smepulse.in/a506b29235acd804840bf8e65834cdc504afc47f.jpg",
      alt: "Minimalist dining room with wooden furniture",
      category: "Residential",
      clientName: "The Hendersons",
      slug: "the-hendersons",
      description: "We've designed and curated pieces that are a cut above your average home goods."
    },
    {
      id: 4,
      src: "https://interiorwalaa.smepulse.in/bfac9f222d64991bc5cea91fdacd015c3717b851.jpg",
      alt: "Bright workspace with modern furniture",
      category: "Office",
      clientName: "Creative Agency",
      slug: "creative-agency",
      description: "We've designed and curated pieces that are a cut above your average home goods."
    },
    {
      id: 5,
      src: "https://interiorwalaa.smepulse.in/e853760eeddaf4327b3e5b027b7957b9bf39d601.jpg",
      alt: "Elegant living room with red accent wall",
      category: "Residential",
      clientName: "Villa Moderna",
      slug: "villa-moderna",
      description: "We've designed and curated pieces that are a cut above your average home goods."
    }
  ];

  const bottomRowImages = [
    {
      id: 6,
      src: "https://interiorwalaa.smepulse.in/643d0a12c41f409f8b9ad632431f1f7e02deeb6f.jpg",
      alt: "Industrial style interior with exposed elements",
      category: "Commercial",
      clientName: "Factory Loft",
      slug: "factory-loft",
      description: "We've designed and curated pieces that are a cut above your average home goods."
    },
    {
      id: 7,
      src: "https://interiorwalaa.smepulse.in/21aac1dbc99e33d922b13dc7d7677367fa7d906d.jpg",
      alt: "Contemporary seating area with unique lighting",
      category: "Hospitality",
      clientName: "Boutique Hotel",
      slug: "boutique-hotel",
      description: "We've designed and curated pieces that are a cut above your average home goods."
    },
    {
      id: 8,
      src: "https://interiorwalaa.smepulse.in/a506b29235acd804840bf8e65834cdc504afc47f.jpg",
      alt: "Modern dining space with sleek design",
      category: "Residential",
      clientName: "Penthouse Suite",
      slug: "penthouse-suite",
      description: "We've designed and curated pieces that are a cut above your average home goods."
    },
    {
      id: 9,
      src: "https://interiorwalaa.smepulse.in/bfac9f222d64991bc5cea91fdacd015c3717b851.jpg",
      alt: "Creative workspace with natural elements",
      category: "Office",
      clientName: "Design Studio",
      slug: "design-studio",
      description: "We've designed and curated pieces that are a cut above your average home goods."
    },
    {
      id: 10,
      src: "https://interiorwalaa.smepulse.in/e853760eeddaf4327b3e5b027b7957b9bf39d601.jpg",
      alt: "Warm restaurant interior with rich colors",
      category: "Hospitality",
      clientName: "Gourmet Bistro",
      slug: "gourmet-bistro",
      description: "We've designed and curated pieces that are a cut above your average home goods."
    }
  ];

  interface ImageProps {
    src: string;
    alt: string;
    category: string;
    clientName: string;
    slug: string;
    description: string;
  }

  const handleCardClick = (slug: string) => {
    router.push(`/projects/${slug}`);
  };

  const handleButtonClick = (e: React.MouseEvent, slug: string) => {
    e.stopPropagation(); // Prevent card click when button is clicked
    router.push(`/projects/${slug}`);
  };

  const ClientCard = ({ image }: { image: ImageProps }) => (
    <div className="flex-shrink-0 w-[450px] group">
      <div 
        className="bg-white overflow-hidden h-72 flex shadow-sm cursor-pointer transform transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
        onClick={() => handleCardClick(image.slug)}
      >
        {/* Image Section */}
        <div className="w-60 relative overflow-hidden flex-shrink-0">
          <Image
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
            width={250}
            height={250}
          />
      
        </div>
        
        {/* Content Section */}
        <div className="p-4 w-60 flex flex-col justify-center items-center text-center">           
          <div className='flex flex-col items-center justify-center text-center'>             
            <Image src="https://interiorwalaa.smepulse.in/Vector.png" alt={image.alt} width={28} height={26} priority/>             
            <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">{image.clientName}</h3>             
            <p className="text-gray-600 text-xs leading-relaxed mb-3">               
              {image.description}             
            </p>             
            <button 
              onClick={(e) => handleButtonClick(e, image.slug)}
              className="flex items-center justify-center text-amber-600 font-medium text-xs border border-amber-600 p-2 rounded-full hover:bg-amber-600 hover:text-white transition-all duration-300"
            >             
              Take a look            
            </button>           
          </div>                  
        </div>
      </div>
    </div>
  );

  return (
    <section className="  bg-gray-50 overflow-hidden">
      <div className="">
        {/* Section Header */}
        <div className="text-center py-16 bg-[#9B7961]">
          <h2 className="text-4xl md:text-5xl font-work-sans font-semibold text-[#FFFFFF] mb-4">
            Our Projects
          </h2>
        </div>

        {/* Top Row - Right to Left Scroll */}
        <div className="relative ">
          <div className="overflow-hidden">
            <div className="flex animate-scroll-rtl gap-0" id="top-scroll">
              {/* Triple the cards for ultra-smooth seamless loop */}
              {[...topRowImages, ...topRowImages, ...topRowImages].map((image, index) => (
                <ClientCard key={`top-${image.id}-${index}`} image={image} />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Row - Left to Right Scroll */}
        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex animate-scroll-ltr gap-0" id="bottom-scroll">
              {/* Triple the cards for ultra-smooth seamless loop */}
              {[...bottomRowImages, ...bottomRowImages, ...bottomRowImages].map((image, index) => (
                <ClientCard key={`bottom-${image.id}-${index}`} image={image} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-rtl {
          0% { 
            transform: translateX(0); 
          }
          100% { 
            transform: translateX(calc(-450px * 5)); 
          }
        }
        
        @keyframes scroll-ltr {
          0% { 
            transform: translateX(calc(-450px * 5)); 
          }
          100% { 
            transform: translateX(0); 
          }
        }
        
        .animate-scroll-rtl {
          animation: scroll-rtl 45s linear infinite;
          will-change: transform;
          backface-visibility: hidden;
          perspective: 1000px;
        }
        
        .animate-scroll-ltr {
          animation: scroll-ltr 45s linear infinite;
          will-change: transform;
          backface-visibility: hidden;
          perspective: 1000px;
        }
        
        /* Pause animation only when hovering over individual cards */
        .group:hover ~ .group,
        .group:hover {
          animation-play-state: running;
        }
        
        .animate-scroll-rtl .group:hover {
          animation-play-state: paused;
        }
        
        .animate-scroll-ltr .group:hover {
          animation-play-state: paused;
        }
        
        /* Pause parent animation when any card is hovered */
        .animate-scroll-rtl:has(.group:hover) {
          animation-play-state: paused;
        }
        
        .animate-scroll-ltr:has(.group:hover) {
          animation-play-state: paused;
        }
        
        /* Hardware acceleration for smoother performance */
        .animate-scroll-rtl,
        .animate-scroll-ltr {
          transform: translateZ(0);
          -webkit-transform: translateZ(0);
        }
        
        /* Smooth transitions */
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
    </section>
  );
};

export default GallerySection;