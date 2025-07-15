import { HeroBanner } from "@/components/common/HeroBanner";
import FAQSection from "@/components/FAQSection";
import { FooterSubsection } from "@/components/partials/Footer";
import { Header } from "@/components/partials/Header";
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
      <WhatWeOffer />
      <ScrollWrapper />
      <ServicesPortfolio />
      <FAQSection />
      <FooterSubsection />
    </div>
  );
}
