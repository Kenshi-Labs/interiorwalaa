
import InternalBanner from '@/components/internalbanner'
import ScrollWrapper from '@/components/scrollWrapper'
import ServiceContact from '@/components/ServiceContact'
import Serviceplanning from '@/components/Serviceplanning'
import ServicesPortfolio from '@/components/servicesPortfolio'
import React from 'react'

const page = () => {
  return (
    <div>
      <InternalBanner
        title="Our Services"
        subtitle="Interiorwala stands at the forefront of commercial interior designers in Bangalore"
        backgroundImages={[
          "https://interiorwalaa.smepulse.in/bannercarouselimg1.png",
          "https://interiorwalaa.smepulse.in/bannercarouselimg2.png",
          "https://interiorwalaa.smepulse.in/bannercarouselimg3.png"
        ]}
        autoSlideInterval={4000} />
      <Serviceplanning />
      <ScrollWrapper />
      <ServicesPortfolio />
      <ServiceContact />
    </div>
  )
}

export default page
