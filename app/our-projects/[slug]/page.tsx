'use client'
import { projects, Project } from '@/data/projects';
import { notFound } from 'next/navigation'; // For 404 handling
import { useEffect, useState } from 'react';
import ProductDetails from '@/components/gallerySection/ProductDetails';
import NewsletterSection from '@/components/projectContact';

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
    return <div>Loading...</div>;
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
      />    </>
  );
};

export default ProjectPage;
