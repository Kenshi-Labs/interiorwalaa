import React from 'react'
import Image from 'next/image'
import type { ContentCard } from '@/data/aboutuswelcome'
import { Button } from './ui/button'

interface WelcomeSectionProps {
  backgroundImage: string
  mainTitle: string
  mainDescription: string
  cards: ContentCard[]
  className?: string
}

const ContentCard = ({ title, description }: ContentCard) => (
  <div className='bg-white max-w-xl backdrop-blur-sm rounded-br-4xl rounded-tr-4xl p-4 sm:p-5 lg:px-6 lg:py-4 transition-all duration-300 hover:bg-[var(--primary-brown)] hover:shadow-xl cursor-pointer group'>
    <h3 className='text-base sm:text-lg lg:text-2xl mb-3 sm:mb-2 font-work-sans transition-colors duration-300'>
      <span className='text-black font-medium group-hover:text-white'>{title.split(' ')[0]}</span>
      <span className='text-[var(--primary-brown)] font-extrabold group-hover:text-white'> {title.split(' ').slice(1).join(' ')}</span>
    </h3>
    <p className='text-xs sm:text-sm lg:text-sm text-gray-700 leading-relaxed font-manrope transition-colors duration-300 group-hover:text-white'>
      {description}
    </p>
  </div>
)

const WelcomeSection: React.FC<WelcomeSectionProps> = ({
  backgroundImage,
  mainTitle,
  mainDescription,
  cards,
  className = ''
}) => {
  return (
    <section className={`${className}`}>
      <div className=''>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-stretch min-h-[600px]'>

          {/* Left Column - Main Content (Clean Background) */}
          <div className='bg-white lg:pl-32 md:pl-12 pl-0 mx-5 flex flex-col justify-center py-12 sm:py-16 lg:py-20'>
            <h1 className='text-xl sm:text-2xl md:text-start text-center lg:text-3xl xl:text-4xl font-bold text-black mb-4 sm:mb-4 font-work-sans leading-tight'>
              {mainTitle}
            </h1>
            <p className='text-sm sm:text-base lg:text-base text-gray-700 leading-relaxed font-manrope font-medium md:text-start text-left text-pretty break-words hyphens-auto mb-8 whitespace-pre-line'>
              {mainDescription}
            </p>
            {/* Get In Touch Button */}
            <Button
              variant="interior"
              className="w-fit md:self-start self-center"
            >
              Get In Touch
            </Button>
          </div>

          {/* Right Column - Content Cards with Background */}
          <div className='relative h-full min-h-[500px]'>
            {/* Background Image for Cards Section Only */}
            <div className='absolute inset-0 z-0 overflow-hidden h-full'>
              <Image
                src={backgroundImage}
                alt="Interior design background"
                fill
                className='object-cover'
                priority
              />
              {/* Gradient Overlay for better visual appeal */}
              <div className='absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/10' />
              {/* Additional overlay for better card readability */}
              <div className='absolute inset-0 bg-black/20' />
            </div>

            {/* Cards Container */}
            <div className='relative z-10 py-6 sm:py-8 pr-6 sm:pr-8 space-y-4 sm:space-y-10 h-full flex flex-col justify-center'>
              {cards.map((card, index) => (
                <ContentCard
                  key={index}
                  title={card.title}
                  description={card.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WelcomeSection
