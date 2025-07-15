'use client'
import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { Menu, X } from 'lucide-react';

const menuItems = [
  { label: "Home", isActive: true },
  { label: "About Us", isActive: false },
  { label: "Our Services", isActive: false },
  { label: "Projects", isActive: false },
  { label: "Career", isActive: false },
  { label: "Blog", isActive: false },
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
        <div className="w-full px-2 sm:px-4 pt-2 sm:pt-3.5">
          <div className={`w-full max-w-[1348px] h-[56px] sm:h-[63px] mx-auto rounded-[40px] sm:rounded-[83.3px] flex items-center justify-between px-3 sm:px-4 md:px-7 transition-all duration-300 ${
            isScrolled 
              ? 'bg-[#ffffff33] border-[0.83px] border-solid border-[#ffffff40] backdrop-blur-[11.08px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(11.08px)_brightness(100%)]'
              : 'bg-transparent border-none'
          }`}>
            
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                className="w-[100px] h-[26px] sm:w-[120px] sm:h-[31px] md:w-[150px] md:h-[39px] lg:w-[188px] lg:h-[49px]"
                alt="Interiorwalaa Logo"
                src="https://interiorwalaa.smepulse.in/Logo.png"
              />
            </div>
            
            {/* Desktop Navigation - Hidden on mobile/tablet */}
            <nav className="hidden xl:flex items-center gap-6 2xl:gap-[87px]">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className={`${
                    item.isActive
                      ? "font-bold text-[#20a7df]"
                      : "font-normal text-black"
                  } [font-family:'Manrope',Helvetica] text-sm 2xl:text-base whitespace-nowrap hover:text-[#20a7df] transition-colors duration-200`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Tablet Navigation - Visible on lg screens */}
            <nav className="hidden lg:flex xl:hidden items-center gap-4">
              {menuItems.slice(0, 4).map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className={`${
                    item.isActive
                      ? "font-bold text-[#20a7df]"
                      : "font-normal text-black"
                  } [font-family:'Manrope',Helvetica] text-sm whitespace-nowrap hover:text-[#20a7df] transition-colors duration-200`}
                >
                  {item.label}
                </a>
              ))}
              {/* More dropdown for tablet */}
              <div className="relative group">
                <button className="font-normal text-black [font-family:'Manrope',Helvetica] text-sm hover:text-[#20a7df] transition-colors duration-200">
                  More
                </button>
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {menuItems.slice(4).map((item, index) => (
                    <a
                      key={index}
                      href="#"
                      className="block px-4 py-2 text-sm text-black hover:text-[#20a7df] hover:bg-gray-50 transition-colors duration-200"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </nav>
            
            {/* Right side container */}
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Get In Touch Button - Hidden on mobile, visible on tablet+ */}
              <button className="hidden md:flex items-center justify-center w-[90px] lg:w-[100px] xl:w-[123px] h-7 sm:h-8 xl:h-10 rounded-[30px] sm:rounded-[38.89px] border border-solid border-[#20a7df] bg-transparent hover:bg-[#20a7df] hover:text-white transition-all duration-200 group">
                <span className="[font-family:'Manrope',Helvetica] font-normal text-[#20a7df] text-xs lg:text-sm text-center tracking-[0] leading-[12.7px] whitespace-nowrap group-hover:text-white">
                  Get In Touch
                </span>
              </button>

              {/* Mobile menu button */}
              <Button 
                className="lg:hidden p-2 bg-transparent border-none hover:bg-[#20a7df]/10 mobile-menu-container"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X size={20} className="text-[#20a7df]" />
                ) : (
                  <Menu size={20} className="text-[#20a7df]" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          <div className="absolute top-[70px] sm:top-[80px] left-2 right-2 sm:left-4 sm:right-4 bg-white rounded-2xl shadow-2xl mobile-menu-container">
            <nav className="p-4 sm:p-6">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className={`block py-3 sm:py-4 px-2 border-b border-gray-100 last:border-b-0 ${
                    item.isActive
                      ? "font-bold text-[#20a7df]"
                      : "font-normal text-black"
                  } [font-family:'Manrope',Helvetica] text-base sm:text-lg hover:text-[#20a7df] transition-colors duration-200`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              
              {/* Mobile Get In Touch Button */}
              <div className="mt-6 pt-4 border-t border-gray-100">
                <button 
                  className="w-full flex items-center justify-center h-12 rounded-full border border-solid border-[#20a7df] bg-transparent hover:bg-[#20a7df] hover:text-white transition-all duration-200 group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="[font-family:'Manrope',Helvetica] font-normal text-[#20a7df] text-base text-center group-hover:text-white">
                    Get In Touch
                  </span>
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}


    </>
  );
};