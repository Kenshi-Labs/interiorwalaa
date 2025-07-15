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
    <footer className="w-full bg-black py-6 md:py-8 lg:py-10 relative">
      {/* Background Image with Shadow Overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://interiorwalaa.smepulse.in/footerbg.jpg"
          alt="Footer background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Shadow overlay on top of background image */}
        <div className="absolute inset-0 bg-[#1A1A1A]/80 shadow-2xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Company Info - Left Column */}
          <div className="flex flex-col">
            <div className="h-[60px] md:h-[70px] lg:h-[87px] mb-4 md:mb-6 lg:mb-7">
              {/* Logo */}
              <Image
                width={250}
                height={87}
                className="w-[250px] md:w-[300px] lg:w-[333px] h-full object-cover"
                alt="Interiorwalaa Logo"
                src="https://interiorwalaa.smepulse.in/Logo.png"
              />
            </div>
            <p className="text-white text-sm leading-relaxed font-['Work_Sans'] max-w-xl mb-6">
              Interiorwalaa offers end to end interior design, fit-outs, and
              turnkey execution services pan India.
            </p>
            {/* Social Media Icons */}
            <div className="flex items-center gap-4 mb-4">
              {socialIcons.map((icon, index) => (
                <Image
                  width={20}
                  height={20}
                  key={index}
                  className="w-5 h-5"
                  alt={icon.name}
                  src={icon.src}
                />
              ))}
            </div>
          </div>

          {/* Services and Quick Links - Center Column */}
          <div className="flex flex-col">
            <div className="flex gap-8 md:gap-12">
              {/* Services */}
              <div className="flex-1">
                <h3 className="text-white text-base font-['Work_Sans'] font-semibold mb-4">
                  Services
                </h3>
                <ul className="space-y-3">
                  {services.map((service, index) => (
                    <li
                      key={index}
                      className="text-white text-sm font-['Work_Sans'] font-normal text-left"
                    >
                      {service.name}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Links */}
              <div className="flex-1">
                <h3 className="text-white text-base font-['Work_Sans'] font-semibold mb-4">
                  Quick Links
                </h3>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <li
                      key={index}
                      className="text-white text-sm font-['Work_Sans'] font-normal text-left"
                    >
                      {link.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Recent Work - Right Column */}
          <div className="flex flex-col">
            <h3 className="text-white text-base font-['Work_Sans'] font-semibold mb-4">
              Recent Work
            </h3>
            <div className="grid grid-cols-3 gap-6">
              {recentWorkImages.map((image, index) => (
                <Image
                  width={20}
                  height={20}
                  key={index}
                  className="w-full h-24 object-cover rounded-xl"
                  alt={image.alt}
                  src={`https://images.pexels.com/photos/${image.id}/pexels-photo-${image.id}.jpeg?auto=compress&cs=tinysrgb&w=320&h=276&dpr=2`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom with Border */}
        <div className="mt-6 pt-4 border-t border-[#4E4C51] border-opacity-100">
          <div className="flex justify-between items-center">
            <div className="text-white text-xs font-['Work_Sans']">
              Copyright @ 2025 | All rights reserved
            </div>
            <div className="text-white text-xs font-['Work_Sans']">
              Created with love by{" "}
              <span className="font-semibold">Kenshi Labs</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
