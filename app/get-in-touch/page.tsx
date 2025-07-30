import ContactSection from '@/components/contact'
import InternalBanner from '@/components/internalbanner'
import React from 'react'

const page = () => {
  return (
    <div>
           <InternalBanner
        title="Get in Touch"
        subtitle="Interiorwala stands at the forefront of commercial interior designers in Bangalore"
        backgroundImage="https://interiorwalaa.smepulse.in/Rectangle%2034626854.png"
        gradientDirection="left"
      />
         <ContactSection />
    </div>
  )
}

export default page
