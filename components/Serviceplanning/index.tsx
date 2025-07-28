import Image from 'next/image'
import React from 'react'
import { servicePlanningData } from '../../data/ourservicedata'

const Serviceplanning = () => {
  return (
    <div className="w-full md:my-10 my-4 px-4 sm:px-6 lg:px-0">
      <div className="flex flex-col gap-8 sm:gap-12 lg:gap-16 xl:gap-20 justify-start items-center w-full">
        {servicePlanningData.map((item, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div
              key={item.title}
              className={`flex flex-col lg:flex-row justify-start items-center w-full gap-4 lg:gap-0`}
            >
              {/* Image Section */}
              {isEven ? (
                <div className="w-full lg:w-[45%] xl:w-[42%] flex lg:justify-start">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={622}
                    height={344}
                    className="shadow-[0_8px_32px_0_rgba(143,94,61,0.25),0_1.5px_8px_0_rgba(32,31,29,0.10)] w-full h-48 sm:h-64 md:h-72 lg:h-80 xl:h-[344px] object-cover rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-none border-r-8 border-[#201f1d] lg:border-r-8 lg:border-l-0"
                    style={{ borderRightWidth: '8px', borderLeftWidth: 0, borderColor: '#9b7961', borderTopLeftRadius: 0, borderBottomLeftRadius: 0, borderTopRightRadius: '24px', borderBottomRightRadius: '24px' }}
                  />
                </div>
              ) : null}

              {/* Content Section */}
              <div
                className={`relative flex flex-col gap-2 sm:gap-3 justify-start items-start w-full lg:flex-1 p-4 sm:p-6 lg:py-8 lg:px-8 xl:py-6 xl:px-28 ${isEven ? '' : 'order-2 lg:order-1'} ${isEven ? 'lg:items-end' : 'lg:items-start'} group overflow-hidden`}
              >
                {/* Hover Background Effect */}
                <div
                  className={`absolute top-0 bottom-0 h-full w-[90%] max-w-[740px] bg-primary-brown transition-all duration-700 ease-out ${isEven
                    ? 'right-0 transform translate-x-full group-hover:translate-x-0 rounded-l-3xl'
                    : 'left-0 transform -translate-x-full group-hover:translate-x-0 rounded-r-3xl'
                    }`}
                />


                <h2 className={`relative z-10 text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-['WorkSans'] font-semibold leading-tight ${isEven ? 'text-left lg:text-right' : 'text-left'} text-[#201f1d] group-hover:text-white transition-colors duration-500`}>
                  {item.title}
                </h2>
                <p className={`relative z-10 text-sm sm:text-base lg:text-lg font-manrope font-normal leading-relaxed ${isEven ? 'text-left lg:text-right' : 'text-left'} text-[#000000] group-hover:text-white transition-colors duration-500 max-w-none lg:max-w-[70%]`}>
                  {item.description}
                </p>
              </div>

              {/* Image Section for odd index */}
              {!isEven ? (
                <div className="w-full lg:w-[45%] xl:w-[42%] flex lg:justify-end order-1 lg:order-2">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={622}
                    height={344}
                    className="shadow-[0_8px_32px_0_rgba(143,94,61,0.25),0_1.5px_8px_0_rgba(32,31,29,0.10)] w-full h-48 sm:h-64 md:h-72 lg:h-80 xl:h-[344px] object-cover rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-none border-l-8 border-[#201f1d] lg:border-l-8 lg:border-r-0"
                    style={{ borderLeftWidth: '8px', borderRightWidth: 0, borderColor: '#9b7961', borderTopRightRadius: 0, borderBottomRightRadius: 0, borderTopLeftRadius: '24px', borderBottomLeftRadius: '24px' }}
                  />
                </div>
              ) : null}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Serviceplanning