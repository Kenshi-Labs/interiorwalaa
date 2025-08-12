'use client';

import ContactSection from '@/components/contact'
import GallerySection from '@/components/gallerySection/page'
import ProjectBanner from '@/components/internalbanner/ProjectBanner'
import LatestProjectsSection from '@/components/projectcarsoul/page'
import HappyHomesSection from '@/components/projectsBanner/page'
import { useOurProjectsData } from '@/hooks/useOurProjectsData'

const OurProjectsPage = () => {
  const {
    bannerData,
    latestProjectsData,
    projectsMainData,
    isLoading
  } = useOurProjectsData();

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
