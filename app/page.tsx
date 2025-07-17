'use client'
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



export default function Home() {
  return (
    <div className="bg-[var(--color-white-alt)]">

      <HeroBanner
        backgroundImage="https://interiorwalaa.smepulse.in/homebannerbg.png"
      />
      <AllAbout
        layout="image-left"
        title="All About"
        subtitle="Interiorwalaa"
        description={[
          "Interiorwalaa stands at the forefront of commercial interior designers in Bangalore. With six years of industry leadership and more than 50 spaces transformed nationwide, we excel in designing interiors that resonate with quality and distinction. ",
          "Our experienced team is well-versed in creating dynamic environments for cafes, pubs, restaurants, and hotels, each designed to enhance functionality and style."
        ]}
        images={{
          img1: "https://interiorwalaa.smepulse.in/allaboutimg1.png",
          img2: "https://interiorwalaa.smepulse.in/allaboutimg2.png",
          img3: "https://interiorwalaa.smepulse.in/allaboutimg3.png"
        }}
        buttonText="Get In Touch"
        stats={{
          number: "150+",
          label: ["Successful", "Projects"]
        }}
      />
      <WhatWeOffer />
      <WhyChooseUs />
      <ServicesPortfolio />
      <ScrollWrapper />
      <FAQSection />
      <VideoGallerySection />
      <TestimonialCarousel />
      <ContactSection />
    </div>
  );
}
