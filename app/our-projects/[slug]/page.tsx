'use client'
import { projects, Project } from '@/data/projects';
import { notFound } from 'next/navigation'; // For 404 handling
import Image from 'next/image';
import InternalBanner from '@/components/internalbanner';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

type ProjectPageProps = {
  params: Promise<{ slug: string }>
};
const ProjectPage = ({ params }: ProjectPageProps) => {
  const [project, setProject] = useState<Project | null>(null);
  const [remainingProjects, setRemainingProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

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

  // 6. Render project details
  return (
    <section>
      <InternalBanner
        title={project.title}
        subtitle={project.description}
        backgroundImage={project.image}
        gradientDirection="left"
      />

      {/* Render content sections */}
    {project.content.map((section, index: number) => (
  <section key={index} className=" mx-auto container lg:py-16 md:py-12 py-8 py-8 ">
    <div className={`flex flex-col lg:flex-row ${section.reverse ? 'lg:flex-row-reverse' : ''} items-center gap-10`}>
      <div className="w-full lg:w-1/2 relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px]">
        <Image
          src={section.image}
          alt={section.title}
          fill
          className="rounded-lg object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
      <div className="w-full lg:w-1/2">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#A0583C] mb-4">
          {section.title}
        </h2>
        {section.description.map((para: string, idx: number) => (
          <p key={idx} className="text-gray-700 mb-4 leading-relaxed">
            {para}
          </p>
        ))}
      </div>
    </div>
  </section>
))}

      {/* More Projects */}
      <section className="w-full py-8 bg-gray-50">
        <div className="overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="flex items-center animate-scroll-x">
            {[...remainingProjects, ...remainingProjects].map((project: Project, idx: number) => (
              <div
                key={idx}
                role="button"
                tabIndex={0}
                onClick={() => router.push(`/our-projects/${project.slug}`)}
                onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') router.push(`/our-projects/${project.slug}`); }}
                className="inline-block w-[220px] sm:w-[300px] h-[140px] sm:h-[180px] relative cursor-pointer focus:outline-none"
                style={{ flex: '0 0 auto' }}
                aria-label={`View project ${project.title}`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className=" object-cover"
                  sizes="(max-width: 640px) 220px, 300px"
                  priority={idx < 5}
                />
              </div>
            ))}
          </div>
        </div>
        <style jsx>{`
          @keyframes scroll-x {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll-x {
            animation: scroll-x 40s linear infinite;
            width: max-content;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </section>
    </section>
  );
};

export default ProjectPage;
