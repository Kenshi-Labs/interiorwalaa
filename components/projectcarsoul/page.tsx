'use client'
import React, { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';

// Product data structure
const products = [
  {
    id: 1,
    title: "Arm Sofas",
    price: "$45.80",
    image: "https://interiorwalaa.smepulse.in/Rectangle%20202.png",
    category: "seating"
  },
  {
    id: 2,
    title: "Living table",
    price: "$45.80",
    image: "https://interiorwalaa.smepulse.in/Rectangle%20202%20(1).png",
    category: "tables"
  },
  {
    id: 3,
    title: "Floor lamp",
    price: "$45.80",
    image: "https://interiorwalaa.smepulse.in/Rectangle%20202%20(3).png",
    category: "lighting"
  },
  {
    id: 4,
    title: "Dining Chair",
    price: "$35.90",
    image: "https://interiorwalaa.smepulse.in/Rectangle%20202.png",
    category: "seating"
  },
  {
    id: 5,
    title: "Side Table",
    price: "$28.50",
    image: "https://interiorwalaa.smepulse.in/Rectangle%20202%20(1).png",
    category: "tables"
  },
  {
    id: 6,
    title: "Arm Sofas",
    price: "$45.80",
    image: "https://interiorwalaa.smepulse.in/Rectangle%20202%20(3).png",
    category: "seating"
  },
  {
    id: 7,
    title: "Living table",
    price: "$45.80",
    image: "https://interiorwalaa.smepulse.in/Rectangle%20202.png",
    category: "tables"
  },
  {
    id: 8,
    title: "Floor lamp",
    price: "$45.80",
    image: "https://interiorwalaa.smepulse.in/Rectangle%20202%20(1).png",
    category: "lighting"
  },
  {
    id: 9,
    title: "Dining Chair",
    price: "$35.90",
    image: "https://interiorwalaa.smepulse.in/Rectangle%20202%20(3).png",
    category: "seating"
  },
  {
    id: 10,
    title: "Side Table",
    price: "$28.50",
    image: "https://interiorwalaa.smepulse.in/Rectangle%20202.png",
    category: "tables"
  }
];

const LatestProjectsSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  // Embla carousel configuration
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 3 }
    }
  });

  // Navigation handlers
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  // Update selected index and scroll snaps
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    onSelect();
    
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  // Check if navigation buttons should be disabled
  const canScrollPrev = emblaApi?.canScrollPrev() ?? false;
  const canScrollNext = emblaApi?.canScrollNext() ?? false;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 }
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.section
      className="w-full py-16 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="py-8 pl-4 sm:py-12 lg:py-16 sm:pl-8 lg:pl-10 xl:pl-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Content */}
          <motion.div className="space-y-6" variants={itemVariants}>
            {/* Header with count */}
            <div className="flex items-center justify-between">
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
                variants={itemVariants}
              >
                Latest Projects
              </motion.h2>
             
            </div>
            
            {/* Description */}
            <motion.p 
              className="text-gray-600 text-lg leading-relaxed max-w-md"
              variants={itemVariants}
            >
              We have designed and curated pieces that are a cut above your average home goods, 
              because when you level up your everyday objects, you elevate your daily rituals.
            </motion.p>
            
            {/* View All Button */}
            <motion.button
              className="group inline-flex items-center space-x-2 text-gray-900 font-bold text-sm tracking-wide uppercase border-b-2 border-gray-900 pb-1 hover:border-gray-600 transition-colors duration-200"
              variants={itemVariants}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              <span>VIEW ALL</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </motion.button>
          </motion.div>
          
          {/* Right Column - Product Carousel */}
          <motion.div className="relative" variants={itemVariants}>
            {/* Embla Carousel Container */}
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {products.map((product) => (
                  <motion.div
                    key={product.id}
                    className="flex-shrink-0 px-3 basis-full md:basis-1/2 lg:basis-[40%]"
                    variants={cardVariants}
                    whileHover="hover"
                    layout
                  >
                    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                      {/* Product Image */}
                      <div className="relative h-96 bg-gray-100 overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.title}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                          loading="lazy"
                          width={100}
                          height={100}
                        />
                        {/* Hover Overlay */}
                        {/* <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300" /> */}
                      </div>
                      
                      {/* Product Info */}
                      <div className="p-4 space-y-2 flex justify-between">
                        <h3 className="font-semibold text-gray-900 text-lg">
                          {product.title}
                        </h3>
                        <p className="text-gray-900 font-bold text-lg">
                          {product.price}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

         
            
            <div className="flex items-center justify-between mt-8">
              {/* Pagination Line */}
              <div className="flex-1 relative">
                {/* Background line */}
                <div className="w-full h-px bg-gray-300"></div>
                {/* Active line indicator */}
                <motion.div
                  className="absolute top-0 h-px bg-gray-900"
                  style={{
                    width: `${100 / scrollSnaps.length}%`,
                    left: `${(selectedIndex * 100) / scrollSnaps.length}%`
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
                {/* Invisible clickable areas */}
                {scrollSnaps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollTo(index)}
                    className="absolute top-0 h-4 -mt-2"
                    style={{
                      width: `${100 / scrollSnaps.length}%`,
                      left: `${(index * 100) / scrollSnaps.length}%`
                    }}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center space-x-3 ml-8">
                <motion.button
                  onClick={scrollPrev}
                  disabled={!canScrollPrev}
                  className="w-8 h-8 flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed transition-opacity duration-200"
                  whileHover={{ scale: canScrollPrev ? 1.1 : 1 }}
                  whileTap={{ scale: canScrollPrev ? 0.95 : 1 }}
                  aria-label="Previous products"
                >
                  <ChevronLeft className="w-4 h-4 text-gray-600" strokeWidth={1.5} />
                </motion.button>
                
                <motion.button
                  onClick={scrollNext}
                  disabled={!canScrollNext}
                  className="w-8 h-8 flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed transition-opacity duration-200"
                  whileHover={{ scale: canScrollNext ? 1.1 : 1 }}
                  whileTap={{ scale: canScrollNext ? 0.95 : 1 }}
                  aria-label="Next products"
                >
                  <ChevronRight className="w-4 h-4 text-gray-600" strokeWidth={1.5} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default LatestProjectsSection;