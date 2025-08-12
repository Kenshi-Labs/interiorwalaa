'use client';

import ContactSection from '@/components/contact'
import GallerySection from '@/components/gallerySection/page'
import ProjectBanner from '@/components/internalbanner/ProjectBanner'
import LatestProjectsSection from '@/components/projectcarsoul/page'
import HappyHomesSection from '@/components/projectsBanner/page'
import { getProjectBanner, getLatestProjects, getProjectsMain } from '@/api/project'
import { ProjectBannerResponse, LatestProjectsResponse, ProjectsMainResponse } from '@/types/project'
import { useEffect, useState } from 'react'

const OurProjectsPage = () => {
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

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div>
      <ProjectBanner
        title={bannerData?.data?.title || ""}
        subtitle={bannerData?.data?.description || ""}
        backgroundImages={bannerData?.data?.backgroundImage || ["", "", ""]}
      />
      <LatestProjectsSection
        title={latestProjectsData?.data?.title || ""}
        description={latestProjectsData?.data?.description || ""}
        projects={latestProjectsData?.data?.projects || []}
      />
      <HappyHomesSection />
      <GallerySection
        title={projectsMainData?.data?.title || ""}
        projects={projectsMainData?.data?.projects || []}
      />
      <ContactSection />
    </div>
  )
}

export default OurProjectsPage
