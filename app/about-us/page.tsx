'use client';

import InternalBanner from "@/components/internalbanner";
import OurGallery from "@/components/OurGallery";
import WelcomeSection from "@/components/AboutUsWelcome/Welcome";
import { useAboutUsData } from "@/hooks/useAboutUsData";

export default function AboutUsPage() {
  const {
    bannerData,
    mainData,
    galleryData,
    isLoading
  } = useAboutUsData();

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
