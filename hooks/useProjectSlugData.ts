import { useState, useEffect } from 'react';
import { Project } from '@/types/project';
import { getProjectsMain } from '@/api/project';
import { ProjectsMainResponse } from '@/types/project';
import { notFound } from 'next/navigation';

export const useProjectSlugData = (params: Promise<{ slug: string }>) => {
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

    return {
        project,
        remainingProjects,
        loading
    };
};
