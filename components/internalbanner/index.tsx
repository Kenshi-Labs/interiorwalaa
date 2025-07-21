import Image from 'next/image';

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
    mobile: 'h-[70vh]',
    tablet: 'h-[75vh]',
    desktop: 'h-[85vh]',
    large: 'h-[85vh]'
  },
  className = ''
}: InternalBannerProps) {

  // Generate gradient based on direction
  const getGradientStyle = () => {
    const { start, end } = overlayOpacity;

    switch (gradientDirection) {
      case 'right':
        // Fade from black (start opacity) to transparent, with more coverage on the left
        return `linear-gradient(to right, rgba(0, 0, 0, ${start}), rgba(0, 0, 0, ${start}) 40%, rgba(0, 0, 0, 0) 100%)`;
      case 'center':
        // Fade from transparent to black (start opacity) to transparent
        return `linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, ${start}) 40%, rgba(0, 0, 0, 0) 100%)`;
      default:
        // Fade from transparent to black (end opacity)
        return `linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, ${end}))`;
    }
  };

  // Combine height classes
  const heightClasses = `${height.mobile} sm:${height.tablet} md:${height.desktop} lg:${height.large}`;

  return (
    <section
      className={`relative w-full ${heightClasses} bg-cover bg-center bg-no-repeat -mt-[72px] sm:-mt-[80px] md:-mt-[88px] lg:-mt-[96px] pt-[72px] sm:pt-[80px] md:pt-[88px] lg:pt-[96px] ${className}`}
      style={{
        zIndex: -1
      }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className="object-cover object-center"
          priority
          quality={100}
        />
        {/* Bottom gradient overlay for smooth blend */}
        <div
          className="absolute bottom-0 left-0 w-full h-10 pointer-events-none z-20"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, #fff 100%)'
          }}
        />
      </div>
      <div className="h-full flex items-center relative z-10">
        <div className="">
          {/* Gradient backdrop */}
          <div
            className="backdrop-blur-sm px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-6 md:py-8 lg:py-12 xl:py-6 xl:px-20 max-w-2xl md:max-w-3xl lg:max-w-5xl"
            style={{
              background: getGradientStyle()
            }}
          >
            <h1 className="text-[#FDFEFF] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 md:mb-3 leading-tight font-work-sans">
              {title}
            </h1>
            <p className="text-[#FDFEFF] text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed opacity-95 font-manrope">
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