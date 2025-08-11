'use client'
import React, { useCallback, useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { LatestProject } from '@/types/project';

interface LatestProjectsSectionProps {
  title: string;
  description: string;
  projects: LatestProject[];
}

const LatestProjectsSection: React.FC<LatestProjectsSectionProps> = ({
  title,
  description,
  projects
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const onViewAllTextClick = useCallback(() => {
    // Add your code here
  }, []);

  // Update currentIndex based on scroll position
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = window.innerWidth < 768 ? 284 : window.innerWidth >= 768 && window.innerWidth < 1024 ? 326 : 380;
      const gap = window.innerWidth < 768 ? 16 : window.innerWidth >= 768 && window.innerWidth < 1024 ? 24 : 40;
      const totalCardWidth = cardWidth + gap;

      const newIndex = Math.round(scrollLeft / totalCardWidth);
      setCurrentIndex(Math.max(0, Math.min(newIndex, projects.length - 1)));
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [projects.length]);

  const scrollLeft = useCallback(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = window.innerWidth < 768 ? 280 : window.innerWidth >= 768 && window.innerWidth < 1024 ? 320 : 340;
      const gap = window.innerWidth < 768 ? 16 : window.innerWidth >= 768 && window.innerWidth < 1024 ? 24 : 40;
      const scrollAmount = cardWidth + gap;

      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  }, []);

  const scrollRight = useCallback(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = window.innerWidth < 768 ? 280 : window.innerWidth >= 768 && window.innerWidth < 1024 ? 320 : 340;
      const gap = window.innerWidth < 768 ? 16 : window.innerWidth >= 768 && window.innerWidth < 1024 ? 24 : 40;
      const scrollAmount = cardWidth + gap;

      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }, []);

  // Calculate indicator position and width
  const maxIndex = Math.max(0, projects.length - 1);
  const indicatorWidth = maxIndex > 0 ? 820 / (maxIndex + 1) : 820; // 820px is the line width
  const indicatorPosition = currentIndex * indicatorWidth;

  return (
    <div className="w-full relative text-right text-base text-black font-inter py-16 h-auto lg:h-[650px] px-4 md:px-6 lg:px-0">
      <div className="">

        {/* Details Section - Moved to top for mobile/tablet */}
        <div className="w-full lg:absolute lg:top-[120px] lg:left-[90px] lg:w-[405px] lg:h-[289px] text-left mb-8 lg:mb-0">
          <div className="text-3xl md:text-4xl lg:text-5xl font-semibold font-['WorkSans'] lg:absolute lg:top-[39.75px] lg:left-0 mb-4 lg:mb-0">{title}</div>
          <div className="leading-[24px] md:leading-[28px] text-[#797979] inline-block w-full lg:absolute lg:top-[112px] lg:left-[3px] lg:w-[402px] font-['Manrope'] text-sm md:text-base mb-6 lg:mb-0">
            {description}
          </div>
          <div className="tracking-[0.05em] text-transform-uppercase font-['Manrope'] font-semibold inline-block w-[79px] h-[18px] cursor-pointer mb-4 lg:absolute lg:top-[264px] lg:left-[3px] lg:mb-0 hidden lg:inline-block" onClick={onViewAllTextClick}>
            View all
          </div>
        </div>

        {/* Product Cards Container */}
        <div className="w-full lg:absolute lg:right-0 lg:w-[880px] lg:h-[500px] mt-8 lg:mt-0">
          <div
            ref={scrollContainerRef}
            className="flex gap-4 md:gap-6 lg:gap-10 h-full overflow-x-auto lg:overflow-hidden scrollbar-hide"
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="w-[280px] md:w-[320px] lg:w-[340px] h-auto lg:h-[462px] font-poppins flex-shrink-0"
              >
                <Image
                  className="h-auto w-full max-w-full overflow-hidden max-h-full object-cover"
                  width={340}
                  height={420}
                  sizes="(max-width: 768px) 280px, (max-width: 1024px) 320px, 340px"
                  alt={project.title}
                  src={project.image}
                />
                <div className="mt-2 flex justify-between items-center font-['WorkSans']">
                  <div className="text-base md:text-lg font-medium">{project.title}</div>
                  <div className="text-transform-uppercase text-sm md:text-base">{project.price}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Icons - Hidden on mobile, visible on tablet and desktop */}
          <div className="hidden md:flex lg:absolute lg:-bottom-1 lg:right-0 items-center mt-6 lg:mt-0 gap-2">
            {/* horizontal line with indicator */}
            <div className="relative w-[400px] md:w-[600px] lg:w-[805px] h-[1.5px] bg-[#797979]">
              {/* Indicator bar */}
              <div
                className="absolute top-0 left-0 h-full bg-black transition-all duration-300 ease-in-out"
                style={{
                  width: `${indicatorWidth}px`,
                  transform: `translateX(${indicatorPosition}px)`
                }}
              ></div>
            </div>
            <div className="flex">
              <button
                onClick={scrollLeft}
                disabled={currentIndex === 0}
                className={`${currentIndex === 0
                  ? 'text-[#797979] cursor-not-allowed'
                  : 'text-black hover:text-gray-600 cursor-pointer'
                  }`}
                aria-label="Scroll left"
              >
                <ChevronLeft size={32} />
              </button>
              <button
                onClick={scrollRight}
                disabled={currentIndex >= maxIndex}
                className={`${currentIndex >= maxIndex
                  ? 'text-[#797979] cursor-not-allowed'
                  : 'text-black hover:text-gray-600 cursor-pointer'
                  }`}
                aria-label="Scroll right"
              >
                <ChevronRight size={32} />
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default LatestProjectsSection;