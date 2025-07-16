import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

const allaboutimg1 = "https://interiorwalaa.smepulse.in/allaboutimg1.png"
const allaboutimg2 = "https://interiorwalaa.smepulse.in/allaboutimg2.png"
const allaboutimg3 = "https://interiorwalaa.smepulse.in/allaboutimg3.png"

interface AllAboutProps {
  layout?: 'image-left' | 'image-right'
  title?: string
  subtitle?: string
  description?: string[]
  buttonText?: string
  images?: {
    img1?: string
    img2?: string
    img3?: string
  }
  stats?: {
    number: string
    label: string[]
  }
}

const ImageSection = ({ images, stats }: { images: AllAboutProps['images'], stats: AllAboutProps['stats'] }) => (
  <div className='relative w-full max-w-lg lg:max-w-xl'>
    {/* Top Image */}
    <div className='relative mb-3 sm:mb-4 flex justify-center'>
      <Image
        width={500}
        height={500}
        src={images?.img1 || allaboutimg1}
        alt="Interior design showcase"
        className='w-full max-w-[400px] sm:max-w-[500px] h-24 sm:h-32 lg:h-36 object-cover rounded-lg sm:rounded-xl'
      />
    </div>

    {/* Second Image */}
    <div className='relative mb-4 sm:mb-6 flex justify-center'>
      <Image
        width={500}
        height={500}
        src={images?.img2 || allaboutimg2}
        alt="Interior design showcase"
        className='w-full max-w-[400px] sm:max-w-[500px] h-48 sm:h-60 lg:h-72 object-cover rounded-lg sm:rounded-xl'
      />
    </div>

    {/* Third Image with Overlay */}
    <div className='relative -mt-[120px] sm:-mt-[150px] lg:-mt-[180px] flex justify-start'>
      <Image
        width={500}
        height={500}
        src={images?.img3 || allaboutimg3}
        alt="Interior design showcase"
        className='w-[140px] sm:w-[180px] lg:w-[215px] h-32 sm:h-44 lg:h-52 object-cover rounded-lg sm:rounded-xl'
      />
      
      {/* Stats Overlay */}
      {stats && (
        <div className='absolute bottom-2 sm:bottom-4 right-[180px] sm:right-[180px] lg:right-[260px] bg-[var(--color-primary)] text-white px-3 sm:px-4 lg:px-6 py-1 sm:py-2 rounded-md sm:rounded-lg flex flex-col items-center justify-center'>
          <div className='text-xl sm:text-2xl lg:text-3xl font-bold'>{stats.number}</div>
          {stats.label.map((line, index) => (
            <div key={index} className='text-xs sm:text-sm text-center'>{line}</div>
          ))}
        </div>
      )}
    </div>
  </div>
)

const TextSection = ({ title, subtitle, description, buttonText }: { 
  title?: string, 
  subtitle?: string, 
  description?: string[], 
  buttonText?: string 
}) => (
  <div className='w-full space-y-4 sm:space-y-6 flex flex-col items-center lg:items-start justify-center'>
    <div className='space-y-2 text-center lg:text-left'>
      <h2 className='text-xl sm:text-xl lg:text-3xl font-medium text-[var(--color-text-primary)] font-work-sans'>
        {title || 'All About'}
      </h2>
      <h1 className='text-3xl sm:text-4xl lg:text-5xl font-semibold text-[var(--color-primary)] font-work-sans leading-[110%] sm:leading-[100%]'>
        {subtitle}
      </h1>
    </div>

    <div className='space-y-3 sm:space-y-4 max-w-[600px] text-center lg:text-left'>
      {(description || [
        'Interiorwalaa stands at the forefront of commercial interior designers in Bangalore. With six years of industry leadership and more than 50 spaces transformed nationwide, we excel in designing interiors that resonate with quality and distinction.',
        'Our experienced team is well-versed in creating dynamic environments for cafes, pubs, restaurants, and hotels, each designed to enhance functionality and style.'
      ]).map((paragraph, index) => (
        <p key={index} className='text-base sm:text-lg lg:text-xl font-normal text-[var(--color-text-primary)] font-manrope leading-[150%]'>
          {paragraph}
        </p>
      ))}
    </div>

    <Button
      variant="interior"
      className="w-full sm:w-auto"
    >
      {buttonText || 'Get In Touch'}
    </Button>
  </div>
)

const AllAbout: React.FC<AllAboutProps> = ({ 
  layout = 'image-left',
  title,
  subtitle,
  description,
  buttonText,
  images,
  stats = { number: '150+', label: ['Successful', 'Projects'] }
}) => {
  const imageSection = (
    <div className={`w-full lg:w-1/2 relative flex justify-center ${layout === 'image-left' ? 'lg:justify-end order-2 lg:order-1' : 'lg:justify-start order-2 lg:order-2'}`}>
      <ImageSection images={images} stats={stats} />
    </div>
  )

  const textSection = (
    <div className={`${layout === 'image-left' ? 'order-1 lg:order-2' : 'order-1 lg:order-1'}`}>
      <TextSection 
        title={title}
        subtitle={subtitle}
        description={description}
        buttonText={buttonText}
      />
    </div>
  )

  return (
    <div className='bg-[var(--color-neutral-light)] py-8 sm:py-12 lg:py-16'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 items-center justify-center'>
          {layout === 'image-left' ? (
            <>
              {imageSection}
              {textSection}
            </>
          ) : (
            <>
              {textSection}
              {imageSection}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default AllAbout