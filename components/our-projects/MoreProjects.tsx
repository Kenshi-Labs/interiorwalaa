"use client";
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import React from 'react';

type Project = {
  slug: string;
  image: string;
  title: string;
};

type MoreProjectsProps = {
  projects: Project[];
};

const MoreProjects: React.FC<MoreProjectsProps> = ({ projects }) => {
  const router = useRouter();
  return (
    <div className="overflow-x-auto whitespace-nowrap scrollbar-hide">
      <div className="flex items-center animate-scroll-x">
        {[...projects, ...projects].map((project, idx) => (
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
  );
};

export default MoreProjects; 