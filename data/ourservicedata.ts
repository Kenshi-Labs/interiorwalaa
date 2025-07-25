export interface ServiceProject {
    id: number;
    title: string;
    image: string;
    description: string;
    category: 'cafe' | 'pub' | 'restaurant' | 'hotel';
}

export interface ServiceCategory {
    id: 'cafe' | 'pub' | 'restaurant' | 'hotel';
    label: string;
}

export const serviceCategories: ServiceCategory[] = [
    { id: 'cafe', label: 'Cafe Interiors' },
    { id: 'pub', label: 'Pub Interiors' },
    { id: 'restaurant', label: 'Restaurant Interiors' },
    { id: 'hotel', label: 'Hotel Interiors' }
];

export const serviceProjects: ServiceProject[] = [
    // Cafe Interiors
    {
        id: 1,
        title: "Belgian Waffle Factory",
        image: "https://interiorwalaa.smepulse.in/serviceimg1.jpg",
        description: "Modern cafe design with warm ambiance",
        category: 'cafe'
    },
    {
        id: 2,
        title: "Wow Momo",
        image: "https://interiorwalaa.smepulse.in/serviceimg2.jpg",
        description: "Contemporary momo cafe with vibrant interiors",
        category: 'cafe'
    },
    {
        id: 3,
        title: "Eleven Bakehouse",
        image: "https://interiorwalaa.smepulse.in/serviceimg3.jpg",
        description: "Artisanal bakehouse with rustic charm",
        category: 'cafe'
    },

    // Pub Interiors
    {
        id: 4,
        title: "The Urban Tap",
        image: "https://interiorwalaa.smepulse.in/serviceimg1.jpg",
        description: "Industrial pub design with exposed brick",
        category: 'pub'
    },
    {
        id: 5,
        title: "Brewmaster's Den",
        image: "https://interiorwalaa.smepulse.in/serviceimg2.jpg",
        description: "Traditional pub with modern touches",
        category: 'pub'
    },
    {
        id: 6,
        title: "Craft & Draft",
        image: "https://interiorwalaa.smepulse.in/serviceimg3.jpg",
        description: "Craft beer pub with wooden aesthetics",
        category: 'pub'
    },

    // Restaurant Interiors
    {
        id: 7,
        title: "Spice Garden",
        image: "https://interiorwalaa.smepulse.in/serviceimg1.jpg",
        description: "Fine dining with elegant ambiance",
        category: 'restaurant'
    },
    {
        id: 8,
        title: "Ocean's Table",
        image: "https://interiorwalaa.smepulse.in/serviceimg2.jpg",
        description: "Seafood restaurant with coastal vibes",
        category: 'restaurant'
    },
    {
        id: 9,
        title: "Metro Bistro",
        image: "https://interiorwalaa.smepulse.in/serviceimg3.jpg",
        description: "Urban bistro with contemporary design",
        category: 'restaurant'
    },

    // Hotel Interiors
    {
        id: 10,
        title: "Grand Plaza Lobby",
        image: "https://interiorwalaa.smepulse.in/serviceimg1.jpg",
        description: "Luxury hotel lobby with marble finishes",
        category: 'hotel'
    },
    {
        id: 11,
        title: "Boutique Suites",
        image: "https://interiorwalaa.smepulse.in/serviceimg2.jpg",
        description: "Boutique hotel with personalized comfort",
        category: 'hotel'
    },
    {
        id: 12,
        title: "Resort Paradise",
        image: "https://interiorwalaa.smepulse.in/serviceimg3.jpg",
        description: "Tropical resort with natural elements",
        category: 'hotel'
    }
];

// Service Planning Data
export interface ServicePlanningItem {
    image: string;
    title: string;
    description: string;
    alt: string;
}

export const servicePlanningData: ServicePlanningItem[] = [
    {
        image: "https://interiorwalaa.smepulse.in/ourserviceimg1.jpg",
        title: "Interior Planning",
        description: "Our experienced team is well-versed in creating dynamic environments for cafes, pubs, restaurants, and hotels, each designed to enhance functionality and style.",
        alt: "Interior Planning"
    },
    {
        image: "https://interiorwalaa.smepulse.in/ourserviceimg2.jpg",
        title: "Architecture",
        description: "Our experienced team is well-versed in creating dynamic environments for cafes, pubs, restaurants, and hotels, each designed to enhance functionality and style.",
        alt: "Architecture"
    },
    {
        image: "https://interiorwalaa.smepulse.in/ourserviceimg3.jpg",
        title: "Exterior",
        description: "Our experienced team is well-versed in creating dynamic environments for cafes, pubs, restaurants, and hotels, each designed to enhance functionality and style.",
        alt: "Exterior"
    }
];
