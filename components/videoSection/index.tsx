import React, { useState } from 'react';
import { Play, ChevronRight } from 'lucide-react';

const VideoGallerySection = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  // Sample video data with your original images
  const featuredVideo = {
    id: 'featured',
    thumbnail: 'https://interiorwalaa.smepulse.in/Subtract.png',
  };

  const videoCards = [
    {
      id: 1,
      title: 'Eleven Bakehouse',
      subtitle: 'See this Project',
      thumbnail: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop&crop=center',
      videoUrl: '#'
    },
    {
      id: 2,
      title: 'Sama Calm Studio',
      subtitle: 'See this Project',
      thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center',
      videoUrl: '#'
    },
    {
      id: 3,
      title: 'Belgian Waffle Factory',
      subtitle: 'See this Project',
      thumbnail: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=300&fit=crop&crop=center',
      videoUrl: '#'
    },
    {
      id: 4,
      title: 'Purani Delli in M5 Mall',
      subtitle: 'See this Project',
      thumbnail: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400&h=300&fit=crop&crop=center',
      videoUrl: '#'
    }
  ];

  type PlayButtonSize = 'small' | 'default' | 'large';

  const PlayButton = ({
    size = 'default',
    className = ''
  }: {
    size?: PlayButtonSize;
    className?: string;
  }) => {
    const sizeClasses = {
      small: 'w-6 h-6 sm:w-8 sm:h-8',
      default: 'w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12',
      large: 'w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16'
    };

    const iconSizes = {
      small: { xs: 12, sm: 16,md:20,lg:24 },
      default: { xs: 16, sm: 18, md: 20,lg:24 },
      large: { xs: 18, sm: 20, md: 22, lg: 24 }
    };

    return (
      <div className={`
        ${sizeClasses[size]} 
        bg-white/95 backdrop-blur-sm rounded-full 
        flex items-center justify-center
        transition-all duration-300 ease-in-out
        hover:scale-110 hover:bg-white shadow-lg
        cursor-pointer group
        ${className}
      `}>
        <Play 
          className="ml-0.5 text-gray-800 group-hover:text-black transition-colors" 
          size={
            iconSizes[size].md ??
            iconSizes[size].lg ??
            iconSizes[size].sm ??
            iconSizes[size].xs
          }
          fill="currentColor"
        />
      </div>
    );
  };

  type VideoCardVariant = 'featured' | 'short' | 'tall';

  const VideoCard = ({
    video,
    variant = 'featured',
  }: {
    video: { id: string | number; title?: string; subtitle?: string; thumbnail: string; videoUrl?: string };
    variant?: VideoCardVariant;
  }) => {
    const cardId = `card-${video.id}`;
    const isHovered = hoveredCard === cardId;

    // Responsive height classes for different variants
    const heightClasses = {
      featured: 'h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[720px]',
      short: 'h-[120px] sm:h-[160px] md:h-[200px] lg:h-[240px] xl:h-[288px]',
      tall: 'h-[180px] sm:h-[240px] md:h-[300px] lg:h-[360px] xl:h-[432px]'
    };

    // Responsive text sizes
    const titleSizes = {
      featured: 'text-base sm:text-lg md:text-xl lg:text-2xl',
      short: 'text-xs sm:text-sm md:text-base lg:text-lg',
      tall: 'text-xs sm:text-sm md:text-base lg:text-lg'
    };

    const subtitleSizes = {
      featured: 'text-sm sm:text-base md:text-lg',
      short: 'text-xs sm:text-sm md:text-base',
      tall: 'text-xs sm:text-sm md:text-base'
    };

    // Responsive padding
    const paddingClasses = {
      featured: 'p-3 sm:p-4 md:p-5 lg:p-6',
      short: 'p-2 sm:p-3 md:p-4',
      tall: 'p-2 sm:p-3 md:p-4',
    };

    return (
      <div 
        className={`
          relative rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer
          transition-all duration-300 ease-in-out
          hover:shadow-xl group
          ${heightClasses[variant]}
          w-full
        `}
        onMouseEnter={() => setHoveredCard(cardId)}
        onMouseLeave={() => setHoveredCard(null)}
        onClick={() => console.log(`Play video: ${video.title}`)}
      >
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ 
            backgroundImage: `url(${video.thumbnail})`
          }}
        />
        
        {/* Gradient Overlay for text readability */}
        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" /> */}
        
        {/* Play Button */}
        <div className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4">
          <PlayButton 
            size={variant === 'featured' ? 'large' : 'default'}
            className={isHovered ? 'scale-110' : ''}
          />
        </div>
        
        {/* Content */}
        <div className={`absolute bottom-0 left-0 right-0 text-white ${paddingClasses[variant]}`}>
          {video?.title && (
            <h3 className={`font-semibold mb-1 leading-tight ${titleSizes[variant]}`}>
              {video?.title}
            </h3>
          )}
          {video?.subtitle && (
            <div className="flex items-center gap-1 sm:gap-2 text-white/80 hover:text-white transition-colors">
              <span className={subtitleSizes[variant]}>
                {video?.subtitle}
              </span>
              <ChevronRight 
                size={variant === 'featured' ? 16 : 12} 
                className={`transition-transform duration-200 ${isHovered ? 'translate-x-1' : ''} flex-shrink-0`}
              />
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Responsive Grid Layout */}
      <div className="flex flex-col lg:grid lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8">
        
        {/* Featured Video Section */}
        <div className="lg:col-span-7 order-2 lg:order-1">
          <div className="relative">
            <VideoCard video={featuredVideo} variant="featured" />
            
            {/* Header Overlay - Positioned over the featured video */}
            <div className="absolute inset-0 flex items-end pointer-events-none">
              <div className="md:px-4 lg:p-8 w-full pointer-events-auto">
                <div className="  lg:space-y-6">
                  <>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl text-black font-bold leading-tight">
                      Explore
                      <br />
                      <span className="text-[#8F5E3D]">Our Videos</span>
                    </h2>
                    <p className="text-[#4F4F4F] text-sm sm:text-base md:text-lg lg:text-xl  md:mt-2 max-w-md">
                      Get an insight of our projects
                    </p>
                  </>
                  
                  {/* Know More Button */}
                  <button className="
                    px-4 md:px-6 lg:px-8 
                    py-2 sm:py-2.5 md:py-3
                    border-2 border-[#8F5E3D] rounded-full
                    text-[#8F5E3D] font-medium 
                    text-xs sm:text-sm md:text-base
                    transition-all duration-300 ease-in-out
                    hover:bg-[#8F5E3D] hover:text-white
                    hover:shadow-lg hover:scale-105
                    focus:outline-none focus:ring-2 focus:ring-[#8F5E3D]/50
                    bg-white/90 backdrop-blur-sm
                  ">
                    Know More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Video Grid Section */}
        <div className="lg:col-span-5 order-1 lg:order-2">
          {/* Responsive Grid: 2 columns on all screen sizes */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 lg:gap-4 h-full">
            
            {/* First Column */}
            <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-4">
              {/* Top video - shorter height */}
              <div className="flex-1">
                <VideoCard video={videoCards[0]} variant="short" />
              </div>
              {/* Bottom video - taller height */}
              <div className="flex-[1.8]">
                <VideoCard video={videoCards[1]} variant="tall" />
              </div>
            </div>
            
            {/* Second Column */}
            <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-4">
              {/* Top video - taller height */}
              <div className="flex-[1.8]">
                <VideoCard video={videoCards[2]} variant="tall" />
              </div>
              {/* Bottom video - shorter height */}
              <div className="flex-1">
                <VideoCard video={videoCards[3]} variant="short" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoGallerySection;