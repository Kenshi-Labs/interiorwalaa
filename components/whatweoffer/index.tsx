'use client'
import { services } from '@/data/data';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';


const WhatWeOffer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);



  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-white-alt">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-5 opacity-0'
            }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-2 sm:mb-3 md:mb-4 font-work-sans leading-tight">
            What We{' '}
            <span className="text-primary-brown">
              Offer
            </span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-2 sm:px-4 font-manrope">
            Experience the transformative power of design with us today
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
                  transitionDelay: `${service.delay}ms`
                }}
              >
                <div
                  className="group rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 border border-gray-100 h-full flex flex-col items-center text-center bg-[var(--bg-secondary)] hover:shadow-lg transition-shadow duration-300"
                >
                  {/* Icon Container */}
                  <div
                    className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 md:mb-6 lg:mb-8 bg-white/50 backdrop-blur-sm"
                  >
                    <Image
                      src={service.icon}
                      alt={service.title}
                      className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 object-contain"
                      width={100}
                      height={100}
                      unoptimized={true}
                      loading='lazy'
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 md:mb-4 text-gray-900 font-manrope leading-tight">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed flex-grow px-1 sm:px-2 md:px-0 font-manrope">
                    {service.description}
                  </p>


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