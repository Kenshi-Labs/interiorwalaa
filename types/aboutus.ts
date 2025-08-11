export interface AboutUsBannerData {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    backgroundImage: string[];
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface AboutUsBannerResponse {
    statusCode: number;
    statusMessage: string;
    data: AboutUsBannerData;
}

export interface ContentCard {
    title: string;
    description: string;
}

export interface RightPanel {
    backgroundImage: string;
    contentCards: ContentCard[];
}

export interface LeftPanel {
    title: string;
    description: string[];
}

export interface Content {
    leftPanel: LeftPanel;
    rightPanel: RightPanel;
}

export interface AboutUsMainData {
    id: string;
    title: string;
    subtitle: string;
    description: string[];
    content: Content;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface AboutUsMainResponse {
    statusCode: number;
    statusMessage: string;
    data: AboutUsMainData;
}

export interface AboutUsGalleryData {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface AboutUsGalleryResponse {
    statusCode: number;
    statusMessage: string;
    data: AboutUsGalleryData;
}
