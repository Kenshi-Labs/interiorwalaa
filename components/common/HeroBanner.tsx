
import React from 'react';
import Image from 'next/image';

export const HeroBanner = ({
  backgroundImage = "",
  headlineText = "",
  brandName = "",
  showOverlay = true,
  overlayOpacity = "bg-black/40",
  height = "h-[300px] sm:h-[350px] md:h-[450px] lg:h-[500px] xl:h-[600px]",
  isLoading = false,
}: {
  backgroundImage?: string;
  headlineText?: string;
  brandName?: string;
  showOverlay?: boolean;
  overlayOpacity?: string;
  height?: string;
  isLoading?: boolean;
}) => {
  if (isLoading) {
    return (
      <div className="w-full px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8 py-2 sm:py-6 md:pt-4 md:pb-10">
        <div className={`${height} rounded-2xl sm:rounded-3xl overflow-hidden max-w-[1800px] mx-auto bg-gray-200 animate-pulse`}>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-gray-500">Loading...</div>
          </div>
        </div>
      </div>
    );
  }

  // Don't render if no data is provided
  if (!backgroundImage || !headlineText || !brandName) {
    return (
      <div className="w-full px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8 py-2 sm:py-6 md:pt-4 md:pb-10">
        <div className={`${height} rounded-2xl sm:rounded-3xl overflow-hidden max-w-[1800px] mx-auto bg-gray-200 animate-pulse`}>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-gray-500">Loading...</div>
          </div>
        </div>
      </div>
    );
  }

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

        {/* Centered Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center mt-28 text-center px-4">
          <h2 className="text-[#FDFEFF] max-w-[700px] font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[70px] font-extralight text-center">
            {headlineText}
          </h2>
        </div>

        {/* Brand Name Text */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center items-end">
          <h1
            className="text-center font-['Alexandria',_Arial,_sans-serif] brand-name-text text-gradient"
            style={{
              fontFamily: '"Alexandria", Arial, "Helvetica Neue", Helvetica, sans-serif',
              fontSize: '120px',
              lineHeight: '70%',
              fontWeight: 700,
              textSizeAdjust: '100%'
            }}
          >
            {brandName}
          </h1>
        </div>
      </div>
    </div>
  );
};
