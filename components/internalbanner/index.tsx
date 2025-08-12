'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface InternalBannerProps {
  title: string;
  subtitle: string;
  backgroundImages?: string[];
  backgroundImage?: string; // Keep for backward compatibility
  height?: {
    mobile: string;
    tablet: string;
    desktop: string;
    large: string;
  };
  className?: string;
  autoSlideInterval?: number; // Time in milliseconds between slides
}

export default function InternalBanner({
  title,
  subtitle,
  backgroundImages = [],
  backgroundImage,
  height = {
    mobile: 'h-screen',
    tablet: 'h-screen',
    desktop: 'h-screen',
    large: 'h-screen'
  },
  className = '',
  autoSlideInterval = 3000 // Default 3 seconds
}: InternalBannerProps) {

  // Use backgroundImages if provided, otherwise fall back to single backgroundImage
  const images = backgroundImages.length > 0 ? backgroundImages : backgroundImage ? [backgroundImage] : [];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto slide effect
  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, autoSlideInterval);

    return () => clearInterval(interval);
  }, [images.length, autoSlideInterval]);

  // Combine height classes
  const heightClasses = `${height.mobile} sm:${height.tablet} md:${height.desktop} lg:${height.large}`;

  return (
    <section
      className={`relative w-full ${heightClasses} bg-cover bg-center bg-no-repeat -mt-[72px] sm:-mt-[80px] md:-mt-[88px] lg:-mt-[88px] ${className}`}
      style={{
        zIndex: -1
      }}
    >
      {/* Mobile Layout - Stacked */}
      <div className="flex flex-col h-full lg:hidden">
        {/* Background Image for Mobile - Full width */}
        <div className="relative w-full h-[60%] overflow-hidden">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
            >
              <Image
                src={image}
                alt={`${title} - Slide ${index + 1}`}
                fill
                className="object-cover object-center"
                priority={index === 0}
                quality={100}
              />
            </div>
          ))}
        </div>

        {/* Text Content for Mobile - Full width */}
        <div className="w-full h-[40%] bg-[var(--secondary-brown)] flex items-center justify-center">
          <div className="px-4 sm:px-8 py-6 text-center">
            <h1 className="text-[#FDFEFF] text-lg sm:text-xl md:text-2xl font-medium mb-2 sm:mb-3 leading-tight font-serif">
              {title}
            </h1>
            <p className="text-[#FDFEFF] font-light text-xs sm:text-sm md:text-base leading-relaxed opacity-95 font-['manrope'] mb-4">
              {subtitle}
            </p>
            <button className="text-white border rounded-full px-6 py-2 text-sm sm:text-base cursor-pointer">
              Discover
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Layout - Side by side */}
      <div className="hidden lg:flex h-full">
        {/* Text Content - 40% width with #9b7961 background */}
        <div className="w-[40%] h-full bg-[var(--secondary-brown)] flex items-center justify-center">
          <div className="px-24 py-8 text-left">
            <h1 className="text-[#FDFEFF] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium mb-3 sm:mb-4 md:mb-3 leading-tight font-serif">
              {title}
            </h1>
            <p className="text-[#FDFEFF] font-light text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed opacity-95 font-['manrope']">
              {subtitle}
            </p>
            <button className="text-white border rounded-full px-8 py-2 mt-4 cursor-pointer">
              Discover
            </button>
          </div>
        </div>

        {/* Background Image Slider - 60% width */}
        <div className="relative w-[60%] h-full overflow-hidden">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
            >
              <Image
                src={image}
                alt={`${title} - Slide ${index + 1}`}
                fill
                className="object-cover object-center"
                priority={index === 0}
                quality={100}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Export type for use in other files
export type { InternalBannerProps };