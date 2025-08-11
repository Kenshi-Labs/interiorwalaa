import InternalBanner from "@/components/internalbanner";
import ScrollWrapper from "@/components/scrollWrapper";
import ServiceContact from "@/components/ServiceContact";
import Serviceplanning from "@/components/Serviceplanning";
import ServicesPortfolio from "@/components/servicesPortfolio";
import { getOurServicesBanner, getOurServicesList } from "@/api/ourservices";
import React from "react";

const page = async () => {
  let bannerData = null;
  let servicesData = null;

  try {
    bannerData = await getOurServicesBanner();
  } catch (error) {
    console.error("Failed to fetch banner data:", error);
  }

  try {
    servicesData = await getOurServicesList();
  } catch (error) {
    console.error("Failed to fetch services data:", error);
  }

  return (
    <div>
      <InternalBanner
        title={bannerData?.data?.title || ""}
        subtitle={bannerData?.data?.description || ""}
        backgroundImages={bannerData?.data?.backgroundImage || ["", "", ""]}
        autoSlideInterval={4000}
      />
      <Serviceplanning servicesData={servicesData?.data || []} />
      <ScrollWrapper />
      <ServicesPortfolio />
      <ServiceContact />
    </div>
  );
};

export default page;
