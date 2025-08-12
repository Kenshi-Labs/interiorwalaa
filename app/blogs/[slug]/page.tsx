'use client';

import InternalBanner from "@/components/internalbanner";
import ServicesPortfolio from "@/components/servicesPortfolio";
import NewsletterSection from "@/components/projectContact";
import BlogsDetails from "@/components/blogsPost/BlogsDetails";
import { useBlogSlugData } from "@/hooks/useBlogSlugData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const BlogSlugPage = ({ params }: PageProps) => {
  const { blogPost, loading } = useBlogSlugData(params);

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