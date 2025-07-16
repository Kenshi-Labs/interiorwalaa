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
    <section className="py-12 sm:py-16 lg:py-16 px-4 sm:px-6 lg:px-8 bg-white-alt">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-12 sm:mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-5 opacity-0'
            }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-semibold mb-3 sm:mb-4 font-work-sans">
            What We{' '}
            <span className="text-primary-brown">
              Offer
            </span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg lg:text-xl max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4 font-manrope">
            Experience the transformative power of design with us today
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
                  className="group rounded-xl sm:rounded-3xl p-6 sm:p-8 border border-gray-100 h-full flex flex-col items-center text-center bg-[var(--bg-secondary)]"
                >
                  {/* Icon Container */}
                  <div
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6"
                  >
                    <Image
                      src={service.icon}
                      alt={service.title}
                      className="w-8 h-8 sm:w-14 sm:h-14 object-contain"
                      width={100}
                      height={100}
                      unoptimized={true}
                      loading='lazy'
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900 font-manrope">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed flex-grow px-2 sm:px-0 font-manrope">
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