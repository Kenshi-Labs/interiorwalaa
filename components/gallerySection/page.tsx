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

  // Use all 7 projects for continuous scroll
  const displayProjects = galleryImages.slice(0, 7);

  interface ImageProps {
    src: string;
    alt: string;
    category: string;
    clientName: string;
    slug: string;
    description: string;
  }

  const handleButtonClick = (e: React.MouseEvent, slug: string) => {
    e.stopPropagation(); // Prevent card click when button is clicked
    router.push(`/our-projects/${slug}`);
  };

  const ProjectCard = ({ image }: { image: ImageProps }) => (
    <div className="flex w-[500px] h-[250px] flex-shrink-0 group">
      {/* Image Section */}
      <div className="w-[250px] h-[250px] flex-shrink-0">
        <Image
          src={image.src}
          alt={image.alt}
          className="w-full h-full object-cover"
          loading="lazy"
          width={250}
          height={250}
        />
      </div>

      {/* Content Section */}
      <div className="w-[250px] h-[250px] bg-white flex flex-col justify-center items-center text-center p-4">
        <div className='flex flex-col items-center justify-center text-center'>
          <Image
            src="https://interiorwalaa.smepulse.in/Vector.png"
            alt="door icon"
            width={32}
            height={32}
            priority
            className="mb-2"
          />
          <h3 className="text-[20px] font-medium text-[#414141] mb-2 font-['WorkSans']">{image.clientName}</h3>
          <p className="text-[12px] text-[rgba(0,0,0,0.54)] leading-relaxed mb-3 w-[174px] font-['Manrope']">
            {image.description}
          </p>
          <button
            onClick={(e) => handleButtonClick(e, image.slug)}
            className="w-[88px] h-[30px] border border-[#949494] rounded-[10px] bg-white text-[var(--primary-brown)] text-[12px] font-medium hover:bg-[var(--primary-brown)] hover:text-white transition-all duration-300 flex items-center justify-center hover:cursor-pointer"
          >
            Take a look
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <section className="w-full relative bg-[var(--secondary-brown)] h-[680px] overflow-hidden text-left text-[12px]">
      {/* Section Header */}
      <div className="absolute top-[61px] left-1/2 transform -translate-x-1/2 text-[48px] md:text-[48px] font-semibold font-['WorkSans'] text-white text-center w-full px-4">
        Our Projects
      </div>

      {/* Top Row - Scroll Left */}
      <div className="absolute top-[180px] left-0 w-full overflow-hidden">
        <div className="flex animate-scroll-left gap-0 hover:pause">
          {/* Duplicate projects for seamless loop */}
          {[...displayProjects, ...displayProjects, ...displayProjects].map((image, index) => (
            <ProjectCard key={`top-${image.id}-${index}`} image={image} />
          ))}
        </div>
      </div>

      {/* Bottom Row - Scroll Right */}
      <div className="absolute top-[430px] left-0 w-full overflow-hidden">
        <div className="flex animate-scroll-right gap-0 hover:pause">
          {/* Duplicate projects for seamless loop */}
          {[...displayProjects, ...displayProjects, ...displayProjects].map((image, index) => (
            <ProjectCard key={`bottom-${image.id}-${index}`} image={image} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% { 
            transform: translateX(0); 
          }
          100% { 
            transform: translateX(calc(-500px * 7)); 
          }
        }
        
        @keyframes scroll-right {
          0% { 
            transform: translateX(calc(-500px * 7)); 
          }
          100% { 
            transform: translateX(0); 
          }
        }
        
        .animate-scroll-left {
          animation: scroll-left 60s linear infinite;
          will-change: transform;
        }
        
        .animate-scroll-right {
          animation: scroll-right 60s linear infinite;
          will-change: transform;
        }
        
        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
        
        /* Hardware acceleration for smoother performance */
        .animate-scroll-left,
        .animate-scroll-right {
          transform: translateZ(0);
          -webkit-transform: translateZ(0);
        }
      `}</style>
    </section>
  );
};

export default GallerySection;