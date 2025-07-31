'use client'
import React, { JSX } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { projects } from "@/data/projects";

export const FooterSubsection = (): JSX.Element => {
  const router = useRouter();
  
  const services = [
    { name: "Cafe Interiors" },
    { name: "Pub Interiors" },
    { name: "Restaurant Interiors" },
    { name: "Hotel Interiors" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Blog", href: "/blogs" },
    { name: "Projects", href: "/our-projects" },
    { name: "Our Services", href: "/our-services" },
  ];

  const socialIcons = [
    {
      name: "Instagram",
      src: "https://interiorwalaa.smepulse.in/Instagram.svg",
      link: "https://www.instagram.com/interiorwalaa/"
    },
    {
      name: "Facebook",
      src: "https://interiorwalaa.smepulse.in/Facebook.svg",
      link: "https://www.facebook.com/rrenterprisejpnagar"
    },
    {
      name: "LinkedIn",
      src: "https://interiorwalaa.smepulse.in/LinkedIn%20-%20Negative.svg",
      link: "https://www.linkedin.com/company/interiorwalaa"
    },
    {
      name: "Twitter",
      src: "https://interiorwalaa.smepulse.in/Vector.svg",
      link: "https://x.com/Interiorwalaa"
    },
    {
      name: "YouTube",
      src: "https://interiorwalaa.smepulse.in/Youtube.svg",
      link: ""
    },
  ];

  // Use projects data for recent work images
  const recentWorkImages = projects.slice(0, 6).map((project) => ({
    name: project.title,
    src: project.image,
    slug: project.slug,
  }));

  // Handle navigation to project detail page
  const handleProjectClick = (slug: string) => {
    router.push(`/our-projects/${slug}`);
  };

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
            <p className="text-white/90 text-sm sm:text-base md:text-base lg:text-base leading-relaxed font-['WorkSans'] max-w-xl mx-auto md:mx-0 mb-6 md:mb-6 lg:mb-6">
              Interiorwalaa offers end to end interior design, fit-outs, and
              turnkey execution services pan India.
            </p>

            {/* Social Media Icons with enhanced mobile design */}
            <div className="flex items-center justify-center md:justify-start gap-4 sm:gap-4 md:gap-4 lg:gap-4 mb-6 md:mb-6 lg:mb-6">
              {socialIcons.map((icon, index) => (
                icon.link ? (
                  <Link
                    key={index}
                    href={icon.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group cursor-pointer transition-all duration-300 hover:scale-110 hover:opacity-80"
                    aria-label={icon.name}
                  >
                    <Image
                      width={24}
                      height={24}
                      className="w-6 h-6 opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                      alt={icon.name}
                      src={icon.src}
                    />
                  </Link>
                ) : (
                  <span
                    key={index}
                    className="group opacity-50 cursor-not-allowed"
                    aria-label={icon.name}
                  >
                    <Image
                      width={24}
                      height={24}
                      className="w-6 h-6"
                      alt={icon.name}
                      src={icon.src}
                    />
                  </span>
                )
              ))}
            </div>
          </div>

          {/* Services and Quick Links - Enhanced Mobile Layout */}
          <div className="flex flex-col order-2 md:order-2 lg:order-2">
            <div className="grid grid-cols-2 gap-8 md:gap-10 lg:gap-10">
              {/* Services */}
              <div className="flex-1">
                <h3 className="text-white text-lg sm:text-lg md:text-lg lg:text-lg font-['WorkSans'] font-semibold mb-4 sm:mb-4 md:mb-4 lg:mb-4 text-left">
                  Services
                </h3>
                <ul className="space-y-3 sm:space-y-3 md:space-y-3 lg:space-y-3">
                  {services.map((service, index) => (
                    <li
                      key={index}
                      className="text-white/80 text-sm sm:text-sm md:text-sm lg:text-sm font-['WorkSans'] font-normal text-left hover:text-white transition-colors duration-300 cursor-pointer"
                    >
                      {service.name}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Links */}
              <div className="flex-1">
                <h3 className="text-white text-lg sm:text-lg md:text-lg lg:text-lg font-['WorkSans'] font-semibold mb-4 sm:mb-4 md:mb-4 lg:mb-4 text-left">
                  Quick Links
                </h3>
                <ul className="space-y-3 sm:space-y-3 md:space-y-3 lg:space-y-3">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        key={index}
                        href={link.href}
                        className="text-white/80 text-sm sm:text-sm md:text-sm lg:text-sm font-['WorkSans'] font-normal text-left hover:text-white transition-colors duration-300 cursor-pointer"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Recent Work - Enhanced Mobile Grid */}
          <div className="flex flex-col order-3 md:order-3 lg:order-3 md:col-span-2 lg:col-span-1">
            <h3 className="text-white text-lg sm:text-lg md:text-lg lg:text-lg font-['WorkSans'] font-semibold mb-4 sm:mb-4 md:mb-4 lg:mb-4 text-center md:text-left">
              Recent Work
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-3 md:gap-3 lg:gap-5">
              {recentWorkImages.map((image, index) => (
                <div
                  key={index}
                  className="group cursor-pointer transition-all duration-300 hover:scale-105"
                  onClick={() => handleProjectClick(image.slug)}
                >
                  <Image
                    width={120}
                    height={120}
                    className="w-full h-20 sm:h-20 md:h-20 lg:h-20 object-cover rounded-lg sm:rounded-lg md:rounded-lg lg:rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300"
                    alt={image.name}
                    src={image.src}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Footer Bottom */}
        <div className="mt-8 sm:mt-8 md:mt-8 lg:mt-8 pt-6 sm:pt-6 md:pt-6 lg:pt-6 border-t border-white/20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-4 md:gap-4 lg:gap-4">
            <div className="text-white/70 text-sm sm:text-sm md:text-sm lg:text-sm font-['WorkSans'] text-center sm:text-left">
              Copyright @ 2025 | All rights reserved
            </div>
            <div className="text-white/70 text-sm sm:text-sm md:text-sm lg:text-sm font-['WorkSans'] text-center sm:text-right">
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
