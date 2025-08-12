'use client';

import InternalBanner from "@/components/internalbanner";
import ServicesPortfolio from "@/components/servicesPortfolio";
import NewsletterSection from "@/components/projectContact";
import BlogsDetails from "@/components/blogsPost/BlogsDetails";
import { getBlogsMain, getBlogById } from "@/api/blogs";
import { BlogPost, BlogsMainResponse, BlogByIdResponse } from "@/types/blogs";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const BlogSlugPage = ({ params }: PageProps) => {
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBlog = async () => {
      try {
        const resolvedParams = await params;
        const { slug } = resolvedParams;

        let foundBlogPost = null;

        try {
          // First try to get the blog from the main list
          const mainResponse: BlogsMainResponse = await getBlogsMain();
          foundBlogPost = mainResponse.data.blogs.find((blog) => blog.slug === slug);

          if (!foundBlogPost) {
            // If not found in main list, try to get by ID (assuming slug might be the ID)
            try {
              const blogResponse: BlogByIdResponse = await getBlogById(slug);
              foundBlogPost = blogResponse.data;
            } catch (blogError) {
              console.error('Blog not found by ID either:', blogError);
              notFound();
            }
          }
        } catch (err) {
          console.error('Failed to fetch blog post:', err);
          notFound();
        }

        if (!foundBlogPost) {
          notFound();
        }

        setBlogPost(foundBlogPost);
        setLoading(false);
      } catch (error) {
        console.error('Error resolving params:', error);
        notFound();
      }
    };

    loadBlog();
  }, [params]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!blogPost) {
    return null;
  }

  return (
    <>
      <InternalBanner
        title={blogPost.title || ""}
        subtitle={blogPost.excerpt || ""}
        backgroundImages={blogPost.images || []}
        autoSlideInterval={4000}
      />

      <BlogsDetails blogPost={blogPost} />

      <ServicesPortfolio />
      <NewsletterSection
        title="Looking to Redesign Your Restaurant? Let's Talk."
        placeholder="Email ID"
        submitText="Submit"
        loadingText="Submitting..."
        loadingTextMobile="..."
        successMessage="Thanks for submitting! Check your inbox for confirmation."
        errorMessage="Something went wrong. Please try again."
        invalidEmailMessage="Please enter a valid email address"
      />
    </>
  );
};

export default BlogSlugPage;