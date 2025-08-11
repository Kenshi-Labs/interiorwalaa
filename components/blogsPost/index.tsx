'use client'
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BlogPost } from "@/types/blogs";

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
    },
  },
};

// Separate Image Component with Navigation
const BlogImage: React.FC<{
  post: BlogPost;
  index: number;
}> = ({ post, index }) => {
  return (
    <div className="relative h-[180px] sm:h-[220px] lg:h-[250px] overflow-hidden group rounded-t-[20px] sm:rounded-t-[25px] lg:rounded-t-[30px]">
      <Image
        src={post.featuredImage}
        alt={post.title}
        fill
        className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 50vw, 33vw"
        priority={index < 2}
      />
    </div>
  );
};

// Separate Content Component
const BlogContent: React.FC<{ post: BlogPost }> = ({ post }) => {
  return (
    <div className="bg-[#F3F3F3] p-3 sm:p-4 lg:py-3 lg:px-6 space-y-2 sm:space-y-3 lg:space-y-3 rounded-b-[20px] sm:rounded-t-[25px] lg:rounded-t-[30px] text-center">
      {/* Title - Responsive text sizing */}
      <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-primary-brown leading-tight font-['WorkSans']">
        {post.title}: <span className="text-[var(--dark-gray)] text-xs sm:text-sm lg:text-base font-normal font-manrope">{post.excerpt}</span>
      </h3>
    </div>
  );
};

// Main Blog Card Component with Navigation
const BlogCard: React.FC<{ post: BlogPost; index: number }> = ({ post, index }) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push(`/blogs/${post.slug}`);
  };

  return (
    <motion.article
      variants={itemVariants}
      className="overflow-hidden group bg-white rounded-[20px] sm:rounded-[25px] lg:rounded-[30px] hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      style={{ boxShadow: '0px 2px 25px 0px #00000040' }}
      onClick={handleClick}
    >
      {/* Image Section */}
      <BlogImage post={post} index={index} />

      {/* Content Section */}
      <BlogContent post={post} />
    </motion.article>
  );
};

interface BlogSectionProps {
  blogsData: BlogPost[];
  title?: string;
  description?: string;
}

const BlogSection: React.FC<BlogSectionProps> = ({ blogsData, title, description }) => {
  const firstRowPosts = blogsData.slice(0, 2);
  const secondRowPosts = blogsData.slice(2, 5);
  const thirdRowPosts = blogsData.slice(5, 8);

  return (
    <section className="py-8 sm:py-12 lg:py-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-black mb-2 sm:mb-3 lg:mb-4 font-['WorkSans']">
            {title || ""}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-[var(--dark-gray)] max-w-3xl mx-auto font-manrope  px-2">
            {description || ""}
          </p>
        </motion.div>

        {/* Blog Grid - Mobile/Tablet: Single column, Desktop: Original 3-row layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6 sm:space-y-8 lg:space-y-8"
        >
          {/* Mobile/Tablet: Single column layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-4 sm:gap-6">
            {blogsData.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>

          {/* Desktop: Original 3-row layout with dividers */}
          <div className="hidden lg:block space-y-8">
            {/* First Row - 2 Columns */}
            <div className="grid grid-cols-2 gap-12 relative">
              {firstRowPosts.map((post, index) => (
                <BlogCard key={post.id} post={post} index={index} />
              ))}
              {/* Vertical divider between first row cards */}
              <div className="absolute top-0 h-[250px] left-1/2 transform -translate-x-1/2 w-px border-l border-black"></div>
            </div>

            {/* Horizontal divider */}
            <div className="border-t border-black w-[80%] mx-auto"></div>

            {/* Second Row - 3 Columns */}
            <div className="grid grid-cols-3 gap-12 relative">
              {secondRowPosts.map((post, index) => (
                <BlogCard key={post.id} post={post} index={index + 2} />
              ))}
              {/* Vertical dividers between second row cards */}
              <div className="absolute top-0 h-[250px] left-[32.7%] transform -translate-x-1/2 w-px border-l border-black"></div>
              <div className="absolute top-0 h-[250px] left-[67.3%] transform -translate-x-1/2 w-px border-l border-black"></div>
            </div>

            {/* Horizontal divider */}
            <div className="border-t border-black w-[80%] mx-auto"></div>

            {/* Third Row - 3 Columns */}
            <div className="grid grid-cols-3 gap-12 relative">
              {thirdRowPosts.map((post, index) => (
                <BlogCard key={post.id} post={post} index={index + 5} />
              ))}
              {/* Vertical dividers between third row cards */}
              <div className="absolute top-0 h-[250px] left-[32.7%] transform -translate-x-1/2 w-px border-l border-black"></div>
              <div className="absolute top-0 h-[250px] left-[67.3%] transform -translate-x-1/2 w-px border-l border-black"></div>
            </div>

            {/* Horizontal divider */}
            <div className="border-t border-black w-[80%] mx-auto"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;