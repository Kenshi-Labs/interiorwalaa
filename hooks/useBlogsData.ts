import { useState, useEffect } from 'react';
import { getBlogsBanner, getBlogsMain } from '@/api/blogs';
import { BlogPost, BlogsBannerResponse, BlogsMainResponse } from '@/types/blogs';

export const useBlogsData = () => {
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

  return {
    bannerData,
    blogsData,
    blogsResponse,
    isLoading
  };
};
