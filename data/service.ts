export type TabKey = 'cafe' | 'pub' | 'restaurant' | 'hotel';

export interface PortfolioItem {
    id: number;
    title: string;
    image: string;
    description: string;
}

export interface ServiceTab {
    id: TabKey;
    label: string;
}

export interface ServicesData {
    tabs: ServiceTab[];
    portfolioData: Record<TabKey, PortfolioItem[]>;
}

export const servicesData: ServicesData = {
    tabs: [
        { id: 'cafe', label: 'Cafe Interiors' },
        { id: 'pub', label: 'Pub Interiors' },
        { id: 'restaurant', label: 'Restaurant Interiors' },
        { id: 'hotel', label: 'Hotel Interiors' }
    ],
    portfolioData: {
        cafe: [
            {
                id: 1,
                title: "Belgian Waffle Factory",
                image: "https://interiorwalaa.smepulse.in/serviceimg1.jpg",
                description: "Modern cafe design with warm ambiance"
            },
            {
                id: 2,
                title: "Wow Momo",
                image: "https://interiorwalaa.smepulse.in/serviceimg2.jpg",
                description: "Contemporary momo cafe with vibrant interiors"
            },
            {
                id: 3,
                title: "Eleven Bakehouse",
                image: "https://interiorwalaa.smepulse.in/serviceimg3.jpg",
                description: "Artisanal bakehouse with rustic charm"
            },
            {
                id: 4,
                title: "Coffee Corner",
                image: "https://interiorwalaa.smepulse.in/serviceimg1.jpg",
                description: "Cozy coffee shop with minimalist design"
            },
            {
                id: 5,
                title: "Sweet Treats",
                image: "https://interiorwalaa.smepulse.in/serviceimg2.jpg",
                description: "Dessert cafe with pastel aesthetics"
            }
        ],
        pub: [
            {
                id: 6,
                title: "The Urban Tap",
                image: "https://interiorwalaa.smepulse.in/serviceimg1.jpg",
                description: "Industrial pub design with exposed brick"
            },
            {
                id: 7,
                title: "Brewmaster's Den",
                image: "https://interiorwalaa.smepulse.in/serviceimg2.jpg",
                description: "Traditional pub with modern touches"
            },
            {
                id: 8,
                title: "Craft & Draft",
                image: "https://interiorwalaa.smepulse.in/serviceimg3.jpg",
                description: "Craft beer pub with wooden aesthetics"
            },
            {
                id: 9,
                title: "Sports Bar Central",
                image: "https://interiorwalaa.smepulse.in/serviceimg1.jpg",
                description: "Sports-themed pub with multiple screens"
            },
            {
                id: 10,
                title: "Jazz Lounge",
                image: "https://interiorwalaa.smepulse.in/serviceimg2.jpg",
                description: "Sophisticated jazz bar with intimate seating"
            }
        ],
        restaurant: [
            {
                id: 11,
                title: "Spice Garden",
                image: "https://interiorwalaa.smepulse.in/serviceimg1.jpg",
                description: "Fine dining with elegant ambiance"
            },
            {
                id: 12,
                title: "Ocean's Table",
                image: "https://interiorwalaa.smepulse.in/serviceimg2.jpg",
                description: "Seafood restaurant with coastal vibes"
            },
            {
                id: 13,
                title: "Metro Bistro",
                image: "https://interiorwalaa.smepulse.in/serviceimg3.jpg",
                description: "Urban bistro with contemporary design"
            },
            {
                id: 14,
                title: "Tuscany Villa",
                image: "https://interiorwalaa.smepulse.in/serviceimg1.jpg",
                description: "Italian restaurant with rustic charm"
            },
            {
                id: 15,
                title: "Sakura Sushi",
                image: "https://interiorwalaa.smepulse.in/serviceimg2.jpg",
                description: "Japanese restaurant with zen aesthetics"
            }
        ],
        hotel: [
            {
                id: 16,
                title: "Grand Plaza Lobby",
                image: "https://interiorwalaa.smepulse.in/serviceimg1.jpg",
                description: "Luxury hotel lobby with marble finishes"
            },
            {
                id: 17,
                title: "Boutique Suites",
                image: "https://interiorwalaa.smepulse.in/serviceimg2.jpg",
                description: "Boutique hotel with personalized comfort"
            },
            {
                id: 18,
                title: "Resort Paradise",
                image: "https://interiorwalaa.smepulse.in/serviceimg3.jpg",
                description: "Tropical resort with natural elements"
            },
            {
                id: 19,
                title: "Business Center",
                image: "https://interiorwalaa.smepulse.in/serviceimg1.jpg",
                description: "Corporate hotel with modern amenities"
            },
            {
                id: 20,
                title: "Heritage Palace",
                image: "https://interiorwalaa.smepulse.in/serviceimg2.jpg",
                description: "Heritage hotel with royal elegance"
            }
        ]
    }
};

// Helper function to get data for a specific tab
export const getPortfolioData = (tabKey: TabKey): PortfolioItem[] => {
    return servicesData.portfolioData[tabKey] || [];
};

// Helper function to get all tabs
export const getTabs = (): ServiceTab[] => {
    return servicesData.tabs;
};

// Helper function to get a specific portfolio item
export const getPortfolioItem = (tabKey: TabKey, itemId: number): PortfolioItem | undefined => {
    return servicesData.portfolioData[tabKey]?.find(item => item.id === itemId);
};
