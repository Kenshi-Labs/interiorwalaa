'use client'
import Image from 'next/image';
import React from 'react';

const GallerySection = () => {


  // Gallery images data
  const galleryImages = [
    // Row 1 - 3 images
    {
      id: 1,
      src: "https://interiorwalaa.smepulse.in/Frame%201321314801.png",
      alt: "Modern corridor with industrial design elements",
      category: "Commercial"
    },
    {
      id: 2,
      src: "https://interiorwalaa.smepulse.in/Frame%201321314801.png",
      alt: "Cozy cafe interior with warm lighting",
      category: "Hospitality"
    },
    {
      id: 3,
      src: "https://interiorwalaa.smepulse.in/Frame%201321314801.png",
      alt: "Minimalist dining room with wooden furniture",
      category: "Residential"
    },
    // Row 2 - 4 images
    {
      id: 4,
      src: "https://interiorwalaa.smepulse.in/Frame%201321314801.png",
      alt: "Bright workspace with modern furniture",
      category: "Office"
    },
    {
      id: 5,
      src: "https://interiorwalaa.smepulse.in/Frame%201321314801.png",
      alt: "Elegant living room with red accent wall",
      category: "Residential"
    },
    {
      id: 6,
      src: "https://interiorwalaa.smepulse.in/Frame%201321314801.png",
      alt: "Industrial style interior with exposed elements",
      category: "Commercial"
    },
    {
      id: 7,
      src: "https://interiorwalaa.smepulse.in/Frame%201321314801.png",
      alt: "Contemporary seating area with unique lighting",
      category: "Hospitality"
    },
    // Row 3 - 3 images
    {
      id: 8,
      src: "https://interiorwalaa.smepulse.in/Frame%201321314801.png",
      alt: "Modern dining space with sleek design",
      category: "Residential"
    },
    {
      id: 9,
      src: "https://interiorwalaa.smepulse.in/Frame%201321314801.png",
      alt: "Creative workspace with natural elements",
      category: "Office"
    },
    {
      id: 10,
      src: "https://interiorwalaa.smepulse.in/Frame%201321314801.png",
      alt: "Warm restaurant interior with rich colors",
      category: "Hospitality"
    }
  ];



  return (
    <>
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Projects
            </h2>
          
          </div>

          {/* Gallery Grid */}
          <div className="space-y-6">
            {/* Row 1 - 3 Columns (Centered) */}
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
                {galleryImages.slice(0, 3).map((image, index) => (
                  <div
                    key={image.id}
                    className="group relative overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    style={{
                      animationDelay: `${index * 0.1}s`
                    }}
         
                  >
                    <div className="aspect-[4/3] ">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        className="w-full xs:h-16 md:h-44 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                        width={100}
                        height={100}

                      />
                    </div>
                    
              
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2 - 4 Columns (Full Width) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {galleryImages.slice(3, 7).map((image, index) => (
                <div
                  key={image.id}
                  className="group relative overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  style={{
                    animationDelay: `${(index + 3) * 0.1}s`
                  }}
               
                >
                  <div className="xs:aspect-[4/3] ">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      className="w-full xs:h-16 md:h-44 lg:h-96  object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                      width={100}
                      height={100}
                    />
                  </div>
                  
           
                </div>
              ))}
            </div>

            {/* Row 3 - 3 Columns (Centered) */}
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
                {galleryImages.slice(7, 10).map((image, index) => (
                  <div
                    key={image.id}
                    className="group relative overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    style={{
                      animationDelay: `${(index + 7) * 0.1}s`
                    }}
                 
                  >
                    <div className="aspect-[4/3]">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        className="w-full xs:h-16 md:h-44 lg:h-96  object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                        width={100}
                        height={100}
                      />
                    </div>
                    
             
                  </div>
                ))}
              </div>
            </div>
          </div>

      
        </div>
      </section>

  
    </>
  );
};

export default GallerySection;