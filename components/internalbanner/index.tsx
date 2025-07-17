interface InternalBannerProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  gradientDirection?: 'left' | 'right' | 'center';
  overlayOpacity?: {
    start: number;
    end: number;
  };
  height?: {
    mobile: string;
    tablet: string;
    desktop: string;
    large: string;
  };
  className?: string;
}

export default function InternalBanner({
  title,
  subtitle,
  backgroundImage,
  gradientDirection = 'left',
  overlayOpacity = { start: 0.1, end: 0.5 },
  height = {
    mobile: 'h-[250px]',
    tablet: 'h-[300px]',
    desktop: 'h-[400px]',
    large: 'h-[720px]'
  },
  className = ''
}: InternalBannerProps) {
  
  // Generate gradient based on direction
  const getGradientStyle = () => {
    const { start, end } = overlayOpacity;
    
    switch (gradientDirection) {
      case 'right':
        return `linear-gradient(to right, rgba(0, 0, 0, ${start}), rgba(0, 0, 0, ${end}))`;
      case 'center':
        return `linear-gradient(to center, rgba(0, 0, 0, ${end}), rgba(0, 0, 0, ${start}), rgba(0, 0, 0, ${end}))`;
      default:
        return `linear-gradient(to left, rgba(0, 0, 0, ${start}), rgba(0, 0, 0, ${end}))`;
    }
  };

  // Combine height classes
  const heightClasses = `${height.mobile} sm:${height.tablet} md:${height.desktop} lg:${height.large}`;

  return (
    <section 
      className={`relative w-full ${heightClasses} bg-cover bg-center bg-no-repeat -mt-[72px] sm:-mt-[80px] md:-mt-[88px] lg:-mt-[96px] pt-[72px] sm:pt-[80px] md:pt-[88px] lg:pt-[96px] ${className}`}
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        zIndex: -1
      }}
    >
      <div className="h-full flex items-center relative z-10">
        <div className="">
          {/* Gradient backdrop */}
          <div 
            className="backdrop-blur-sm px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-6 md:py-8 lg:py-12 xl:py-16 xl:px-16 max-w-2xl md:max-w-3xl lg:max-w-4xl"
            style={{
              background: getGradientStyle()
            }}
          >
            <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 md:mb-5 leading-tight">
              {title}
            </h1>
            <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed opacity-95">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Export type for use in other files
export type { InternalBannerProps };