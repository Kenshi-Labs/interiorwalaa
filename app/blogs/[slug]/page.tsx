'use client'

import InternalBanner from "@/components/internalbanner";
import { blogPosts } from "@/data/blogPosts";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ServicesPortfolio from "@/components/servicesPortfolio";
import NewsletterSection from "@/components/projectContact";
import BlogsDetails from "@/components/blogsPost/BlogsDetails";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function Page({ params }: PageProps) {
  const router = useRouter();
  const [slug, setSlug] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getSlug = async () => {
      try {
        const resolvedParams = await params;
        console.log('Resolved params:', resolvedParams);
        setSlug(resolvedParams.slug);
      } catch (error) {
        console.error('Error resolving params:', error);
        router.push('/blogs');
      } finally {
        setIsLoading(false);
      }
    };

    getSlug();
  }, [params, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--primary-brown)] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!slug) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md mx-auto px-4">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
          <p className="text-gray-600 mb-6">The blog post you&apos;re looking for doesn&apos;t exist.</p>
          <button
            onClick={() => router.push("/blogs")}
            className="px-6 py-3 bg-[var(--primary-brown)] text-white rounded-lg hover:bg-[var(--primary-brown)]/90 transition-colors duration-200"
          >
            Back to Blogs
          </button>
        </div>
      </div>
    );
  }

  // Find the blog post by slug
  const blogPost = blogPosts.find((post) => post.slug === slug);
  console.log('Looking for slug:', slug);
  console.log('Available slugs:', blogPosts.map(post => post.slug));
  console.log('Found blog post:', blogPost);

  if (!blogPost) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md mx-auto px-4">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
          <p className="text-gray-600 mb-6">The blog post &quot;{slug}&quot; doesn&apos;t exist.</p>
          <button
            onClick={() => router.push("/blogs")}
            className="px-6 py-3 bg-[var(--primary-brown)] text-white rounded-lg hover:bg-[var(--primary-brown)]/90 transition-colors duration-200"
          >
            Back to Blogs
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <InternalBanner
        title={blogPost.title}
        subtitle={blogPost.excerpt}
        backgroundImage={blogPost.image}
        gradientDirection="left"
      />

      <BlogsDetails blogPost={blogPost} />

      <ServicesPortfolio />
      <NewsletterSection
        title="Looking to Redesign Your Restaurant? Let&apos;s Talk."
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
}