import BlogSection from '@/components/blogsPost'
import InternalBanner from '@/components/internalbanner'
import NewsletterSection from '@/components/projectContact'
import { getBlogsBanner, getBlogsMain } from '@/api/blogs'
import { BlogPost } from '@/types/blogs'
import React from 'react'

const page = async () => {
  let bannerData = null;
  let blogsData: BlogPost[] = [];
  let blogsResponse = null;

  try {
    bannerData = await getBlogsBanner();
  } catch (error) {
    console.error("Failed to fetch banner data:", error);
  }

  try {
    blogsResponse = await getBlogsMain();
    blogsData = blogsResponse.data.blogs || [];
  } catch (error) {
    console.error("Failed to fetch blogs data:", error);
    blogsData = [];
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

export default page
