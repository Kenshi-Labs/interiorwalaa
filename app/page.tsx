'use client'
import AllAbout from "@/components/common/AllAbout";
import { HeroBanner } from "@/components/common/HeroBanner";
import ContactSection from "@/components/contact";
import FAQSection from "@/components/FAQSection";
import { FooterSubsection } from "@/components/partials/Footer";
import { Header } from "@/components/partials/Header";
import TestimonialCarousel from "@/components/scrollToSlide";
import ScrollWrapper from "@/components/scrollWrapper";
import ServicesPortfolio from "@/components/servicesPortfolio";
import WhatWeOffer from "@/components/whatweoffer";



export default function Home() {
  return (
    <div className="bg-[var(--color-white-alt)]">
      <Header />
      <HeroBanner
        backgroundImage="https://interiorwalaa.smepulse.in/homebannerbg.png"
      />
      <AllAbout />
      <WhatWeOffer />
      <ScrollWrapper />
      <ServicesPortfolio />
      <FAQSection />
      <TestimonialCarousel />
      <ContactSection/>
      <FooterSubsection />
    </div>
  );
}
