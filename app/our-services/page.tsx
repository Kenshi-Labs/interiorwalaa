'use client';

import InternalBanner from "@/components/internalbanner";
import ScrollWrapper from "@/components/scrollWrapper";
import ServiceContact from "@/components/ServiceContact";
import Serviceplanning from "@/components/Serviceplanning";
import ServicesPortfolio from "@/components/servicesPortfolio";
import { getOurServicesBanner, getOurServicesList } from "@/api/ourservices";
import { OurServicesBannerResponse, OurServicesListResponse } from '@/types/ourservices';
import { useEffect, useState } from "react";

const OurServicesPage = () => {
  const [bannerData, setBannerData] = useState<OurServicesBannerResponse | null>(null);
  const [servicesData, setServicesData] = useState<OurServicesListResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [banner, services] = await Promise.all([
          getOurServicesBanner(),
          getOurServicesList()
        ]);

        setBannerData(banner);
        setServicesData(services);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

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
