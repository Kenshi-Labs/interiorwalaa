'use client'

import InternalBanner from "@/components/internalbanner";
import { blogPosts } from "@/data/blogPosts";
import { useRouter } from "next/navigation";
import { use } from "react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function Page({ params }: PageProps) {
  const router = useRouter();
  
  // Use React's `use` hook to unwrap the Promise
  const { slug } = use(params);
  
  const blogPost = blogPosts.find((post) => post.slug === slug);

  if (!blogPost) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1>Blog Post Not Found</h1>
          <button onClick={() => router.push("/")}>Back to Home</button>
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
      
      <div className="container mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-16">
        <div
          className="prose project-styles"
          dangerouslySetInnerHTML={{ __html: blogPost.content }}
        />
      </div>
    </>
  );
}