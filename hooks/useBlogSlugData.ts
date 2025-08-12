import { useState, useEffect } from 'react';
import { getBlogsMain, getBlogById } from "@/api/blogs";
import { BlogPost, BlogsMainResponse, BlogByIdResponse } from "@/types/blogs";
import { notFound } from "next/navigation";

export const useBlogSlugData = (params: Promise<{ slug: string }>) => {
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

    return {
        blogPost,
        loading
    };
};
