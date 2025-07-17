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
      className="relative h-72 overflow-hidden rounded-t-xl bg-gray-200 cursor-pointer" 
      onClick={onCardClick}
    >
      <Image
        src={post.image}
        alt={post.title}
        fill
        className="object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={index < 2}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Optional: Add a subtle click indicator */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
          <svg 
            className="w-6 h-6 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" 
            />
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" 
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

// Separate Content Component
const BlogContent: React.FC<{ post: BlogPost }> = ({ post }) => {
  return (
    <div className="bg-transparent p-6 space-y-4">
      {/* Title - Prominently displayed like reference */}
      <h3 className="text-xl font-bold text-[#8F5E3D] leading-tight transition-colors duration-200">
        {post.title}: <span className="text-black/50 text-base font-normal">{post.excerpt}</span>
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
      whileHover={{ y: -8 }}
      className="overflow-hidden cursor-pointer group transition-all duration-300"
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
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Latest Blogs
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We are designers and content creators living it up in downtown New
            York, creating beautiful images when you need them in your design.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* First Row - 2 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {firstRowPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>

          {/* Second Row - 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {secondRowPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index + 2} />
            ))}
          </div>

          {/* Third Row - 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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