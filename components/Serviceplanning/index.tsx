import Image from 'next/image'
import React from 'react'

interface ServiceItem {
  image: string
  title: string
  description: string
  alt: string
}

const Serviceplanning = () => {
  const services: ServiceItem[] = [
    {
      image: "https://interiorwalaa.smepulse.in/Rectangle%2034626853.png",
      title: "Interior Planning",
      description: "Our experienced team is well-versed in creating dynamic environments for cafes, pubs, restaurants, and hotels, each designed to enhance functionality and style.",
      alt: "Interior Planning"
    },
    {
      image: "https://interiorwalaa.smepulse.in/Rectangle%2034626854.png",
      title: "Architecture",
      description: "Our experienced team is well-versed in creating dynamic environments for cafes, pubs, restaurants, and hotels, each designed to enhance functionality and style.",
      alt: "Architecture"
    },
    {
      image: "https://interiorwalaa.smepulse.in/Rectangle%2034626856.png",
      title: "Exterior",
      description: "Our experienced team is well-versed in creating dynamic environments for cafes, pubs, restaurants, and hotels, each designed to enhance functionality and style.",
      alt: "Exterior"
    }
  ]

  return (
    <div className="w-full md:my-10 my-4">
      <div className="flex flex-col gap-8 sm:gap-12 lg:gap-16 xl:gap-20 justify-start items-center w-full">
        
        {/* Interior Planning Section */}
        <div className="flex flex-col lg:flex-row justify-start items-center w-full gap-4 lg:gap-0">
          <div className="w-full lg:w-[45%] xl:w-[42%]">
            <Image
              src={services[0].image}
              alt={services[0].alt}
              width={622}
              height={344}
              className="w-full h-48 sm:h-64 md:h-72 lg:h-80 xl:h-[344px] object-cover rounded-tr-2xl rounded-bl-2xl lg:rounded-tr-3xl lg:rounded-bl-3xl"
            />
          </div>
          <div className="flex flex-col gap-2 sm:gap-3 justify-start items-start lg:items-end w-full lg:flex-1 p-4 sm:p-6 lg:py-8 lg:px-8 xl:py-10 xl:px-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-work-sans font-semibold leading-tight text-left lg:text-right text-[#201f1d]">
              {services[0].title}
            </h2>
            <p className="text-sm sm:text-base lg:text-lg font-manrope font-normal leading-relaxed text-left lg:text-right text-[#000000] max-w-none lg:max-w-[70%]">
              {services[0].description}
            </p>
          </div>
        </div>

        {/* Architecture Section */}
        <div className="flex flex-col lg:flex-row justify-start items-center w-full gap-4 lg:gap-0">
          <div className="flex flex-col gap-2 sm:gap-3 justify-start items-start w-full lg:flex-1 p-4 sm:p-6 lg:py-8 lg:px-8 xl:py-10 xl:px-12 order-2 lg:order-1">
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-work-sans font-semibold leading-tight text-left text-[#201f1d]">
              {services[1].title}
            </h2>
            <p className="text-sm sm:text-base lg:text-lg font-manrope font-normal leading-relaxed text-left text-[#000000] max-w-none lg:max-w-[70%]">
              {services[1].description}
            </p>
          </div>
          <div className="w-full lg:w-[45%] xl:w-[42%] order-1 lg:order-2">
            <Image
              src={services[1].image}
              alt={services[1].alt}
              width={622}
              height={344}
              className="w-full h-48 sm:h-64 md:h-72 lg:h-80 xl:h-[344px] object-cover rounded-tl-2xl rounded-br-2xl lg:rounded-tl-3xl lg:rounded-br-3xl"
            />
          </div>
        </div>

        {/* Exterior Section */}
        <div className="flex flex-col lg:flex-row justify-start items-center w-full gap-4 lg:gap-0">
          <div className="w-full lg:w-[45%] xl:w-[42%]">
            <Image
              src={services[2].image}
              alt={services[2].alt}
              width={622}
              height={344}
              className="w-full h-48 sm:h-64 md:h-72 lg:h-80 xl:h-[344px] object-cover rounded-tr-2xl rounded-bl-2xl lg:rounded-tr-3xl lg:rounded-bl-3xl"
            />
          </div>
          <div className="flex flex-col gap-2 sm:gap-3 justify-start items-start lg:items-end w-full lg:flex-1 p-4 sm:p-6 lg:py-8 lg:px-8 xl:py-10 xl:px-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-work-sans font-semibold leading-tight text-left lg:text-right text-[#201f1d]">
              {services[2].title}
            </h2>
            <p className="text-sm sm:text-base lg:text-lg font-manrope font-normal leading-relaxed text-left lg:text-right text-[#000000] max-w-none lg:max-w-[70%]">
              {services[2].description}
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Serviceplanning