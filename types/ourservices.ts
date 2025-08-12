export interface OurServicesBannerData {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    backgroundImage: string[];
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface OurServicesBannerResponse {
    statusCode: number;
    statusMessage: string;
    data: OurServicesBannerData;
}

export interface ServiceItem {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    imageUrl: string;
    imageAlt: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface OurServicesListResponse {
    statusCode: number;
    statusMessage: string;
    data: ServiceItem[];
}
