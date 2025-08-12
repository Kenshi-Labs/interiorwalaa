'use client';

import BlogSection from '@/components/blogsPost'
import InternalBanner from '@/components/internalbanner'
import NewsletterSection from '@/components/projectContact'
import { getBlogsBanner, getBlogsMain } from '@/api/blogs'
import { BlogPost, BlogsBannerResponse, BlogsMainResponse } from '@/types/blogs'
import { useEffect, useState } from 'react'

const BlogsPage = () => {
  const [bannerData, setBannerData] = useState<BlogsBannerResponse | null>(null);
  const [blogsData, setBlogsData] = useState<BlogPost[]>([]);
  const [blogsResponse, setBlogsResponse] = useState<BlogsMainResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [banner, blogs] = await Promise.all([
          getBlogsBanner(),
          getBlogsMain()
        ]);

        setBannerData(banner);
        setBlogsResponse(blogs);
        setBlogsData(blogs.data.blogs || []);
      } catch (error) {
        console.error("Failed to fetch data:", error);
        setBlogsData([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

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
