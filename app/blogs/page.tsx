import BlogSection from '@/components/blogsPost'
import InternalBanner from '@/components/internalbanner'
import NewsletterSection from '@/components/projectContact'

import React from 'react'

const page = () => {
  return (
    <div>
      <InternalBanner
        title="Blogs"
        subtitle="Interiorwala stands at the forefront of commercial interior designers in Bangalore"
        backgroundImage="https://interiorwalaa.smepulse.in/blogbannerimg.png"
        gradientDirection="left"
      />
      <BlogSection />
      <NewsletterSection />
    </div>
  )
}

export default page
