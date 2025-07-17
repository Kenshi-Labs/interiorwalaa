import AllAbout from "@/components/common/AllAbout";
import ContactSection from "@/components/contact";
import InternalBanner from "@/components/internalbanner";
import WhyChooseUs from "@/components/whyChooseUs";
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
      <AllAbout
        layout="image-right"
        title="Welcome to Interiorwalaa"
        subtitle=""
        description={[
          "Interiorwalaa stands at the forefront of commercial interior designers in Bangalore. With six years of industry leadership and more than 50 spaces transformed nationwide, we excel in designing interiors that resonate with quality and distinction. Our experienced team is well-versed in creating dynamic environments for cafes, pubs, restaurants, and hotels, each designed to enhance functionality and style.",
          "Whether crafting the elegant ambiance of a hotel, the cozy charm of a cafe, the vibrant atmosphere of a pub, or the sophisticated setting of a restaurant, our projects are adventures in creativity, tailored to boost comfort and productivity. Let Interiorwalaa transform your commercial space into a masterpiece. Experience the transformative power of design with us today.",
        ]}
        buttonText="Get In Touch"
      />
      <WhyChooseUs />
      <ContactSection />
    </div>
  );
};

export default page;
