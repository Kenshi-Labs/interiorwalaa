import React, { JSX } from "react";



export const FooterSubsection = (): JSX.Element => {
  const services = [
    { name: "Cafe Interiors", width: "w-[97px]" },
    { name: "Pub Interiors", width: "w-28" },
    { name: "Restaurant Interiors", width: "w-[153px]" },
    { name: "Hotel Interiors", width: "w-[111px]" },
  ];

  const quickLinks = [
    { name: "Home", width: "w-[70px]" },
    { name: "About Us", width: "w-[70px]" },
    { name: "Blog", width: "w-[98px]" },
    { name: "Contact", width: "w-[62px]" },
  ];

  const socialIcons = [
    {
      name: "Instagram",
      src: "https://interiorwalaa.smepulse.in/Instagram.svg",
      width: "w-3",
      height: "h-[12.09px]",
    },
    {
      name: "Facebook",
      src: "https://interiorwalaa.smepulse.in/Facebook.svg",
      width: "w-[15px]",
      height: "h-[15.11px]",
    },
    {
      name: "Linkedin negative",
      src: "https://interiorwalaa.smepulse.in/LinkedIn%20-%20Negative.svg",
      width: "w-[13.55px]",
      height: "h-[13.55px]",
    },
    {
      name: "Vector",
      src: "https://interiorwalaa.smepulse.in/Vector.svg",
      width: "w-[12.35px]",
      height: "h-[9.27px]",
    },
    {
      name: "Youtube",
      src: "https://interiorwalaa.smepulse.in/Youtube.svg",
      width: "w-[14.25px]",
      height: "h-[10.05px]",
    },
  ];

  const recentWorkImages = [
    { row: "top-[38px]", col: "left-0" },
    { row: "top-[129px]", col: "left-0" },
    { row: "top-[38px]", col: "left-[106px]" },
    { row: "top-[129px]", col: "left-[106px]" },
    { row: "top-[38px]", col: "left-[213px]" },
    { row: "top-[129px]", col: "left-[213px]" },
  ];

  return (
    <footer className="w-full bg-black py-8 md:py-10 lg:py-12 relative">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8">
          {/* Company Info */}
          <div className="md:col-span-2 lg:col-span-4">
            <div className="h-[60px] md:h-[70px] lg:h-[87px] mb-4 md:mb-6 lg:mb-7">
              {/* Logo would go here */}
              <img
                className="w-[250px] md:w-[300px] lg:w-[333px] h-full object-cover"
                alt="Interiorwalaa Logo"
               src="https://interiorwalaa.smepulse.in/Logo.png"
              />
            </div>
            <p className="text-white text-sm md:text-base lg:text-[15.1px] leading-relaxed md:leading-[22.6px] font-['Work_Sans',Helvetica] max-w-[411px]">
              Interiorwalaa offers end to end interior design, fit-outs, and
              turnkey execution services pan India.
            </p>
          </div>

          {/* Services */}
          <div className="lg:col-span-2 lg:ml-8">
            <h3 className="text-white text-sm md:text-base lg:text-[15.1px] font-['Work_Sans',Helvetica] font-semibold mb-6 md:mb-8 lg:mb-[38px]">
              Services
            </h3>
            <ul className="space-y-4 md:space-y-6 lg:space-y-[30px]">
              {services.map((service, index) => (
                <li
                  key={index}
                  className="text-white text-xs md:text-sm lg:text-[13.5px] leading-tight md:leading-[15.1px] font-['Work_Sans',Helvetica] font-normal"
                >
                  {service.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-white text-sm md:text-base lg:text-[15.1px] font-['Work_Sans',Helvetica] font-semibold mb-6 md:mb-8 lg:mb-[38px] whitespace-nowrap">
              Quick Links
            </h3>
            <ul className="space-y-4 md:space-y-6 lg:space-y-[30px]">
              {quickLinks.map((link, index) => (
                <li
                  key={index}
                  className="text-white text-xs md:text-sm lg:text-[13.5px] leading-tight md:leading-[15.1px] font-['Work_Sans',Helvetica] font-normal"
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Work */}
          <div className="md:col-span-2 lg:col-span-4">
            <h3 className="text-white text-sm md:text-base lg:text-[15.1px] font-['Work_Sans',Helvetica] font-semibold mb-6 md:mb-8 lg:mb-[38px] ml-1">
              Recent Work
            </h3>
            {/* Mobile/Tablet Grid */}
            <div className="grid grid-cols-3 gap-2 md:gap-3 lg:hidden">
              {recentWorkImages.map((position, index) => (
                <img
                  key={index}
                  className="w-full h-16 md:h-20 object-cover rounded"
                  alt={`Recent work thumbnail ${index + 1}`}
                 src={`https://images.pexels.com/photos/${[
                   '1571460', '2029667', '1080721', '2029722', '1571453', '2029719'
                 ][index]}/pexels-photo-${[
                   '1571460', '2029667', '1080721', '2029722', '1571453', '2029719'
                 ][index]}.jpeg?auto=compress&cs=tinysrgb&w=320&h=276&dpr=2`}
                />
              ))}
            </div>
            {/* Desktop Layout */}
            <div className="relative w-[295px] h-[198px] hidden lg:block">
              {recentWorkImages.map((position, index) => (
                <img
                  key={index}
                  className={`absolute w-20 h-[69px] ${position.row} ${position.col}`}
                  alt={`Recent work thumbnail ${index + 1}`}
                 src={`https://images.pexels.com/photos/${[
                   '1571460', '2029667', '1080721', '2029722', '1571453', '2029719'
                 ][index]}/pexels-photo-${[
                   '1571460', '2029667', '1080721', '2029722', '1571453', '2029719'
                 ][index]}.jpeg?auto=compress&cs=tinysrgb&w=320&h=276&dpr=2`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 md:mt-12 lg:mt-16 relative">
          <div className="flex items-center justify-center md:justify-start gap-4 md:gap-6 lg:gap-[30.11px] mb-8 md:mb-12 lg:mb-16">
            {socialIcons.map((icon, index) => (
              <img
                key={index}
                className="w-4 h-4 md:w-5 md:h-5 lg:w-auto lg:h-auto"
                alt={icon.name}
                src={icon.src}
              />
            ))}
          </div>

    

          <div className="flex flex-col md:flex-row justify-between items-center mt-4 md:mt-5 gap-4 md:gap-0">
            <div className="text-white text-xs md:text-sm lg:text-[13.5px] leading-tight md:leading-[15.1px] font-['Work_Sans',Helvetica] font-normal text-center md:text-left">
              Copyright @ 2025 | All rights reserved
            </div>
            <div className="text-white text-xs md:text-sm lg:text-[13.5px] leading-tight md:leading-[15.1px] font-['Work_Sans',Helvetica] font-normal text-center md:text-right">
              Created with love by{" "}
              <span className="font-semibold">Kenshi Labs</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
