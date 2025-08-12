'use client';

import AllAbout from "@/components/common/AllAbout";
import { HeroBanner } from "@/components/common/HeroBanner";
import ContactSection from "@/components/contact";
import FAQSection from "@/components/FAQSection";
import TestimonialCarousel from "@/components/scrollToSlide";
import ScrollWrapper from "@/components/scrollWrapper";
import ServicesPortfolio from "@/components/servicesPortfolio";
import VideoGallerySection from "@/components/videoSection";
import WhatWeOffer from "@/components/whatweoffer";
import WhyChooseUs from "@/components/whyChooseUs";
import { useHomepageData } from "@/hooks/useHomepageData";

export default function Home() {
  const {
    heroData,
    aboutUsData,
    servicesData,
    whyChooseUsData,
    faqData,
    testimonialsData,
    videoData,
    isLoading
  } = useHomepageData();

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="bg-[var(--color-white-alt)]">
      <HeroBanner
        backgroundImage={heroData?.data?.backgroundImage || ""}
        headlineText={heroData?.data?.headlineText || ""}
        brandName={heroData?.data?.brandName || "No Brand Name"}
        isLoading={!heroData?.data}
      />

      <AllAbout
        layout="image-left"
        title={aboutUsData?.data?.title || ""}
        subtitle={aboutUsData?.data?.subtitle || ""}
        description={aboutUsData?.data?.description || ["", ""]}
        images={{
          image1: aboutUsData?.data?.images?.image1 || "",
          image2: aboutUsData?.data?.images?.image2 || "",
          image3: aboutUsData?.data?.images?.image3 || "",
        }}
        buttonText="Get In Touch"
        stats={{
          number: aboutUsData?.data?.stats?.number || "",
          label: aboutUsData?.data?.stats?.label || [""],
        }}
      />

      <WhatWeOffer
        title={servicesData?.data?.title || ""}
        subtitle={servicesData?.data?.subtitle || ""}
        description={servicesData?.data?.description || ""}
        services={servicesData?.data?.services || []}
        isLoading={!servicesData?.data}
      />

      <WhyChooseUs
        title={whyChooseUsData?.data?.title || ""}
        subtitle={whyChooseUsData?.data?.subtitle || ""}
        description={whyChooseUsData?.data?.description || ""}
        items={whyChooseUsData?.data?.items || []}
        isLoading={!whyChooseUsData?.data}
      />

      <ServicesPortfolio />
      <ScrollWrapper />

      <FAQSection
        title={faqData?.data?.title || ""}
        items={faqData?.data?.items || []}
        isLoading={!faqData?.data}
      />

      <VideoGallerySection
        title={videoData?.data?.title || ""}
        subtitle={videoData?.data?.subtitle || ""}
        description={videoData?.data?.description || ""}
        isLoading={!videoData?.data}
      />

      <TestimonialCarousel
        title={testimonialsData?.data?.title || ""}
        subtitle={testimonialsData?.data?.subtitle || ""}
        description={testimonialsData?.data?.description || ""}
        testimonials={testimonialsData?.data?.testimonials || []}
        isLoading={!testimonialsData?.data}
      />
      <ContactSection />
    </div>
  );
}
