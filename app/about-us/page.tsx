'use client'
import InternalBanner from "@/components/internalbanner";
import OurGallery from "@/components/OurGallery";
import WelcomeSection from "@/components/Welcome";
import { aboutUsWelcomeData } from "@/data/aboutuswelcome";
import React from "react";


const page = () => {
  return (
    <div>
      <InternalBanner
        title="About Us"
        subtitle="Interiorwala stands at the forefront of commercial interior designers in Bangalore"
        backgroundImages={[
          "https://interiorwalaa.smepulse.in/bannercarouselimg1.png",
          "https://interiorwalaa.smepulse.in/bannercarouselimg2.png",
          "https://interiorwalaa.smepulse.in/bannercarouselimg3.png"
        ]}
        autoSlideInterval={4000}
      />
      <WelcomeSection
        cards={aboutUsWelcomeData.cards}
        backgroundImage={aboutUsWelcomeData.backgroundImage}
        mainTitle={aboutUsWelcomeData.mainTitle}
        mainDescription={aboutUsWelcomeData.mainDescription}
      />
      <OurGallery />
    </div>
  );
};

export default page;
