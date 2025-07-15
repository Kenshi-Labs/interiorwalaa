import React, { JSX } from "react";
import Image from "next/image";

export const FooterSubsection = (): JSX.Element => {
  const services = [
    { name: "Cafe Interiors" },
    { name: "Pub Interiors" },
    { name: "Restaurant Interiors" },
    { name: "Hotel Interiors" },
  ];

  const quickLinks = [
    { name: "Home" },
    { name: "About Us" },
    { name: "Blog" },
    { name: "Contact" },
  ];

  const socialIcons = [
    {
      name: "Instagram",
      src: "https://interiorwalaa.smepulse.in/Instagram.svg",
    },
    {
      name: "Facebook",
      src: "https://interiorwalaa.smepulse.in/Facebook.svg",
    },
    {
      name: "LinkedIn",
      src: "https://interiorwalaa.smepulse.in/LinkedIn%20-%20Negative.svg",
    },
    {
      name: "Twitter",
      src: "https://interiorwalaa.smepulse.in/Vector.svg",
    },
    {
      name: "YouTube",
      src: "https://interiorwalaa.smepulse.in/Youtube.svg",
    },
  ];

  const recentWorkImages = [
    { id: '1571460', alt: 'Modern living room with blue sofa' },
    { id: '2029667', alt: 'Light grey sofa in yellow room' },
    { id: '1080721', alt: 'Spacious modern living room' },
    { id: '2029722', alt: 'Brown textured armchair' },
    { id: '1571453', alt: 'Yellow sofa in industrial room' },
    { id: '2029719', alt: 'Minimalist white bedroom' },
  ];

  return (
    <footer className="w-full bg-black py-8 sm:py-10 md:py-12 lg:py-14 relative overflow-hidden">
      {/* Background Image with Enhanced Shadow Overlay */}
      <div className="absolute inset-0 hidden md:block">
        <Image
          src="https://interiorwalaa.smepulse.in/footerbg.jpg"
          alt="Footer background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Enhanced shadow overlay for better mobile visibility */}
        <div className="absolute inset-0 bg-black/80 shadow-2xl"></div>
      </div>

      <div className="container mx-auto px-6 sm:px-8 md:px-10 lg:px-12 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {/* Company Info - Enhanced Mobile Design */}
          <div className="flex flex-col order-1 text-center md:text-left">
            {/* Logo with better mobile sizing */}
            <div className="flex justify-center md:justify-start mb-6 md:mb-6 lg:mb-6">
              <div className="h-16 sm:h-18 md:h-20 lg:h-22 w-auto">
                <Image
                  width={333}
                  height={87}
                  className="w-full h-full object-contain"
                  alt="Interiorwalaa Logo"
                  src="https://interiorwalaa.smepulse.in/Logo.png"
                />
              </div>
            </div>

            {/* Enhanced description with better typography */}
            <p className="text-white/90 text-sm sm:text-base md:text-base lg:text-base leading-relaxed font-['Work_Sans'] max-w-xl mx-auto md:mx-0 mb-6 md:mb-6 lg:mb-6">
              Interiorwalaa offers end to end interior design, fit-outs, and
              turnkey execution services pan India.
            </p>

            {/* Social Media Icons with enhanced mobile design */}
            <div className="flex items-center justify-center md:justify-start gap-4 sm:gap-4 md:gap-4 lg:gap-4 mb-6 md:mb-6 lg:mb-6">
              {socialIcons.map((icon, index) => (
                <div
                  key={index}
                  className="group cursor-pointer transition-all duration-300 hover:scale-110 hover:opacity-80"
                >
                  <Image
                    width={24}
                    height={24}
                    className="w-6 h-6 sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-6 lg:h-6 opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    alt={icon.name}
                    src={icon.src}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Services and Quick Links - Enhanced Mobile Layout */}
          <div className="flex flex-col order-2 md:order-2 lg:order-2">
            <div className="grid grid-cols-2 gap-8 md:gap-10 lg:gap-10">
              {/* Services */}
              <div className="flex-1">
                <h3 className="text-white text-lg sm:text-lg md:text-lg lg:text-lg font-['Work_Sans'] font-semibold mb-4 sm:mb-4 md:mb-4 lg:mb-4 text-center md:text-left">
                  Services
                </h3>
                <ul className="space-y-3 sm:space-y-3 md:space-y-3 lg:space-y-3">
                  {services.map((service, index) => (
                    <li
                      key={index}
                      className="text-white/80 text-sm sm:text-sm md:text-sm lg:text-sm font-['Work_Sans'] font-normal text-center md:text-left hover:text-white transition-colors duration-300 cursor-pointer"
                    >
                      {service.name}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Links */}
              <div className="flex-1">
                <h3 className="text-white text-lg sm:text-lg md:text-lg lg:text-lg font-['Work_Sans'] font-semibold mb-4 sm:mb-4 md:mb-4 lg:mb-4 text-center md:text-left">
                  Quick Links
                </h3>
                <ul className="space-y-3 sm:space-y-3 md:space-y-3 lg:space-y-3">
                  {quickLinks.map((link, index) => (
                    <li
                      key={index}
                      className="text-white/80 text-sm sm:text-sm md:text-sm lg:text-sm font-['Work_Sans'] font-normal text-center md:text-left hover:text-white transition-colors duration-300 cursor-pointer"
                    >
                      {link.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Recent Work - Enhanced Mobile Grid */}
          <div className="flex flex-col order-3 md:order-3 lg:order-3 md:col-span-2 lg:col-span-1">
            <h3 className="text-white text-lg sm:text-lg md:text-lg lg:text-lg font-['Work_Sans'] font-semibold mb-4 sm:mb-4 md:mb-4 lg:mb-4 text-center md:text-left">
              Recent Work
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-3 md:gap-3 lg:gap-5">
              {recentWorkImages.map((image, index) => (
                <div
                  key={index}
                  className="group cursor-pointer transition-all duration-300 hover:scale-105"
                >
                  <Image
                    width={120}
                    height={120}
                    className="w-full h-20 sm:h-20 md:h-20 lg:h-20 object-cover rounded-lg sm:rounded-lg md:rounded-lg lg:rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300"
                    alt={image.alt}
                    src={`https://images.pexels.com/photos/${image.id}/pexels-photo-${image.id}.jpeg?auto=compress&cs=tinysrgb&w=320&h=276&dpr=2`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Footer Bottom */}
        <div className="mt-8 sm:mt-8 md:mt-8 lg:mt-8 pt-6 sm:pt-6 md:pt-6 lg:pt-6 border-t border-white/20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-4 md:gap-4 lg:gap-4">
            <div className="text-white/70 text-sm sm:text-sm md:text-sm lg:text-sm font-['Work_Sans'] text-center sm:text-left">
              Copyright @ 2025 | All rights reserved
            </div>
            <div className="text-white/70 text-sm sm:text-sm md:text-sm lg:text-sm font-['Work_Sans'] text-center sm:text-right">
              Created with love by{" "}
              <span className="font-semibold text-white hover:text-white/80 transition-colors duration-300 cursor-pointer">
                Kenshi Labs
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
