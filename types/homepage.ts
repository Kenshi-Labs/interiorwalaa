export interface HeroSectionData {
    id: string;
    headlineText: string;
    brandName: string;
    backgroundImage: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface HomepageHeroResponse {
    statusCode: number;
    statusMessage: string;
    data: HeroSectionData;
}

export interface AboutUsSectionData {
    id: string;
    title: string;
    subtitle: string;
    description: string[];
    images: {
        image1: string;
        image2: string;
        image3: string;
    };
    stats: {
        number: string;
        label: string[];
    };
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface HomepageAboutUsResponse {
    statusCode: number;
    statusMessage: string;
    data: AboutUsSectionData;
}

export interface ServiceItem {
    icon: string;
    hoverIcon: string;
    title: string;
    description: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface ServicesSectionData {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    services: ServiceItem[];
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface HomepageServicesResponse {
    statusCode: number;
    statusMessage: string;
    data: ServicesSectionData;
}

export interface WhyChooseUsItem {
    title: string;
    description: string;
}

export interface WhyChooseUsSectionData {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    items: WhyChooseUsItem[];
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface HomepageWhyChooseUsResponse {
    statusCode: number;
    statusMessage: string;
    data: WhyChooseUsSectionData;
}

export interface FAQItem {
    question: string;
    answer: string;
}

export interface FAQSectionData {
    id: string;
    title: string;
    items: FAQItem[];
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface HomepageFAQResponse {
    statusCode: number;
    statusMessage: string;
    data: FAQSectionData;
}

export interface TestimonialItem {
    clientName: string;
    clientRole: string;
    testimonial: string;
}

export interface TestimonialsSectionData {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    testimonials: TestimonialItem[];
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface HomepageTestimonialsResponse {
    statusCode: number;
    statusMessage: string;
    data: TestimonialsSectionData;
}

export interface VideoSectionData {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    videos: unknown; // Keeping as unknown since videos is null in the response for now
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface HomepageVideoResponse {
    statusCode: number;
    statusMessage: string;
    data: VideoSectionData;
}
