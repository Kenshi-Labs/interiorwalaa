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
import { getHomepageHero, getHomepageAboutUs, getHomepageServices, getHomepageWhyChooseUs, getHomepageFAQ, getHomepageTestimonials, getHomepageVideo } from "@/api/homepage";

export default async function Home() {
  let heroData = null;
  let aboutUsData = null;
  let servicesData = null;
  let whyChooseUsData = null;
  let faqData = null;
  let testimonialsData = null;
  let videoData = null;

  try {
    heroData = await getHomepageHero();
  } catch (error) {
    console.error("Failed to fetch hero data:", error);
  }

  try {
    aboutUsData = await getHomepageAboutUs();
  } catch (error) {
    console.error("Failed to fetch about-us data:", error);
  }

  try {
    servicesData = await getHomepageServices();
  } catch (error) {
    console.error("Failed to fetch services data:", error);
  }

  try {
    whyChooseUsData = await getHomepageWhyChooseUs();
  } catch (error) {
    console.error("Failed to fetch why-choose-us data:", error);
  }

  try {
    faqData = await getHomepageFAQ();
  } catch (error) {
    console.error("Failed to fetch FAQ data:", error);
  }

  try {
    testimonialsData = await getHomepageTestimonials();
  } catch (error) {
    console.error("Failed to fetch testimonials data:", error);
  }

  try {
    videoData = await getHomepageVideo();
  } catch (error) {
    console.error("Failed to fetch video data:", error);
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
