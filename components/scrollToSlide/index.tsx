'use client'
import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialCarousel = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(2);
  const [maxIndex, setMaxIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Eran Gowda",
      role: "Customer",
      text: "Thanks a lot to Interiorwalaa team to have transformed the house into dream house. Appreciate your care and customer centricity."
    },
    {
      id: 2,
      name: "Raveendra Holla",
      role: "Customer", 
      text: "They are one stop shop for all my renovation needs. Finished work on budget, on time with highest quality."
    },
    {
      id: 3,
      name: "Priya Sharma",
      role: "Customer",
      text: "Exceptional service and attention to detail. The team understood our vision perfectly and delivered beyond expectations."
    },
    {
      id: 4,
      name: "Rajesh Kumar",
      role: "Customer",
      text: "Professional approach and quality work. Highly recommend for anyone looking for interior design solutions."
    }
  ];

  // Handle responsive cards per view
  useEffect(() => {
    const updateCardsPerView = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setCardsPerView(1);
      } else if (width < 1024) {
        setCardsPerView(1.5);
      } else {
        setCardsPerView(2);
      }
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  // Update max index based on cards per view
  useEffect(() => {
    setMaxIndex(Math.max(0, testimonials.length - Math.ceil(cardsPerView)));
  }, [cardsPerView, testimonials.length]);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = (container.children[0] as HTMLElement).offsetWidth;
      const gap = window.innerWidth < 768 ? 16 : 24; // Responsive gap
      const scrollAmount = cardWidth + gap;
      
      container.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
      
      setCurrentIndex(prev => Math.max(0, prev - 1));
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = (container.children[0] as HTMLElement).offsetWidth;
      const gap = window.innerWidth < 768 ? 16 : 24; // Responsive gap
      const scrollAmount = cardWidth + gap;
      
      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
      
      setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
    }
  };

  return (
    <section className="py-8 pl-4 sm:py-12 lg:py-16 sm:pl-8 lg:pl-10 xl:pl-40">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
        {/* Left Column - Header and Navigation */}
        <div className="space-y-4 sm:space-y-6">
          <div className="space-y-1 sm:space-y-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight">
              What Our Clients Say
            </h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-amber-700 leading-tight">
              About Us
            </h3>
          </div>
          
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-md">
            Get an insight on what our clients say about us
          </p>
          
          {/* Navigation Arrows */}
          <div className="flex gap-3 sm:gap-4 pt-2 sm:pt-4">
            <button
              title="Scroll left"
              onClick={scrollLeft}
              disabled={currentIndex === 0}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-gray-400 bg-white flex items-center justify-center text-gray-600 hover:border-amber-700 hover:text-amber-700 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-gray-400 disabled:hover:text-gray-600 shadow-sm hover:shadow-md"
            >
              <ChevronLeft size={window.innerWidth < 640 ? 14 : 16} />
            </button>
            <button
              title="Scroll right"
              onClick={scrollRight}
              disabled={currentIndex >= maxIndex}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-gray-400 bg-white flex items-center justify-center text-gray-600 hover:border-amber-700 hover:text-amber-700 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-gray-400 disabled:hover:text-gray-600 shadow-sm hover:shadow-md"
            >
              <ChevronRight size={window.innerWidth < 640 ? 14 : 16} />
            </button>
          </div>
        </div>

        {/* Right Column - Testimonial Carousel */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-2"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {testimonials.map((testimonial, index) => {
              const isActive = index === currentIndex;
              
              return (
                <div
                  key={testimonial.id}
                  className={`flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] lg:w-[380px] p-4 sm:p-6 rounded-xl sm:rounded-2xl transition-all duration-300 ${
                    isActive 
                      ? 'bg-[#EFEBE8] shadow-lg scale-[1.02] sm:scale-105 ' 
                      : 'bg-[#EFEBE8] shadow-md hover:shadow-lg'
                  }`}
                  style={{ scrollSnapAlign: 'start' }}
                >
       
                  <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                    <Quote 
                      className={`fill-current transition-colors duration-300 ${
                        isActive ? 'text-[#8F5E3D]' : 'text-[#F3F4F6]'
                      }`} 
                      size={window.innerWidth < 640 ? 30 : 30} 
                    />
                     <div className="">
                    <h4 className={`font-bold text-base sm:text-lg transition-colors duration-300 ${
                      isActive ? 'text-[#8F5E3D]' : 'text-[#8F5E3D]'
                    }`}>
                      {testimonial.name}
                    </h4>
                    <p className={`text-xs sm:text-sm transition-colors duration-300 ${
                      isActive ? 'text-black' : 'text-black'
                    }`}>
                      {testimonial.role}
                    </p>
                  </div>
                  </div>
                  
                
                 
                  
                  {/* Testimonial Text */}
                  <p className={`text-sm sm:text-base leading-relaxed transition-colors duration-300 ${
                    isActive ? 'text-[#4F4F4F]' : 'text-[#4F4F4F]'
                  }`}>
                    {testimonial.text}
                  </p>
                </div>
              );
            })}
          </div>
          
          {/* Mobile Touch Indicator */}
          <div className="flex justify-center mt-4 lg:hidden">
            <div className="flex gap-1.5">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-colors duration-200 ${
                    index === currentIndex ? 'bg-amber-700' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;