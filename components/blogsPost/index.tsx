"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BlogPost, blogPosts } from "@/data/blogPosts";



const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
      // remove ease
    },
  },
};

// Separate Image Component with Navigation
const BlogImage: React.FC<{
  post: BlogPost;
  index: number;
  onCardClick: () => void;
}> = ({ post, index, onCardClick }) => {
  return (
    <div
      className="relative h-[180px] sm:h-[250px] overflow-hidden cursor-pointer group rounded-3xl"
      onClick={onCardClick}
    >
      <Image
        src={post.image}
        alt={post.title}
        fill
        className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 group-hover:shadow-xl"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        priority={index < 2}
      />
    </div>
  );
};

// Separate Content Component
const BlogContent: React.FC<{ post: BlogPost }> = ({ post }) => {
  return (
    <div className="bg-transparent p-2 sm:p-3 space-y-2 sm:space-y-4 text-center">
      {/* Title - Prominently displayed like reference */}
      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary-brown leading-tight font-work-sans">
        {post.title}: <span className="text-[var(--dark-gray)] text-sm sm:text-base font-normal font-manrope">{post.excerpt}</span>
      </h3>
    </div>
  );
};

// Main Blog Card Component with Navigation
const BlogCard: React.FC<{ post: BlogPost; index: number }> = ({ post, index }) => {
  const router = useRouter();

  const handleCardClick = () => {
    try {
      // Navigate to the blog post page
      router.push(`/blogs/${post.slug}`);
    } catch (error) {
      console.error('Navigation error:', error);
      // Fallback: You could show a toast notification or handle error
    }
  };

  const handleCardHover = () => {
    // Optional: Prefetch the blog post page for better performance
    router.prefetch(`/blog/${post.slug}`);
  };



  return (
    <motion.article
      variants={itemVariants}
      className="overflow-hidden cursor-pointer group"
      onClick={handleCardClick}
      onMouseEnter={handleCardHover}
    >
      {/* Image Section - Top section */}
      <BlogImage post={post} index={index} onCardClick={handleCardClick} />

      {/* Content Section - Bottom section, clearly separated */}
      <BlogContent post={post} />
    </motion.article>
  );
};

const BlogSection: React.FC = () => {
  const firstRowPosts = blogPosts.slice(0, 2);
  const secondRowPosts = blogPosts.slice(2, 5);
  const thirdRowPosts = blogPosts.slice(5, 8);

  return (
    <section className="py-10 sm:py-16">
      <div className="max-w-[1400px] mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-black mb-2 sm:mb-4 font-work-sans">
            Our Latest Blogs
          </h2>
          <p className="text-sm sm:text-lg text-[var(--dark-gray)] max-w-3xl mx-auto font-manrope">
            We are designers and content creators living it up in downtown New
            York, creating beautiful images when you need them in your design.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6 sm:space-y-8"
        >
          {/* First Row - 2 Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {firstRowPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>

          {/* Second Row - 3 Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {secondRowPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index + 2} />
            ))}
          </div>

          {/* Third Row - 3 Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {thirdRowPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index + 5} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;