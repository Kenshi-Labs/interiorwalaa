import BlogSection from '@/components/blogsPost'
import ContactSection from '@/components/contact'
import InternalBanner from '@/components/internalbanner'
import NewsletterSection from '@/components/projectContact'

import React from 'react'

const page = () => {
  return (
    <div>
       <InternalBanner
        title="Blogs"
        subtitle="Interiorwala stands at the forefront of commercial interior designers in Bangalore"
        backgroundImage="https://interiorwalaa.smepulse.in/warm%20tone%20interior%20design%20hall%20(1).png"
        gradientDirection="left"
      />
      <BlogSection />
      <NewsletterSection />
      <ContactSection />
    </div>
  )
}

export default page
