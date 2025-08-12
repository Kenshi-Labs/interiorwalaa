'use client'
import React, { useState } from 'react';
import { MoveUpRightIcon, MoveRightIcon } from 'lucide-react';
import Image from 'next/image';
import { servicesData, TabKey } from '../../data/service';
import Link from 'next/link';

const ServicesPortfolio = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('cafe');

  const { tabs, portfolioData } = servicesData;
  const currentProjects = portfolioData[activeTab];

  return (
    <section className="py-8 sm:py-12 md:py-12 lg:py-16 bg-[var(--bg-primary)] relative overflow-hidden">
      <div className="container mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start lg:items-center mb-8 lg:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-['WorkSans'] text-gray-900 leading-tight">
            <span className="text-[var(--primary-brown)] font-bold">Services</span>
            <br />
            <span className="text-black font-medium">that we offer</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
            We are <span className="font-semibold font-manrope text-[var(--primary-brown)]">INTERIORWALAA</span>, emphasizing professionalism and expertise in commercial interior design
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="mb-8 lg:mb-12 w-full">
          <div className="flex flex-wrap sm:flex-nowrap justify-start sm:justify-center gap-2 sm:gap-3 p-2 sm:p-3 bg-white/70 backdrop-blur-sm rounded-2xl sm:rounded-full shadow-lg w-full border border-[var(--primary-brown)] overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-full cursor-pointer font-medium text-xs sm:text-sm md:text-base bg-[var(--bg-secondary)]
                  transition-all duration-300 ease-out whitespace-nowrap flex-shrink-0 lg:flex-1
                  ${activeTab === tab.id
                    ? 'bg-[var(--primary-brown)] text-white shadow-lg'
                    : 'text-[var(--primary-brown)] hover:text-white hover:bg-[var(--primary-brown)]'
                  }
                `}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-full items-stretch">
          {/* First Project - Wider on larger screens */}
          <div
            className="group sm:col-span-2 lg:col-span-2 bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-out overflow-hidden flex flex-col min-h-[300px] sm:min-h-[350px] lg:min-h-[400px]"
            style={{ animationDelay: '0ms' }}
          >
            {/* Image Container */}
            <div className="relative overflow-hidden flex-1">
              <Image
                src={currentProjects[0].image}
                alt={currentProjects[0].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                width={600}
                height={400}
                priority
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

              {/* View Full Icon */}
              <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 bg-white backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer">
                <MoveUpRightIcon className="w-3 h-3 sm:w-4 sm:h-4 text-black" />
              </div>

              {/* Content at Bottom */}
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                <h3 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 leading-tight">
                  {currentProjects[0].title}
                </h3>
                <Link href={`/our-projects`} className="inline-flex items-center text-white/90 hover:text-white font-medium text-sm sm:text-base transition-colors duration-200 group/link">
                  <span>See this Project</span>
                  <MoveRightIcon className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transition-transform duration-200 group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* Second Project */}
          <div
            className="group bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-out overflow-hidden flex flex-col min-h-[250px] sm:min-h-[300px] lg:min-h-[350px]"
            style={{ animationDelay: '100ms' }}
          >
            {/* Image Container */}
            <div className="relative overflow-hidden flex-1">
              <Image
                src={currentProjects[1].image}
                alt={currentProjects[1].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                width={400}
                height={300}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

              {/* View Full Icon */}
              <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 bg-white backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer">
                <MoveUpRightIcon className="w-3 h-3 sm:w-4 sm:h-4 text-black" />
              </div>

              {/* Content at Bottom */}
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                <h3 className="text-white text-base sm:text-lg md:text-xl font-bold mb-2 leading-tight">
                  {currentProjects[1].title}
                </h3>
                <Link href={`/our-projects`} className="inline-flex items-center text-white/90 hover:text-white font-medium text-xs sm:text-sm transition-colors duration-200 group/link">
                  <span>See this Project</span>
                  <MoveRightIcon className="w-3 h-3 sm:w-4 sm:h-4 ml-2 transition-transform duration-200 group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* Third Project */}
          <div
            className="group bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-out overflow-hidden flex flex-col min-h-[250px] sm:min-h-[300px] lg:min-h-[350px]"
            style={{ animationDelay: '200ms' }}
          >
            {/* Image Container */}
            <div className="relative overflow-hidden flex-1">
              <Image
                src={currentProjects[2].image}
                alt={currentProjects[2].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                width={400}
                height={300}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

              {/* View Full Icon */}
              <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 bg-white backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer">
                <MoveUpRightIcon className="w-3 h-3 sm:w-4 sm:h-4 text-black" />
              </div>

              {/* Content at Bottom */}
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                <h3 className="text-white text-base sm:text-lg md:text-xl font-bold mb-2 leading-tight">
                  {currentProjects[2].title}
                </h3>
                <Link href={`/our-projects`} className="inline-flex items-center text-white/90 hover:text-white font-medium text-xs sm:text-sm transition-colors duration-200 group/link">
                  <span>See this Project</span>
                  <MoveRightIcon className="w-3 h-3 sm:w-4 sm:h-4 ml-2 transition-transform duration-200 group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
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
        
        .group {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default ServicesPortfolio;