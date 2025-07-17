'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const HappyHomesSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.3
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.2 }
    }
  };

  return (
    <motion.section
      className="relative w-full h-screen overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0"
        variants={overlayVariants}
      >
        <Image
         src="https://interiorwalaa.smepulse.in/living-room-with-couch-painting-wall%201.png"
         alt="Cozy living room with warm orange lighting, comfortable sofa, and modern decor"
         className="w-full h-full object-cover"
         fill
         priority
        />
        {/* Warm overlay to enhance the cozy atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/20 via-transparent to-orange-800/10" />
      </motion.div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-end justify-end">
        <div className="container mx-auto px-4 sm:px-8 lg:px-16 flex justify-end">
          <div className="max-w-2xl">
            {/* Main Heading */}
            <motion.div variants={textVariants} className='animate-slide-up-1'>
              <motion.h1 
                className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-8"
                variants={textVariants}
              >
                Happy homes
               
              </motion.h1>
            </motion.div>
      
      

        
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-1/2 right-10 transform -translate-y-1/2 hidden lg:block"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <div className="w-1 h-20 bg-white/30 rounded-full" />
      </motion.div>
    </motion.section>
  );
};

export default HappyHomesSection;