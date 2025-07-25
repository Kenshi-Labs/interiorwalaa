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
        backgroundImage="https://interiorwalaa.smepulse.in/interior%20design%20warm%20tone%20dining%20area.png"
        gradientDirection="left"
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
