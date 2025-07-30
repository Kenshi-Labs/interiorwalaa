import ContactSection from '@/components/contact'
import GallerySection from '@/components/gallerySection/page'
import ProjectBanner from '@/components/internalbanner/ProjectBanner'
import LatestProjectsSection from '@/components/projectcarsoul/page'
import HappyHomesSection from '@/components/projectsBanner/page'

import React from 'react'

const page = () => {
  return (
    <div>
      <ProjectBanner />
      <LatestProjectsSection />
      <HappyHomesSection />
      <GallerySection />
      <ContactSection />
    </div>
  )
}

export default page
