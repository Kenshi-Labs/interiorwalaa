'use client';

import InternalBanner from "@/components/internalbanner";
import OurGallery from "@/components/OurGallery";
import WelcomeSection from "@/components/AboutUsWelcome/Welcome";
import { getAboutUsBanner, getAboutUsMain, getAboutUsGallery } from "@/api/aboutus";
import { AboutUsBannerResponse, AboutUsMainResponse, AboutUsGalleryResponse } from '@/types/aboutus';
import { useEffect, useState } from "react";

export default function AboutUsPage() {
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

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div>
      <InternalBanner
        title={bannerData?.data?.title || ""}
        subtitle={bannerData?.data?.description || ""}
        backgroundImages={bannerData?.data?.backgroundImage || ["", "", ""]}
        autoSlideInterval={4000}
      />
      <WelcomeSection
        backgroundImage={mainData?.data?.content?.rightPanel?.backgroundImage || ""}
        mainTitle={mainData?.data?.content?.leftPanel?.title || ""}
        mainDescription={mainData?.data?.content?.leftPanel?.description || [""]}
        cards={mainData?.data?.content?.rightPanel?.contentCards || []}
      />
      <OurGallery
        title={galleryData?.data?.title || ""}
        subtitle={galleryData?.data?.subtitle || ""}
        isLoading={!galleryData?.data}
      />
    </div>
  );
}
