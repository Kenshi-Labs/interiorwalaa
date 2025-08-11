import ContactSection from '@/components/contact'
import GallerySection from '@/components/gallerySection/page'
import ProjectBanner from '@/components/internalbanner/ProjectBanner'
import LatestProjectsSection from '@/components/projectcarsoul/page'
import HappyHomesSection from '@/components/projectsBanner/page'
import { getProjectBanner, getLatestProjects, getProjectsMain } from '@/api/project'
import React from 'react'

const page = async () => {
  let bannerData = null;
  let latestProjectsData = null;
  let projectsMainData = null;

  try {
    bannerData = await getProjectBanner();
  } catch (error) {
    console.error("Failed to fetch banner data:", error);
  }

  try {
    latestProjectsData = await getLatestProjects();
  } catch (error) {
    console.error("Failed to fetch latest projects data:", error);
  }

  try {
    projectsMainData = await getProjectsMain();
  } catch (error) {
    console.error("Failed to fetch projects main data:", error);
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

export default page
