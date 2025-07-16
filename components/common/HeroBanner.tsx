
import React from 'react';
import Image from 'next/image';

export const HeroBanner = ({
  backgroundImage = "https://interiorwalaa.smepulse.in/homebannerbg.png",
  showOverlay = true,
  overlayOpacity = "bg-black/40",
  height = "h-[300px] sm:h-[350px] md:h-[450px] lg:h-[500px] xl:h-[600px]",
}) => {
  return (
    <div className="w-full px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8 py-2 sm:py-6 md:pt-4 md:pb-10">
      <div className={`relative ${height} rounded-2xl sm:rounded-3xl overflow-hidden max-w-[1800px] mx-auto`}>
        {/* Background Image */}
        <Image
          src={backgroundImage}
          alt="Hero background"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Overlay */}
        {showOverlay && (
          <div className={`absolute inset-0 ${overlayOpacity}`} />
        )}

        {/* INTERIORWALAA Text */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center items-end">
          <h1
            className="text-center leading-none tracking-normal drop-shadow-lg sm:drop-shadow-xl md:drop-shadow-2xl font-alexandria text-[38px] sm:text-[64px] md:text-[70px] lg:text-[100px] xl:text-[117.17px] font-bold text-gradient"
            style={{ lineHeight: '0.7' }}
          >
            INTERIORWALAA
          </h1>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-cyan-400/20 to-transparent rounded-full blur-lg sm:blur-xl md:blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gradient-to-tr from-cyan-400/20 to-transparent rounded-full blur-md sm:blur-lg md:blur-xl"></div>
      </div>
    </div>
  );
};
