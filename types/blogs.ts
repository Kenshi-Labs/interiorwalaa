export interface BlogsBannerData {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    backgroundImage: string[];
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface BlogsBannerResponse {
    statusCode: number;
    statusMessage: string;
    data: BlogsBannerData;
}

export interface BlogPost {
    id: string;
    title: string;
    subtitle: string;
    slug: string;
    content: string;
    images: string[];
    featuredImage: string;
    excerpt: string;
    author: string;
    category: string;
    tags: string[];
    isPublished: boolean;
    isFeatured: boolean;
    viewCount: number;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface BlogsMainData {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    blogs: BlogPost[];
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface BlogsMainResponse {
    statusCode: number;
    statusMessage: string;
    data: BlogsMainData;
}

export interface BlogByIdResponse {
    statusCode: number;
    statusMessage: string;
    data: BlogPost;
}
