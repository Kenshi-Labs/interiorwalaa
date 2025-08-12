'use client';

import { useState, useEffect } from 'react';
import { getHomepageHero, getHomepageAboutUs, getHomepageServices, getHomepageWhyChooseUs, getHomepageFAQ, getHomepageTestimonials, getHomepageVideo } from "@/api/homepage";
import { HomepageHeroResponse, HomepageAboutUsResponse, HomepageServicesResponse, HomepageWhyChooseUsResponse, HomepageFAQResponse, HomepageTestimonialsResponse, HomepageVideoResponse } from '@/types/homepage';

export const useHomepageData = () => {
    const [heroData, setHeroData] = useState<HomepageHeroResponse | null>(null);
    const [aboutUsData, setAboutUsData] = useState<HomepageAboutUsResponse | null>(null);
    const [servicesData, setServicesData] = useState<HomepageServicesResponse | null>(null);
    const [whyChooseUsData, setWhyChooseUsData] = useState<HomepageWhyChooseUsResponse | null>(null);
    const [faqData, setFaqData] = useState<HomepageFAQResponse | null>(null);
    const [testimonialsData, setTestimonialsData] = useState<HomepageTestimonialsResponse | null>(null);
    const [videoData, setVideoData] = useState<HomepageVideoResponse | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [
                    hero,
                    aboutUs,
                    services,
                    whyChooseUs,
                    faq,
                    testimonials,
                    video
                ] = await Promise.all([
                    getHomepageHero(),
                    getHomepageAboutUs(),
                    getHomepageServices(),
                    getHomepageWhyChooseUs(),
                    getHomepageFAQ(),
                    getHomepageTestimonials(),
                    getHomepageVideo()
                ]);

                setHeroData(hero);
                setAboutUsData(aboutUs);
                setServicesData(services);
                setWhyChooseUsData(whyChooseUs);
                setFaqData(faq);
                setTestimonialsData(testimonials);
                setVideoData(video);
            } catch (error) {
                console.error("Failed to fetch data:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return {
        heroData,
        aboutUsData,
        servicesData,
        whyChooseUsData,
        faqData,
        testimonialsData,
        videoData,
        isLoading
    };
};
