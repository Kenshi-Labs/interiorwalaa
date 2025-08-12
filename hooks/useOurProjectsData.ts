import { useState, useEffect } from 'react';
import { getProjectBanner, getLatestProjects, getProjectsMain } from '@/api/project';
import { ProjectBannerResponse, LatestProjectsResponse, ProjectsMainResponse } from '@/types/project';

export const useOurProjectsData = () => {
  const [bannerData, setBannerData] = useState<ProjectBannerResponse | null>(null);
  const [latestProjectsData, setLatestProjectsData] = useState<LatestProjectsResponse | null>(null);
  const [projectsMainData, setProjectsMainData] = useState<ProjectsMainResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [banner, latestProjects, projectsMain] = await Promise.all([
          getProjectBanner(),
          getLatestProjects(),
          getProjectsMain()
        ]);

        setBannerData(banner);
        setLatestProjectsData(latestProjects);
        setProjectsMainData(projectsMain);
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
    latestProjectsData,
    projectsMainData,
    isLoading
  };
};
