import React from 'react';
import { Play, MoveRightIcon } from 'lucide-react';
import { Button } from '../ui/button';
import { videos } from '@/data/videos';

const VideoGallerySection = () => {


  interface Video {
    id: number;
    title: string;
    subtitle: string;
    thumbnail: string;
  }

  const VideoCard = ({ video, className = '', isLarge = false, noOverlay = false, textOverlay = null, noHoverScale = false }: { video: Video; className?: string; isLarge?: boolean; noOverlay?: boolean; textOverlay?: React.ReactNode; noHoverScale?: boolean }) => (
    <div className={`relative rounded-4xl overflow-hidden cursor-pointer group ${className}`}>
      {/* Background Image */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-transform duration-500 ${noHoverScale ? '' : noOverlay ? 'group-hover:scale-105' : 'group-hover:scale-110'}`}
        style={{ backgroundImage: `url(${video.thumbnail})` }}
      />

      {/* Gradient Overlay - only show if noOverlay is false */}
      {!noOverlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
      )}

      {/* Play Button */}
      <div className="absolute top-4 right-4 z-10">
        <div className={`${isLarge ? 'w-10 h-10' : 'w-10 h-10'} bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-white shadow-lg`}>
          <Play size={isLarge ? 16 : 14} className="ml-0.5 text-gray-800" fill="currentColor" />
        </div>
      </div>

      {/* Content - Positioned at bottom right */}
      <div className="absolute bottom-4 right-4 text-white text-right z-10">
        <h3 className={`font-bold mb-2 ${isLarge ? 'text-lg' : 'text-base'} font-manrope drop-shadow-lg`}>{video.title}</h3>
        <div className="flex items-center gap-2 text-white hover:text-white transition-colors justify-end">
          <span className={`${isLarge ? 'text-sm' : 'text-xs'} drop-shadow-md font-manrope`}>{video.subtitle}</span>
          <MoveRightIcon size={isLarge ? 14 : 12} className="transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      </div>

      {/* Text Overlay - if provided */}
      {textOverlay && (
        <div className="absolute bottom-5 left-8 max-w-md z-20">
          {textOverlay}
        </div>
      )}
    </div>
  );

  return (
    <section className="py-8 lg:py-20 px-6 max-w-[1340px] mx-auto">
      {/* Mobile/Tablet Layout */}
      <div className="lg:hidden">
        {/* Section Header for Mobile */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 font-work-sans">
            Explore<br />
            <span className="text-[var(--primary-brown)] text-4xl font-work-sans">Our Videos</span>
          </h2>
          <p className="text-base md:text-lg text-[var(--dark-gray)] font-manrope max-w-md mx-auto">
            Get an insight of our projects
          </p>
        </div>

        {/* Mobile Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <VideoCard
            video={videos[1]}
            className="h-[250px] md:h-[280px]"
          />
          <VideoCard
            video={videos[2]}
            className="h-[250px] md:h-[280px]"
          />
          <VideoCard
            video={videos[3]}
            className="h-[250px] md:h-[280px]"
          />
          <VideoCard
            video={videos[4]}
            className="h-[250px] md:h-[280px]"
          />
        </div>

        {/* Mobile CTA Button */}
        <div className="text-center mt-8">
          <Button
            variant="interior"
            className="shadow-lg"
          >
            View All Videos
          </Button>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:grid lg:grid-cols-12 gap-8">
        {/* First Column - Large video with text overlay */}
        <div className="lg:col-span-6 relative">
          <VideoCard
            video={videos[0]}
            className="h-[500px] lg:h-[600px]"
            isLarge={true}
            noOverlay={true}
            noHoverScale={true}
          />

          {/* Text overlay positioned at bottom left */}
          <div className="absolute bottom-5 left-8 text-white max-w-md z-20">
            <h2 className="text-3xl lg:text-4xl text-black xl:text-3xl font-bold mb-4 leading-tight drop-shadow-2xl">
              Explore<br />
              <span className="text-[var(--primary-brown)] text-5xl drop-shadow-2xl">Our Videos</span>
            </h2>
            <p className="text-base lg:text-lg mb-6 max-w-sm text-[var(--dark-gray)]">
              Get an insight of our projects
            </p>
            <Button
              variant="interior"
              className="shadow-lg"
            >
              Know More
            </Button>
          </div>
        </div>

        {/* Second Column - Small then Large */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          <VideoCard
            video={videos[1]}
            className="h-[180px] lg:h-[220px]"
          />
          <VideoCard
            video={videos[2]}
            className="h-[280px] lg:h-[350px]"
          />
        </div>

        {/* Third Column - Large then Small */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          <VideoCard
            video={videos[3]}
            className="h-[280px] lg:h-[350px]"
          />
          <VideoCard
            video={videos[4]}
            className="h-[180px] lg:h-[220px]"
          />
        </div>
      </div>
    </section>
  );
};

export default VideoGallerySection;