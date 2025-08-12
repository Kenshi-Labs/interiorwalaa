export interface ProjectBannerData {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    backgroundImage: string[];
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface ProjectBannerResponse {
    statusCode: number;
    statusMessage: string;
    data: ProjectBannerData;
}

export interface LatestProject {
    title: string;
    price: string;
    image: string;
}

export interface LatestProjectsData {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    projects: LatestProject[];
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface LatestProjectsResponse {
    statusCode: number;
    statusMessage: string;
    data: LatestProjectsData;
}

export interface ProjectContent {
    title: string;
    description: string[];
    images: string[];
}

export interface Project {
    id: string;
    title: string;
    description: string;
    category: string;
    featuredImage: string;
    slug: string;
    slugBannerImages: string[];
    content: ProjectContent[];
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface ProjectsMainData {
    id: string;
    title: string;
    subtitle: string;
    projects: Project[];
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface ProjectsMainResponse {
    statusCode: number;
    statusMessage: string;
    data: ProjectsMainData;
}
