'use client'
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { ServiceItem } from '@/types/homepage';

interface WhatWeOfferProps {
  title: string;
  subtitle: string;
  description: string;
  services: ServiceItem[];
  isLoading: boolean;
}

const WhatWeOffer: React.FC<WhatWeOfferProps> = ({
  title,
  subtitle,
  description,
  services,
  isLoading
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (isLoading) {
    return (
      <section className="py-8 sm:py-12 md:py-16 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-12 bg-white-alt">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-300 rounded mb-4 mx-auto max-w-md"></div>
              <div className="h-4 bg-gray-300 rounded mb-8 mx-auto max-w-sm"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="h-64 bg-gray-300 rounded-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-12 bg-white-alt">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-8 sm:mb-12 md:mb-16 lg:mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-5 opacity-0'
            }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-semibold mb-2 sm:mb-3 md:mb-2 font-['WorkSans'] text-black leading-tight">
            {title}{' '}
            <span className="text-primary-brown">
              {subtitle}
            </span>
          </h2>
          <p className="text-dark-gray-alt text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-2 sm:px-4 font-manrope">
            {description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className={`transform transition-all duration-700 ${isVisible
                  ? 'translate-y-0 opacity-100 scale-100'
                  : 'translate-y-8 opacity-0 scale-95'
                  }`}
                style={{
                  transitionDelay: `${(index + 1) * 100}ms`
                }}
              >
                <div
                  className="group relative rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-4xl border border-gray-100 h-full flex flex-col items-center text-center bg-[var(--bg-secondary)] transition-shadow duration-300 overflow-hidden"
                >
                  {/* Theater Screen Background Animation - Icon size only */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-32 lg:h-32 bg-primary-brown -translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out rounded-b-lg sm:rounded-b-xl md:rounded-b-xl"></div>

                  {/* Content Container with Padding */}
                  <div className="relative z-10 p-2 sm:p-4 md:p-5 lg:p-6 flex flex-col items-center h-full">
                    {/* Icon Container */}
                    <div
                      className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 md:mb-4 lg:mb-8"
                    >
                      {/* Icon */}
                      <Image
                        src={service.icon}
                        alt={service.title}
                        className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 object-contain transition-all duration-300 group-hover:hidden"
                        width={100}
                        height={100}
                        unoptimized={true}
                        loading='lazy'
                      />
                      <Image
                        src={service.hoverIcon}
                        alt={service.title}
                        className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 object-contain transition-all duration-300 hidden group-hover:block"
                        width={100}
                        height={100}
                        unoptimized={true}
                        loading='lazy'
                      />
                    </div>

                    {/* Content */}
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-2 sm:mb-3 md:mb-4 text-gray-900 font-['WorkSans'] leading-tight">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed flex-grow px-1 sm:px-2 md:px-0 font-manrope">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;