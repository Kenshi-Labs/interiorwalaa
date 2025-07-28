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
      <NewsletterSection
        title="Get the latest blog in your inbox"
        placeholder="Email ID"
        submitText="Subscribe"
        loadingText="Subscribing..."
        loadingTextMobile="..."
        successMessage="Thanks for subscribing! Check your inbox for confirmation."
        errorMessage="Something went wrong. Please try again."
        invalidEmailMessage="Please enter a valid email address"
      />
    </div>
  )
}

export default page
