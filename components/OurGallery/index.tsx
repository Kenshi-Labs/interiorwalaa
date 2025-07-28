import Image from 'next/image'
import React from 'react'
import { galleryLayout } from '../../data/ourgallery'

const OurGallery = () => {
  return (
    <div>
      <section className="w-full bg-[#ffffff] pt-[36px] sm:pt-[54px] md:pt-[63px] lg:pt-[72px] pb-[36px] sm:pb-[54px] md:pb-[63px] lg:pb-[72px] -mt-[4px] sm:mt-[-6px] md:mt-[-7px] lg:mt-[-8px]">
        <div className="w-full max-w-[1450px] mx-auto px-4 sm:px-6 md:px-8 ">
          <div className="flex flex-col gap-[8px] sm:gap-[12px] md:gap-[14px] lg:gap-[16px] justify-start items-center w-full mt-[2px] sm:mt-[3px] md:mt-[3px] lg:mt-[4px]">
            {/* Gallery Header */}
            <div className="flex flex-col gap-[2px] sm:gap-[3px] md:gap-[3px] lg:gap-[4px] justify-start items-center">
              <p className="text-[12px] sm:text-[13px] md:text-[14px] lg:text-[14px] font-['WorkSans']  font-semibold leading-[14px] sm:leading-[15px] md:leading-[16px] lg:leading-[18px] text-center text-[#616161]">
                Our Recent Projects
              </p>
              <h2 className="text-[15px] sm:text-[22px] md:text-[26px] lg:text-[30px] font-['WorkSans'] font-semibold leading-[18px] sm:leading-[27px] md:leading-[31px] lg:leading-[36px] text-center text-primary-brown">
                #OurGallery
              </h2>
            </div>
            {/* Gallery Grid */}
            <div className="flex flex-col lg:flex-row gap-[6px] sm:gap-[9px] md:gap-[10px] lg:gap-[12px] justify-start items-start w-full">
              {/* Left Column */}
              <div className="flex flex-col gap-[6px] sm:gap-[9px] md:gap-[10px] lg:gap-[12px] justify-start items-center w-full lg:w-[41%]">
                {/* Top and Bottom Rows */}
                {galleryLayout.left.map((row, rowIdx) => (
                  <div
                    key={rowIdx}
                    className={rowIdx === 0 ? 'flex flex-row gap-[6px] sm:gap-[9px] md:gap-[10px] lg:gap-[12px] justify-start items-center w-full' : 'flex flex-row gap-[6px] sm:gap-[9px] md:gap-[10px] lg:gap-[12px] justify-center items-start'}
                  >
                    {row.map((img, imgIdx) =>
                      img.wrapperClassName ? (
                        <div key={imgIdx} className={img.wrapperClassName}>
                          {img.isBackground && (
                            <div className="w-full h-[143px] sm:h-[214px] md:h-[250px] lg:h-[286px] bg-[#c4c4c4]"></div>
                          )}
                          <Image
                            src={img.src}
                            alt={img.alt}
                            width={img.width}
                            height={img.height}
                            className={img.className}
                          />
                        </div>
                      ) : (
                        <Image
                          key={imgIdx}
                          src={img.src}
                          alt={img.alt}
                          width={img.width}
                          height={img.height}
                          className={img.className}
                        />
                      )
                    )}
                  </div>
                ))}
              </div>
              {/* Center Image */}
              {galleryLayout.center.map((img, idx) => (
                <Image
                  key={idx}
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  className={img.className}
                />
              ))}
              {/* Right Column */}
              <div className="flex flex-col gap-[6px] sm:gap-[9px] md:gap-[10px] lg:gap-[12px] justify-start items-center w-full lg:w-[40%] self-center mt-[5px] sm:mt-[7px] md:mt-[8px] lg:mt-[10px]">
                {/* Top and Bottom Rows */}
                {galleryLayout.right.map((row, rowIdx) => (
                  <div
                    key={rowIdx}
                    className={rowIdx === 0 ? 'flex flex-row gap-[6px] sm:gap-[9px] md:gap-[10px] lg:gap-[12px] justify-center items-center w-full' : 'flex flex-row gap-[6px] sm:gap-[9px] md:gap-[10px] lg:gap-[12px] justify-center items-start'}
                  >
                    {row.map((img, imgIdx) => (
                      <Image
                        key={imgIdx}
                        src={img.src}
                        alt={img.alt}
                        width={img.width}
                        height={img.height}
                        className={img.className}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OurGallery
