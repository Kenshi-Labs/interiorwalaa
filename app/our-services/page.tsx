'use client';

import InternalBanner from "@/components/internalbanner";
import ScrollWrapper from "@/components/scrollWrapper";
import ServiceContact from "@/components/ServiceContact";
import Serviceplanning from "@/components/Serviceplanning";
import ServicesPortfolio from "@/components/servicesPortfolio";
import { useOurServicesData } from "@/hooks/useOurServicesData";

const OurServicesPage = () => {
  const {
    bannerData,
    servicesData,
    isLoading
  } = useOurServicesData();

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
      <Serviceplanning servicesData={servicesData?.data || []} />
      <ScrollWrapper />
      <ServicesPortfolio />
      <ServiceContact />
    </div>
  );
};

export default OurServicesPage;
