'use client'
import React, { useState } from 'react';
import { ArrowRight, MoveUpRightIcon } from 'lucide-react';
import Image from 'next/image';

type TabKey = 'cafe' | 'pub' | 'restaurant' | 'hotel';

const ServicesPortfolio = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('cafe');

  const tabs: { id: TabKey; label: string }[] = [
    { id: 'cafe', label: 'Cafe Interiors' },
    { id: 'pub', label: 'Pub Interiors' },
    { id: 'restaurant', label: 'Restaurant Interiors' },
    { id: 'hotel', label: 'Hotel Interiors' }
  ];

  const portfolioData: Record<TabKey, { id: number; title: string; image: string; description: string; }[]> = {
    cafe: [
      {
        id: 1,
        title: "Belgian Waffle Factory",
        image: "https://interiorwalaa.smepulse.in/serviceimg1.jpg",
        description: "Modern cafe design with warm ambiance"
      },
      {
        id: 2,
        title: "Wow Momo",
        image: "https://interiorwalaa.smepulse.in/serviceimg2.jpg",
        description: "Contemporary momo cafe with vibrant interiors"
      },
      {
        id: 3,
        title: "Eleven Bakehouse",
        image: "https://interiorwalaa.smepulse.in/serviceimg3.jpg",
        description: "Artisanal bakehouse with rustic charm"
      }
    ],
    pub: [
      {
        id: 4,
        title: "The Urban Tap",
        image: "https://interiorwalaa.smepulse.in/serviceimg1.jpg",
        description: "Industrial pub design with exposed brick"
      },
      {
        id: 5,
        title: "Brewmaster's Den",
        image: "https://interiorwalaa.smepulse.in/serviceimg2.jpg",
        description: "Traditional pub with modern touches"
      },
      {
        id: 6,
        title: "Craft & Draft",
        image: "https://interiorwalaa.smepulse.in/serviceimg3.jpg",
        description: "Craft beer pub with wooden aesthetics"
      }
    ],
    restaurant: [
      {
        id: 7,
        title: "Spice Garden",
        image: "https://interiorwalaa.smepulse.in/serviceimg1.jpg",
        description: "Fine dining with elegant ambiance"
      },
      {
        id: 8,
        title: "Ocean's Table",
        image: "https://interiorwalaa.smepulse.in/serviceimg2.jpg",
        description: "Seafood restaurant with coastal vibes"
      },
      {
        id: 9,
        title: "Metro Bistro",
        image: "https://interiorwalaa.smepulse.in/serviceimg3.jpg",
        description: "Urban bistro with contemporary design"
      }
    ],
    hotel: [
      {
        id: 10,
        title: "Grand Plaza Lobby",
        image: "https://interiorwalaa.smepulse.in/serviceimg1.jpg",
        description: "Luxury hotel lobby with marble finishes"
      },
      {
        id: 11,
        title: "Boutique Suites",
        image: "https://interiorwalaa.smepulse.in/serviceimg2.jpg",
        description: "Boutique hotel with personalized comfort"
      },
      {
        id: 12,
        title: "Resort Paradise",
        image: "https://interiorwalaa.smepulse.in/serviceimg3.jpg",
        description: "Tropical resort with natural elements"
      }
    ]
  };

  const currentProjects = portfolioData[activeTab];

  return (
    <section className="py-16 lg:py-24 bg-[var(--bg-primary)] relative overflow-hidden">

      <div className="container mx-auto max-w-[1400px] px-6 relative z-10">
        {/* Header Section */}
        <div className="grid grid-cols-2 justify-betweens items-center mb-8 ">
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-work-sans text-gray-900 leading-tight">
            <span className="text-[var(--primary-brown)] font-semibold">Services</span>
            <br />
            <span className="text-text-primary font-normal">that we offer</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            We are <span className="font-semibold font-manrope text-[var(--primary-brown)]">INTERIORWALAA</span>, emphasizing professionalism and expertise in commercial interior design
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="mb-12 w-full">
          <div className="flex flex-wrap justify-center gap-3 p-3 bg-white/70 backdrop-blur-sm rounded-full shadow-lg w-full border border-[var(--primary-brown)]">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  px-8 py-2 rounded-full cursor-pointer font-medium text-sm md:text-base bg-[var(--bg-secondary)]
                  transition-all duration-300 ease-out whitespace-nowrap flex-1 min-w-0
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
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-full items-stretch">
          {/* First Project - Wider (takes 2 columns) */}
          <div
            className="group lg:col-span-2 md:col-span-2 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-2 overflow-hidden flex flex-col"
            style={{ animationDelay: '0ms' }}
          >
            {/* Image Container */}
            <div className="relative overflow-hidden flex-1">
              <Image
                src={currentProjects[0].image}
                alt={currentProjects[0].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                width={100}
                height={100}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

              {/* View Full Icon */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-white backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer">
                <MoveUpRightIcon className="w-4 h-4 text-black" />
              </div>

              {/* Content at Bottom */}
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white text-2xl md:text-3xl font-bold mb-3 leading-tight">
                  {currentProjects[0].title}
                </h3>
                <button className="inline-flex items-center text-white/90 hover:text-white font-medium transition-colors duration-200 group/link">
                  <span>See this Project</span>
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-200 group-hover/link:translate-x-1" />
                </button>
              </div>
            </div>
          </div>

          {/* Second Project - Standard width (1 column) */}
          <div
            className="group lg:col-span-1 md:col-span-1 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-2 overflow-hidden flex flex-col"
            style={{ animationDelay: '100ms' }}
          >
            {/* Image Container */}
            <div className="relative overflow-hidden flex-1">
              <Image
                src={currentProjects[1].image}
                alt={currentProjects[1].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                width={100}
                height={100}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

              {/* View Full Icon */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-white backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer">
                <MoveUpRightIcon className="w-4 h-4 text-black" />
              </div>

              {/* Content at Bottom */}
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white text-lg md:text-xl font-bold mb-2 leading-tight">
                  {currentProjects[1].title}
                </h3>
                <button className="inline-flex items-center text-white/90 hover:text-white font-medium text-sm transition-colors duration-200 group/link">
                  <span>See this Project</span>
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover/link:translate-x-1" />
                </button>
              </div>
            </div>
          </div>

          {/* Third Project - Standard width (1 column) */}
          <div
            className="group lg:col-span-1 md:col-span-1 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-2 overflow-hidden flex flex-col"
            style={{ animationDelay: '200ms' }}
          >
            {/* Image Container */}
            <div className="relative overflow-hidden flex-1">
              <Image
                src={currentProjects[2].image}
                alt={currentProjects[2].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                width={100}
                height={100}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

              {/* View Full Icon */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-white backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer">
                <MoveUpRightIcon className="w-4 h-4 text-black" />
              </div>

              {/* Content at Bottom */}
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white text-lg md:text-xl font-bold mb-2 leading-tight">
                  {currentProjects[2].title}
                </h3>
                <button className="inline-flex items-center text-white/90 hover:text-white font-medium text-sm transition-colors duration-200 group/link">
                  <span>See this Project</span>
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover/link:translate-x-1" />
                </button>
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