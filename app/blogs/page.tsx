'use client';

import BlogSection from '@/components/blogsPost'
import InternalBanner from '@/components/internalbanner'
import NewsletterSection from '@/components/projectContact'
import { useBlogsData } from '@/hooks/useBlogsData'

const BlogsPage = () => {
  const {
    bannerData,
    blogsData,
    blogsResponse,
    isLoading
  } = useBlogsData();

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div>
      <InternalBanner
        title={bannerData?.data?.title || ""}
        subtitle={bannerData?.data?.description || ""}
        backgroundImages={bannerData?.data?.backgroundImage || ["", "", ""]}
        autoSlideInterval={4000}
      />
      <BlogSection
        blogsData={blogsData}
        title={blogsResponse?.data?.title || ""}
        description={blogsResponse?.data?.description || ""}
      />
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

export default BlogsPage
