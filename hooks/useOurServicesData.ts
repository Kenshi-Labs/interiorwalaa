import { useState, useEffect } from 'react';
import { getOurServicesBanner, getOurServicesList } from "@/api/ourservices";
import { OurServicesBannerResponse, OurServicesListResponse } from '@/types/ourservices';

export const useOurServicesData = () => {
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

  return {
    bannerData,
    servicesData,
    isLoading
  };
};
