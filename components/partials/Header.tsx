'use client'
import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const menuItems = [
  { label: "Home", isActive: true, href: "/" },
  { label: "About Us", isActive: false, href: "/about-us" },
  { label: "Our Services", isActive: false, href: "/our-services" },
  { label: "Projects", isActive: false, href: "/projects" },
  { label: "Career", isActive: false, href: "/career" },
  { label: "Blog", isActive: false, href: "/blog" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (
        isMobileMenuOpen &&
        target &&
        !target.closest('.mobile-menu-container')
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <div className="sticky top-0 left-0 right-0 z-50 w-full">
        {/* Sticky Navigation Bar */}
        <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 pt-3 sm:pt-4">
          <div className={`w-full h-[56px] sm:h-[64px] md:h-[72px] mx-auto rounded-[32px] sm:rounded-[40px] flex items-center justify-between px-4 sm:px-6 container transition-all duration-300 ${isScrolled
            ? 'bg-white/90 backdrop-blur-md shadow-sm'
            : 'bg-white'
            }`}>

            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  width={188}
                  height={49}
                  className="w-[120px] h-[31px] sm:w-[140px] sm:h-[36px] md:w-[160px] md:h-[42px] lg:w-[188px] lg:h-[49px]"
                  alt="Interiorwalaa Logo"
                  src="https://interiorwalaa.smepulse.in/Logo.png"
                />
              </Link>
            </div>

            {/* Right side container with navigation and buttons */}
            <div className="flex items-center gap-6 sm:gap-8 md:gap-10 lg:gap-14">
              {/* Desktop Navigation - Right side */}
              <nav className="hidden lg:flex items-center gap-8">
                {menuItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className={`${item.isActive
                      ? "font-bold text-[#8f5e3d]"
                      : "font-normal text-gray-700"
                      } font-manrope text-base whitespace-nowrap hover:text-[#8f5e3d] transition-colors duration-200`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* Tablet Navigation - Visible on md screens */}
              <nav className="hidden md:flex lg:hidden items-center gap-4">
                {menuItems.slice(0, 3).map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className={`${item.isActive
                      ? "font-medium text-[#8f5e3d]"
                      : "font-normal text-gray-700"
                      } font-manrope text-sm whitespace-nowrap hover:text-[#8f5e3d] transition-colors duration-200`}
                  >
                    {item.label}
                  </Link>
                ))}
                {/* More dropdown for tablet */}
                <div className="relative group">
                  <button className="font-normal text-gray-700 font-manrope text-sm hover:text-[#8f5e3d] transition-colors duration-200 px-2 py-1">
                    More
                  </button>
                  <div className="absolute top-full right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {menuItems.slice(3).map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="block px-3 py-2 text-sm text-gray-700 hover:text-[#8f5e3d] hover:bg-gray-50 transition-colors duration-200"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </nav>

              {/* Get In Touch Button - Hidden on mobile, visible on tablet+ */}
              <Button
                variant="interior"
                className="hidden md:flex"
              >
                Get In Touch
              </Button>

              {/* Mobile menu button */}
              <Button
                className="md:hidden p-2 bg-transparent border-none hover:bg-gray-100 mobile-menu-container rounded-full"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X size={18} className="text-gray-700" />
                ) : (
                  <Menu size={18} className="text-gray-700" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          <div className="absolute top-[72px] sm:top-[80px] left-3 right-3 sm:left-4 sm:right-4 bg-white rounded-2xl shadow-2xl mobile-menu-container max-h-[calc(100vh-100px)] overflow-y-auto">
            <nav className="p-4 sm:p-6">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={`block py-3 sm:py-4 px-2 border-b border-gray-100 last:border-b-0 ${item.isActive
                    ? "font-medium text-[#8f5e3d]"
                    : "font-normal text-gray-700"
                    } font-manrope text-base sm:text-lg hover:text-[#8f5e3d] transition-colors duration-200`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile Get In Touch Button */}
              <div className="mt-4 sm:mt-6 pt-4 border-t border-gray-100">
                <Button
                  variant="interior"
                  className="w-full h-11 sm:h-12"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get In Touch
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};