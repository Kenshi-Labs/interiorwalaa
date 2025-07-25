
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
        backgroundImage="https://interiorwalaa.smepulse.in/Rectangle%2034626854.png"
        gradientDirection="left"
      />
      <Serviceplanning />
      <ScrollWrapper />
      <ServicesPortfolio />
      <ServiceContact />
    </div>
  )
}

export default page
