'use client'
import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation';
import { projects } from '@/data/projects';

const GallerySection = () => {
  const router = useRouter();

  // Generate image data from projects
  const galleryImages = projects.map((project) => ({
    id: project.id,
    src: project.image,
    alt: project.title,
    category: project.category,
    clientName: project.clientName,
    slug: project.slug,
    description: project.description,
  }));

  // Optionally split for top/bottom rows, or use all for both
  const topRowImages = galleryImages.slice(0, Math.ceil(galleryImages.length / 2));
  const bottomRowImages = galleryImages.slice(Math.ceil(galleryImages.length / 2));

  interface ImageProps {
    src: string;
    alt: string;
    category: string;
    clientName: string;
    slug: string;
    description: string;
  }

  const handleCardClick = (slug: string) => {
    router.push(`/our-projects/${slug}`);
  };

  const handleButtonClick = (e: React.MouseEvent, slug: string) => {
    e.stopPropagation(); // Prevent card click when button is clicked
    router.push(`/our-projects/${slug}`);
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