'use client'
import React, { useState } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';

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
        image: "https://interiorwalaa.smepulse.in/Rectangle%203859.png",
        description: "Modern cafe design with warm ambiance"
      },
      {
        id: 2,
        title: "Wow Momo",
        image: "https://interiorwalaa.smepulse.in/Rectangle%203860.png",
        description: "Contemporary momo cafe with vibrant interiors"
      },
      {
        id: 3,
        title: "Eleven Bakehouse",
        image: "https://interiorwalaa.smepulse.in/Rectangle%203861.png",
        description: "Artisanal bakehouse with rustic charm"
      }
    ],
    pub: [
      {
        id: 4,
        title: "The Urban Tap",
        image: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=600&h=400&fit=crop",
        description: "Industrial pub design with exposed brick"
      },
      {
        id: 5,
        title: "Brewmaster's Den",
        image: "https://interiorwalaa.smepulse.in/generate%20a%20realistic%203D%20image%20for%20a%20interior%20designing%20website's%20banner%20section.png",
        description: "Traditional pub with modern touches"
      },
      {
        id: 6,
        title: "Craft & Draft",
        image: "https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?w=600&h=400&fit=crop",
        description: "Craft beer pub with wooden aesthetics"
      }
    ],
    restaurant: [
      {
        id: 7,
        title: "Spice Garden",
        image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&h=400&fit=crop",
        description: "Fine dining with elegant ambiance"
      },
      {
        id: 8,
        title: "Ocean's Table",
        image: "https://interiorwalaa.smepulse.in/generate%20a%20realistic%203D%20image%20for%20a%20interior%20designing%20website's%20banner%20section.png",
        description: "Seafood restaurant with coastal vibes"
      },
      {
        id: 9,
        title: "Metro Bistro",
        image: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?w=600&h=400&fit=crop",
        description: "Urban bistro with contemporary design"
      }
    ],
    hotel: [
      {
        id: 10,
        title: "Grand Plaza Lobby",
        image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&h=400&fit=crop",
        description: "Luxury hotel lobby with marble finishes"
      },
      {
        id: 11,
        title: "Boutique Suites",
        image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&h=400&fit=crop",
        description: "Boutique hotel with personalized comfort"
      },
      {
        id: 12,
        title: "Resort Paradise",
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop",
        description: "Tropical resort with natural elements"
      }
    ]
  };

  const currentProjects = portfolioData[activeTab];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-amber-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-amber-100/50 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-orange-100/30 to-transparent rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="grid grid-cols-2 justify-betweens items-center mb-16 ">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="text-amber-700">Services</span>
            <br />
            that we offer
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            We are <span className="font-semibold text-amber-700">INTERIORWALAA</span>, emphasizing professionalism and expertise in commercial interior design
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="mb-12 mx-auto">
          <div className="grid grid-cols-4 gap-2 p-2 bg-white/70 backdrop-blur-sm rounded-full shadow-lg max-w-full">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  px-6 py-3 rounded-full font-medium text-sm md:text-base
                  transition-all duration-300 ease-out
                  ${activeTab === tab.id
                    ? 'bg-amber-700 text-white shadow-lg transform scale-105'
                    : 'text-gray-600 hover:text-amber-700 hover:bg-amber-50'
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
              <img
                src={currentProjects[0].image}
                alt={currentProjects[0].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              
              {/* View Full Icon */}
              <div className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-80 hover:opacity-100 transition-all duration-300 cursor-pointer">
                <ExternalLink className="w-6 h-6 text-white" />
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
              <img
                src={currentProjects[1].image}
                alt={currentProjects[1].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              
              {/* View Full Icon */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-80 hover:opacity-100 transition-all duration-300 cursor-pointer">
                <ExternalLink className="w-5 h-5 text-white" />
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
              <img
                src={currentProjects[2].image}
                alt={currentProjects[2].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              
              {/* View Full Icon */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-80 hover:opacity-100 transition-all duration-300 cursor-pointer">
                <ExternalLink className="w-5 h-5 text-white" />
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