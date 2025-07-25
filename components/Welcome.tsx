import React from 'react'
import Image from 'next/image'

interface ContentCard {
  title: string
  description: string
}

interface WelcomeSectionProps {
  backgroundImage: string
  mainTitle: string
  mainDescription: string
  cards: ContentCard[]
  className?: string
}

const ContentCard = ({ title, description }: ContentCard) => (
  <div className='bg-white/95 max-w-2xl backdrop-blur-sm rounded-br-2xl rounded-tr-2xl p-4 sm:p-5 lg:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300'>
    <h3 className='text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 font-work-sans'>
      {title}
    </h3>
    <p className='text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed font-manrope'>
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
    <section className={`py-12 sm:py-16 lg:py-20 ${className}`}>
      <div className=' '>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start'>
          
          {/* Left Column - Main Content (Clean Background) */}
          <div className='bg-white lg:pl-32 md:pl-12 pl-0 mx-5'>
              <h1 className='text-2xl sm:text-3xl md:text-start text-center text-nowrap lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 font-work-sans leading-tight'>
              {mainTitle}
            </h1>
            <p className='text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed font-manrope md:text-start text-center text-wrap'>
              {mainDescription}
            </p>
          </div>

          {/* Right Column - Content Cards with Background */}
          <div className='relative'>
            {/* Background Image for Cards Section Only */}
            <div className='absolute inset-0 z-0 rounded-bl-2xl rounded-tl-2xl overflow-hidden'>
              <Image
                src={backgroundImage}
                alt="Interior design background"
                fill
                className='object-cover'
                priority
              />
              {/* Overlay for better card readability */}
              <div className='absolute inset-0 bg-black/20' />
            </div>
            
            {/* Cards Container */}
            <div className='relative z-10 py-6 sm:py-8 pr-6 sm:pr-8 space-y-4 sm:space-y-6'>
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
