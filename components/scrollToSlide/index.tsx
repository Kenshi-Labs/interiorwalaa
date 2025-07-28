'use client'
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(2);
  const [isAnimating, setIsAnimating] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

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
      if (typeof window !== 'undefined') {
        const width = window.innerWidth;
        if (width < 640) {
          setCardsPerView(1);
        } else if (width < 1024) {
          setCardsPerView(1.5);
        } else {
          setCardsPerView(2);
        }
      }
    };

    updateCardsPerView();
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', updateCardsPerView);
      return () => window.removeEventListener('resize', updateCardsPerView);
    }
  }, []);

  const maxIndex = Math.max(0, testimonials.length - Math.ceil(cardsPerView));

  const scrollLeft = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(prev => Math.max(0, prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const scrollRight = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        if (currentIndex >= maxIndex) {
          setCurrentIndex(0);
        } else {
          setCurrentIndex(prev => prev + 1);
        }
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, maxIndex, isAnimating]);

  // Get visible testimonials based on current index
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < Math.ceil(cardsPerView); i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <section className="py-6 px-4 sm:py-8 sm:px-6 md:py-12 md:px-8 lg:py-16 lg:pl-10 xl:pl-20 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
        {/* Left Column - Header and Navigation */}
        <div className="space-y-4 sm:space-y-5 text-center lg:text-left">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl text-black leading-tight font-['WorkSans'] font-medium animate-fade-in">
              What Our Clients Say
            </h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[var(--primary-brown)] leading-tight font-['WorkSans'] font-bold animate-fade-in-delay">
              About Us
            </h3>
          </div>

          <p className="text-[var(--dark-gray)] text-sm sm:text-base md:text-lg leading-relaxed max-w-md mx-auto lg:mx-0 font-manrope animate-fade-in-delay-2">
            Get an insight on what our clients say about us
          </p>

          {/* Navigation Arrows */}
          <div className="flex gap-3 sm:gap-4 pt-2 sm:pt-4 justify-center lg:justify-start">
            <button
              title="Previous testimonial"
              onClick={scrollLeft}
              disabled={currentIndex === 0 || isAnimating}
              className="group w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[var(--primary-brown)] bg-white flex items-center justify-center text-[var(--primary-brown)] hover:bg-[var(--primary-brown)] hover:text-white transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-[var(--primary-brown)] shadow-md hover:shadow-xl hover:scale-110 active:scale-95 transform"
            >
              <ChevronLeft
                size={18}
                className="transition-transform duration-200 group-hover:-translate-x-0.5"
              />
            </button>
            <button
              title="Next testimonial"
              onClick={scrollRight}
              disabled={currentIndex >= maxIndex || isAnimating}
              className="group w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[var(--primary-brown)] bg-white flex items-center justify-center text-[var(--primary-brown)] hover:bg-[var(--primary-brown)] hover:text-white transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-[var(--primary-brown)] shadow-md hover:shadow-xl hover:scale-110 active:scale-95 transform"
            >
              <ChevronRight
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </button>
          </div>
        </div>

        {/* Right Column - Testimonial Carousel */}
        <div className="relative mt-6 lg:mt-0" ref={carouselRef}>
          <div className="flex gap-3 sm:gap-4 md:gap-6 transition-transform duration-500 ease-out justify-center lg:justify-start">
            {getVisibleTestimonials().map((testimonial, index) => {
              const isFirstCard = index === 0;
              const isSecondCard = index === 1;

              return (
                <div
                  key={`${testimonial.id}-${currentIndex}`}
                  className={`flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] lg:w-[380px] p-4 sm:p-6 md:p-8 lg:p-10 rounded-2xl sm:rounded-3xl md:rounded-4xl transition-all duration-500 ease-out transform ${isFirstCard
                    ? 'bg-[var(--light-cream)] shadow-xl scale-105 z-20'
                    : isSecondCard
                      ? 'bg-[var(--light-cream)] shadow-lg scale-[1.02] z-10 opacity-90'
                      : 'bg-[var(--light-cream)] shadow-md scale-100 z-0 opacity-70'
                    } hover:scale-105 hover:shadow-2xl`}
                  style={{
                    transform: `translateX(${index * (typeof window !== 'undefined' && window.innerWidth < 640 ? 10 : 20)}px) scale(${isFirstCard ? 1.05 : isSecondCard ? 1.02 : 1})`,
                    transition: `all 0.5s cubic-bezier(0.4, 0, 0.2, 1)`
                  }}
                >
                  <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                    <Quote
                      className={`fill-current transition-all duration-500 ${isFirstCard
                        ? 'text-[var(--primary-brown)] scale-110'
                        : 'text-[var(--neutral-medium)] scale-100'
                        }`}
                      size={typeof window !== 'undefined' && window.innerWidth < 640 ? 24 : 30}
                    />
                    <div className="animate-fade-in-up">
                      <h4 className={`font-semibold font-['WorkSans'] text-sm sm:text-base md:text-xl transition-all duration-500 ${isFirstCard
                        ? 'text-[var(--primary-brown)]'
                        : 'text-[var(--primary-brown)]'
                        }`}>
                        {testimonial.name}
                      </h4>
                      <p className={`text-xs font-manrope font-semibold sm:text-sm transition-all duration-500 ${isFirstCard
                        ? 'text-black'
                        : 'text-black'
                        }`}>
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <p className={`text-xs sm:text-sm md:text-base font-manrope leading-relaxed transition-all duration-500 ${isFirstCard
                    ? 'text-[var(--dark-gray)]'
                    : 'text-[var(--dark-gray)]'
                    }`}>
                    {testimonial.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.6s ease-out;
        }

        .animate-fade-in-delay {
          animation: fadeIn 0.6s ease-out 0.2s both;
        }

        .animate-fade-in-delay-2 {
          animation: fadeIn 0.6s ease-out 0.4s both;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.5s ease-out;
        }

        /* Mobile-specific improvements */
        @media (max-width: 640px) {
          .testimonial-card {
            min-height: 200px;
          }
        }
      `}</style>
    </section>
  );
};

export default TestimonialCarousel;