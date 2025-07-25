import Image from 'next/image'
import React from 'react'

const OurGallery = () => {
  return (
    <div>
        <section className="w-full bg-[#ffffff] pt-[36px] sm:pt-[54px] md:pt-[63px] lg:pt-[72px] pb-[36px] sm:pb-[54px] md:pb-[63px] lg:pb-[72px] -mt-[4px] sm:mt-[-6px] md:mt-[-7px] lg:mt-[-8px]">
          <div className="w-full max-w-[1354px] mx-auto px-4 sm:px-6 md:px-8 ">
            <div className="flex flex-col gap-[8px] sm:gap-[12px] md:gap-[14px] lg:gap-[16px] justify-start items-center w-full mt-[2px] sm:mt-[3px] md:mt-[3px] lg:mt-[4px]">
              {/* Gallery Header */}
              <div className="flex flex-col gap-[2px] sm:gap-[3px] md:gap-[3px] lg:gap-[4px] justify-start items-center">
                <p className="text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] font-work-sans  font-semibold leading-[14px] sm:leading-[15px] md:leading-[16px] lg:leading-[18px] text-center text-[#616161]">
                  Our Recent Projects
                </p>
                <h2 className="text-[15px] sm:text-[22px] md:text-[26px] lg:text-[30px] font-work-sans font-bold leading-[18px] sm:leading-[27px] md:leading-[31px] lg:leading-[36px] text-center text-[#8F5E3D]">
                  #OurGallery
                </h2>
              </div>
              {/* Gallery Grid */}
              <div className="flex flex-col lg:flex-row gap-[6px] sm:gap-[9px] md:gap-[10px] lg:gap-[12px] justify-start items-start w-full">
                {/* Left Column */}
                <div className="flex flex-col gap-[6px] sm:gap-[9px] md:gap-[10px] lg:gap-[12px] justify-start items-center w-full lg:w-[41%]">
                  {/* Top Row */}
                  <div className="flex flex-row gap-[6px] sm:gap-[9px] md:gap-[10px] lg:gap-[12px] justify-start items-center w-full">
                    <div className="relative w-[38%]">
                      <div className="w-full h-[143px] sm:h-[214px] md:h-[250px] lg:h-[286px] bg-[#c4c4c4]"></div>
                      <Image
                        src="https://interiorwalaa.smepulse.in/Rectangle%2036.png"
                        alt="Gallery Image 1"
                        width={204}
                        height={286}
                        className="absolute inset-0 w-full h-[143px] sm:h-[214px] md:h-[250px] lg:h-[286px] object-cover"
                      />
                    </div>
                    <Image
                      src="https://interiorwalaa.smepulse.in/Rectangle%2037.png"
                      alt="Gallery Image 2"
                      width={338}
                      height={234}
                      className="w-[62%] h-[117px] sm:h-[175px] md:h-[204px] lg:h-[234px] object-cover self-end"
                    />
                  </div>
                  {/* Bottom Row */}
                  <div className="flex flex-row gap-[6px] sm:gap-[9px] md:gap-[10px] lg:gap-[12px] justify-center items-start">
                    <Image
                      src="https://interiorwalaa.smepulse.in/Rectangle%2038.png"
                      alt="Gallery Image 3"
                      width={284}
                      height={242}
                      className="w-[52%] h-[121px] sm:h-[181px] md:h-[211px] lg:h-[242px] object-cover self-center"
                    />
                    <Image
                      src="https://interiorwalaa.smepulse.in/Rectangle%2039.png"
                      alt="Gallery Image 4"
                      width={258}
                      height={180}
                      className="w-[46%] h-[90px] sm:h-[135px] md:h-[157px] lg:h-[180px] object-cover"
                    />
                  </div>
                </div>
                {/* Center Image */}
                <Image
                  src="https://interiorwalaa.smepulse.in/Rectangle%2040.png"
                  alt="Gallery Image 5"
                  width={220}
                  height={294}
                  className="w-full lg:w-[16%] h-[147px] sm:h-[220px] md:h-[257px] lg:h-[294px] object-cover mt-[12px] sm:mt-[87px] md:mt-[101px] lg:mt-[116px]"
                />
                {/* Right Column */}
                <div className="flex flex-col gap-[6px] sm:gap-[9px] md:gap-[10px] lg:gap-[12px] justify-start items-center w-full lg:w-[40%] self-center mt-[5px] sm:mt-[7px] md:mt-[8px] lg:mt-[10px]">
                  {/* Top Row */}
                  <div className="flex flex-row gap-[6px] sm:gap-[9px] md:gap-[10px] lg:gap-[12px] justify-center items-center w-full">
                    <Image
                      src="https://interiorwalaa.smepulse.in/Rectangle%2043.png"
                      alt="Gallery Image 6"
                      width={216}
                      height={260}
                      className="w-[40%] h-[130px] sm:h-[195px] md:h-[227px] lg:h-[260px] object-cover self-end"
                    />
                    <Image
                      src="https://interiorwalaa.smepulse.in/Rectangle%2041.png"
                      alt="Gallery Image 7"
                      width={318}
                      height={324}
                      className="w-[58%] h-[162px] sm:h-[243px] md:h-[283px] lg:h-[324px] object-cover"
                    />
                  </div>
                  {/* Bottom Row */}
                  <div className="flex flex-row gap-[6px] sm:gap-[9px] md:gap-[10px] lg:gap-[12px] justify-center items-start">
                    <Image
                      src="https://interiorwalaa.smepulse.in/Rectangle%2044.png"
                      alt="Gallery Image 8"
                      width={132}
                      height={180}
                      className="w-[24%] h-[90px] sm:h-[135px] md:h-[157px] lg:h-[180px] object-cover"
                    />
                    <Image
                      src="https://interiorwalaa.smepulse.in/Rectangle%2046.png"
                      alt="Gallery Image 9"
                      width={192}
                      height={146}
                      className="w-[36%] h-[73px] sm:h-[109px] md:h-[127px] lg:h-[146px] object-cover"
                    />
                    <Image
                      src="https://interiorwalaa.smepulse.in/Rectangle%2045.png"
                      alt="Gallery Image 10"
                      width={196}
                      height={234}
                      className="w-[38%] h-[117px] sm:h-[175px] md:h-[204px] lg:h-[234px] object-cover self-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default OurGallery
