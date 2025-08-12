import { useState, useEffect } from 'react';
import { getAboutUsBanner, getAboutUsMain, getAboutUsGallery } from "@/api/aboutus";
import { AboutUsBannerResponse, AboutUsMainResponse, AboutUsGalleryResponse } from '@/types/aboutus';

export const useAboutUsData = () => {
    const [bannerData, setBannerData] = useState<AboutUsBannerResponse | null>(null);
    const [mainData, setMainData] = useState<AboutUsMainResponse | null>(null);
    const [galleryData, setGalleryData] = useState<AboutUsGalleryResponse | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [banner, main, gallery] = await Promise.all([
                    getAboutUsBanner(),
                    getAboutUsMain(),
                    getAboutUsGallery()
                ]);

                setBannerData(banner);
                setMainData(main);
                setGalleryData(gallery);
            } catch (error) {
                console.error("Failed to fetch data:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return {
        bannerData,
        mainData,
        galleryData,
        isLoading
    };
};
