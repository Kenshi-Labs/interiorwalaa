'use client'
import { projects } from '@/data/projects';
import { notFound } from 'next/navigation'; // For 404 handling
import Link from 'next/link';
import Image from 'next/image';
import InternalBanner from '@/components/internalbanner';

type ProjectPageProps = {
  params: { slug: string }
};

const ProjectPage = async ({ params }: ProjectPageProps) => {
  // 3. Find the project by slug
  const project = projects.find((p) => p.slug === params.slug);

  // 4. Handle not found
  if (!project) {
    notFound();
    return null;
  }

  // 5. Get remaining projects (excluding current one)
  const remainingProjects = projects.filter((p) => p.slug !== params.slug);

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
    {project.content.map((section, index) => (
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
        {section.description.map((para, idx) => (
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
            {[...remainingProjects, ...remainingProjects].map((project, idx) => (
              <Link
                key={idx}
                href={`/our-projects/${project.slug}`}
                className="inline-block w-[220px] sm:w-[300px] h-[140px] sm:h-[180px] relative"
                style={{ flex: '0 0 auto' }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className=" object-cover"
                  sizes="(max-width: 640px) 220px, 300px"
                  priority={idx < 5}
                />
              </Link>
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
