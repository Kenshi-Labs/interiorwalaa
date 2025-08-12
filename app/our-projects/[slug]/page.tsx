'use client';

import { Project } from '@/types/project';
import { notFound } from 'next/navigation';
import { useEffect, useState } from 'react';
import ProductDetails from '@/components/gallerySection/ProductDetails';
import NewsletterSection from '@/components/projectContact';
import { getProjectsMain } from '@/api/project';
import { ProjectsMainResponse } from '@/types/project';

type ProjectPageProps = {
  params: Promise<{ slug: string }>
};

const ProjectPage = ({ params }: ProjectPageProps) => {
  const [project, setProject] = useState<Project | null>(null);
  const [remainingProjects, setRemainingProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProject = async () => {
      try {
        const { slug } = await params;

        // Fetch projects data from API
        const projectsResponse: ProjectsMainResponse = await getProjectsMain();
        const projects = projectsResponse.data.projects;

        const foundProject = projects.find((p) => p.slug === slug);

        if (!foundProject) {
          notFound();
          return;
        }

        setProject(foundProject);
        setRemainingProjects(projects.filter((p) => p.slug !== slug));
        setLoading(false);
      } catch (error) {
        console.error('Error loading project:', error);
        notFound();
      }
    };

    loadProject();
  }, [params]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!project) {
    return null;
  }

  return (
    <>
      <ProductDetails project={project} remainingProjects={remainingProjects} />
      <NewsletterSection
        title="Looking to Redesign Your Restaurant? Let&apos;s Talk."
        placeholder="Email ID"
        submitText="Submit"
        loadingText="Submitting..."
        loadingTextMobile="..."
        successMessage="Thanks for submitting! Check your inbox for confirmation."
        errorMessage="Something went wrong. Please try again."
        invalidEmailMessage="Please enter a valid email address"
      />
    </>
  );
};

export default ProjectPage;
