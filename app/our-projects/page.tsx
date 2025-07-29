import ContactSection from '@/components/contact'
import GallerySection from '@/components/gallerySection/page'
import InternalBanner from '@/components/internalbanner'
import LatestProjectsSection from '@/components/projectcarsoul/page'
import HappyHomesSection from '@/components/projectsBanner/page'

import React from 'react'

const page = () => {
  return (
    <div>
      <InternalBanner
        title="Our Projects"
        subtitle="Interiorwala stands at the forefront of commercial interior designers in Bangalore"
        backgroundImage="https://interiorwalaa.smepulse.in/Group%20118.png"
        gradientDirection="left"
      />
      <LatestProjectsSection />
      <HappyHomesSection />
      <GallerySection />
      <ContactSection />
    </div>
  )
}

export default page
