'use client';

import ProductDetails from '@/components/gallerySection/ProductDetails';
import NewsletterSection from '@/components/projectContact';
import { useProjectSlugData } from '@/hooks/useProjectSlugData';

type ProjectPageProps = {
  params: Promise<{ slug: string }>
};

const ProjectPage = ({ params }: ProjectPageProps) => {
  const { project, remainingProjects, loading } = useProjectSlugData(params);

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
