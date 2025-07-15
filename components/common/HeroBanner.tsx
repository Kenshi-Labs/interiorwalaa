
import React from 'react';

export const HeroBanner = ({
  title = "Bring Serenity",
  subtitle = "To Your Place With",
  brandName = "INTERIORWALAA",
  description = "Interiorwalaa stands at the forefront of commercial interior designers in Bangalore",
  backgroundImage = "https://interiorwalaa.smepulse.in/modern-luxury-living-room-interior-black-sofa-with-dark-concrete-wall%201.png",
  textAlign = "left",
  showOverlay = true,
  overlayOpacity = "bg-black/40",
  height = "h-[400px] md:h-[500px] lg:h-[600px]",
}) => {
  return (
    <div className="w-full px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-24 ">
      <div className={`relative ${height} rounded-2xl overflow-hidden shadow-2xl max-w-7xl mx-auto`}>
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${backgroundImage})`
          }}
        />
        
        {/* Overlay */}
        {showOverlay && (
          <div className={`absolute inset-0 ${overlayOpacity}`} />
        )}
        
        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className={`px-8 md:px-12 lg:px-16 xl:px-20 py-8 md:py-12 max-w-2xl ${textAlign === 'center' ? 'mx-auto text-center' : ''}`}>
            
            {/* Main Title */}
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 ${textAlign === 'center' ? 'text-center' : 'text-left'}`}>
              <div className="mb-2">
                {title}
              </div>
              <div className="mb-2">
                {subtitle}
              </div>
              <div className="text-cyan-400 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-wide">
                {brandName}
              </div>
            </h1>
            
            {/* Description */}
            {description && (
              <div className="mb-8">
                <p className={`text-gray-200 text-lg md:text-xl leading-relaxed ${textAlign === 'center' ? 'text-center' : 'text-left'}`}>
                  {description}
                </p>
              </div>
            )}
            
            {/* Optional CTA Button */}
            <div className={`${textAlign === 'center' ? 'text-center' : 'text-left'}`}>
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Get Started
              </button>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-cyan-400/20 to-transparent rounded-full blur-xl"></div>
      </div>
    </div>
  );
};
