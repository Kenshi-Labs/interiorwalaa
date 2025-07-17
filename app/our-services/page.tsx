import ContactSection from '@/components/contact'
import FAQSection from '@/components/FAQSection'
import InternalBanner from '@/components/internalbanner'
import ScrollWrapper from '@/components/scrollWrapper'
import ServicesPortfolio from '@/components/servicesPortfolio'
import WhatWeOffer from '@/components/whatweoffer'
import React from 'react'

const page = () => {
  return (
    <div>
       <InternalBanner
        title="Our Services"
        subtitle="Interiorwala stands at the forefront of commercial interior designers in Bangalore"
        backgroundImage="https://interiorwalaa.smepulse.in/warm%20tone%20interior%20design%20hall.png"
        gradientDirection="left"
      />
         <WhatWeOffer />
         <ScrollWrapper />
         <ServicesPortfolio />

         <FAQSection />
         <ContactSection />
    </div>
  )
}

export default page
