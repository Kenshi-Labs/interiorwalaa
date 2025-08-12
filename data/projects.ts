export interface Project {
  id: string;
  title: string;
  clientName: string;
  category: string;
  slug: string;
  description: string;
  content: ContentItem[];
  image: string;
  gallery: string[];

}

interface ContentItem {
  title: string;
  description: string[];
  image: string;
  reverse?: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Tech Startup Hub",
    clientName: "Tech Startup Hub",
    category: "Commercial",
    slug: "tech-startup-hub",
    description: "We've designed and curated pieces that are a cut above your average home goods.",
    content: [ {
        title: 'Our Service',
        description: [
          "A stunning transformation turns first-time visitors into loyal customers. In a city like Bangalore, where dining is as much about ambiance as it is about food, restaurant interior design plays a powerful role in customer experience. A clever redesign can breathe new life into a space, elevate a brand’s identity, and spark conversations.",
          "Here, we’ll walk you through how restaurant interior design influences customer behavior, showcase before-and-after moments from real projects, and explore how your restaurant can benefit from thoughtful design updates.",
          "Here, we’ll walk you through how restaurant interior design influences customer behavior, showcase before-and-after moments from real projects, and explore how your restaurant can benefit from thoughtful design updates."
        ],
        image: 'https://interiorwalaa.smepulse.in/Rectangle%2034626837.png'
      },
      {
        title: 'Handpicked for client',
        description: [
          "A stunning transformation turns first-time visitors into loyal customers. In a city like Bangalore, where dining is as much about ambiance as it is about food, restaurant interior design plays a powerful role in customer experience. A clever redesign can breathe new life into a space, elevate a brand’s identity, and spark conversations.",
          "Here, we’ll walk you through how restaurant interior design influences customer behavior, showcase before-and-after moments from real projects, and explore how your restaurant can benefit from thoughtful design updates.",
          "Here, we’ll walk you through how restaurant interior design influences customer behavior, showcase before-and-after moments from real projects, and explore how your restaurant can benefit from thoughtful design updates."
        ],
        image: 'https://interiorwalaa.smepulse.in/interior%20design.png',
        reverse: true
      }],
    image: "https://interiorwalaa.smepulse.in/643d0a12c41f409f8b9ad632431f1f7e02deeb6f.jpg",
    gallery: [
      "https://interiorwalaa.smepulse.in/643d0a12c41f409f8b9ad632431f1f7e02deeb6f.jpg",
      "https://interiorwalaa.smepulse.in/21aac1dbc99e33d922b13dc7d7677367fa7d906d.jpg",
      "https://interiorwalaa.smepulse.in/a506b29235acd804840bf8e65834cdc504afc47f.jpg"
    ]
  },
  {
    id: "2",
    title: "Urban Coffee Co",
    clientName: "Urban Coffee Co",
    category: "Hospitality",
    slug: "urban-coffee-co",
    description: "We've designed and curated pieces that are a cut above your average home goods.",
  content: [ {
        title: 'Our Service',
        description: [
          "A stunning transformation turns first-time visitors into loyal customers. In a city like Bangalore, where dining is as much about ambiance as it is about food, restaurant interior design plays a powerful role in customer experience. A clever redesign can breathe new life into a space, elevate a brand’s identity, and spark conversations.",
          "Here, we’ll walk you through how restaurant interior design influences customer behavior, showcase before-and-after moments from real projects, and explore how your restaurant can benefit from thoughtful design updates.",
          "Here, we’ll walk you through how restaurant interior design influences customer behavior, showcase before-and-after moments from real projects, and explore how your restaurant can benefit from thoughtful design updates."
        ],
        image: 'https://interiorwalaa.smepulse.in/Rectangle%2034626837.png'
      },
      {
        title: 'Handpicked for client',
        description: [
          "A stunning transformation turns first-time visitors into loyal customers. In a city like Bangalore, where dining is as much about ambiance as it is about food, restaurant interior design plays a powerful role in customer experience. A clever redesign can breathe new life into a space, elevate a brand’s identity, and spark conversations.",
          "Here, we’ll walk you through how restaurant interior design influences customer behavior, showcase before-and-after moments from real projects, and explore how your restaurant can benefit from thoughtful design updates.",
          "Here, we’ll walk you through how restaurant interior design influences customer behavior, showcase before-and-after moments from real projects, and explore how your restaurant can benefit from thoughtful design updates."
        ],
        image: 'https://interiorwalaa.smepulse.in/interior%20design.png',
        reverse: true
      }],
    image: "https://interiorwalaa.smepulse.in/21aac1dbc99e33d922b13dc7d7677367fa7d906d.jpg",
    gallery: [
      "https://interiorwalaa.smepulse.in/21aac1dbc99e33d922b13dc7d7677367fa7d906d.jpg",
      "https://interiorwalaa.smepulse.in/a506b29235acd804840bf8e65834cdc504afc47f.jpg",
      "https://interiorwalaa.smepulse.in/bfac9f222d64991bc5cea91fdacd015c3717b851.jpg"
    ],
  },
  {
    id: "3",
    title: "The Hendersons",
    clientName: "The Hendersons",
    category: "Residential",
    slug: "the-hendersons",
    description: "We've designed and curated pieces that are a cut above your average home goods.",
    content: [ {
        title: 'Our Service',
        description: [
          "A stunning transformation turns first-time visitors into loyal customers. In a city like Bangalore, where dining is as much about ambiance as it is about food, restaurant interior design plays a powerful role in customer experience. A clever redesign can breathe new life into a space, elevate a brand’s identity, and spark conversations.",
          "Here, we’ll walk you through how restaurant interior design influences customer behavior, showcase before-and-after moments from real projects, and explore how your restaurant can benefit from thoughtful design updates.",
          "Here, we’ll walk you through how restaurant interior design influences customer behavior, showcase before-and-after moments from real projects, and explore how your restaurant can benefit from thoughtful design updates."
        ],
        image: 'https://interiorwalaa.smepulse.in/Rectangle%2034626837.png'
      },
      {
        title: 'Handpicked for client',
        description: [
          "A stunning transformation turns first-time visitors into loyal customers. In a city like Bangalore, where dining is as much about ambiance as it is about food, restaurant interior design plays a powerful role in customer experience. A clever redesign can breathe new life into a space, elevate a brand’s identity, and spark conversations.",
          "Here, we’ll walk you through how restaurant interior design influences customer behavior, showcase before-and-after moments from real projects, and explore how your restaurant can benefit from thoughtful design updates.",
          "Here, we’ll walk you through how restaurant interior design influences customer behavior, showcase before-and-after moments from real projects, and explore how your restaurant can benefit from thoughtful design updates."
        ],
        image: 'https://interiorwalaa.smepulse.in/interior%20design.png',
        reverse: true
      }],
    image: "https://interiorwalaa.smepulse.in/a506b29235acd804840bf8e65834cdc504afc47f.jpg",
    gallery: [
      "https://interiorwalaa.smepulse.in/a506b29235acd804840bf8e65834cdc504afc47f.jpg",
      "https://interiorwalaa.smepulse.in/bfac9f222d64991bc5cea91fdacd015c3717b851.jpg",
      "https://interiorwalaa.smepulse.in/e853760eeddaf4327b3e5b027b7957b9bf39d601.jpg"
    ],

  },
  {
    id: "4",
    title: "Creative Agency",
    clientName: "Creative Agency",
    category: "Office",
    slug: "creative-agency",
    description: "We've designed and curated pieces that are a cut above your average home goods.",
    content: [ {
        title: 'Our Service',
        description: [
          "A stunning transformation turns first-time visitors into loyal customers. In a city like Bangalore, where dining is as much about ambiance as it is about food, restaurant interior design plays a powerful role in customer experience. A clever redesign can breathe new life into a space, elevate a brand’s identity, and spark conversations.",
          "Here, we’ll walk you through how restaurant interior design influences customer behavior, showcase before-and-after moments from real projects, and explore how your restaurant can benefit from thoughtful design updates.",
          "Here, we’ll walk you through how restaurant interior design influences customer behavior, showcase before-and-after moments from real projects, and explore how your restaurant can benefit from thoughtful design updates."
        ],
        image: 'https://interiorwalaa.smepulse.in/Rectangle%2034626837.png'
      },
      {
        title: 'Handpicked for client',
        description: [
          "A stunning transformation turns first-time visitors into loyal customers. In a city like Bangalore, where dining is as much about ambiance as it is about food, restaurant interior design plays a powerful role in customer experience. A clever redesign can breathe new life into a space, elevate a brand’s identity, and spark conversations.",
          "Here, we’ll walk you through how restaurant interior design influences customer behavior, showcase before-and-after moments from real projects, and explore how your restaurant can benefit from thoughtful design updates.",
          "Here, we’ll walk you through how restaurant interior design influences customer behavior, showcase before-and-after moments from real projects, and explore how your restaurant can benefit from thoughtful design updates."
        ],
        image: 'https://interiorwalaa.smepulse.in/interior%20design.png',
        reverse: true
      }],
    image: "https://interiorwalaa.smepulse.in/bfac9f222d64991bc5cea91fdacd015c3717b851.jpg",
    gallery: [
      "https://interiorwalaa.smepulse.in/bfac9f222d64991bc5cea91fdacd015c3717b851.jpg",
      "https://interiorwalaa.smepulse.in/e853760eeddaf4327b3e5b027b7957b9bf39d601.jpg",
      "https://interiorwalaa.smepulse.in/643d0a12c41f409f8b9ad632431f1f7e02deeb6f.jpg"
    ],
  },
  {
    id: "5",
    title: "Villa Moderna",
    clientName: "Villa Moderna",
    category: "Residential",
    slug: "villa-moderna",
    description: "We've designed and curated pieces that are a cut above your average home goods.",
    content: [ {
        title: 'Our Service',
        description: [
          "A stunning transformation turns first-time visitors into loyal customers. In a city like Bangalore, where dining is as much about ambiance as it is about food, restaurant interior design plays a powerful role in customer experience. A clever redesign can breathe new life into a space, elevate a brand’s identity, and spark conversations.",
          "Here, we’ll walk you through how restaurant interior design influences customer behavior, showcase before-and-after moments from real projects, and explore how your restaurant can benefit from thoughtful design updates.",
          "Here, we’ll walk you through how restaurant interior design influences customer behavior, showcase before-and-after moments from real projects, and explore how your restaurant can benefit from thoughtful design updates."
        ],
        image: 'https://interiorwalaa.smepulse.in/Rectangle%2034626837.png'
      },
      {
        title: 'Handpicked for client',
        description: [
          "A stunning transformation turns first-time visitors into loyal customers. In a city like Bangalore, where dining is as much about ambiance as it is about food, restaurant interior design plays a powerful role in customer experience. A clever redesign can breathe new life into a space, elevate a brand’s identity, and spark conversations.",
          "Here, we’ll walk you through how restaurant interior design influences customer behavior, showcase before-and-after moments from real projects, and explore how your restaurant can benefit from thoughtful design updates.",
          "Here, we’ll walk you through how restaurant interior design influences customer behavior, showcase before-and-after moments from real projects, and explore how your restaurant can benefit from thoughtful design updates."
        ],
        image: 'https://interiorwalaa.smepulse.in/interior%20design.png',
        reverse: true
      }],
    image: "https://interiorwalaa.smepulse.in/e853760eeddaf4327b3e5b027b7957b9bf39d601.jpg",
    gallery: [
      "https://interiorwalaa.smepulse.in/e853760eeddaf4327b3e5b027b7957b9bf39d601.jpg",
      "https://interiorwalaa.smepulse.in/643d0a12c41f409f8b9ad632431f1f7e02deeb6f.jpg",
      "https://interiorwalaa.smepulse.in/21aac1dbc99e33d922b13dc7d7677367fa7d906d.jpg"
    ],
  },
  {
    id: "6",
    title: "Residential Interior Design",
    clientName: "Residential Interior Design",
    category: "Residential",
    slug: "residential-interior-design",
    description: "We've designed and curated pieces that are a cut above your average home goods.",
    content:[ {
        title: 'Our Service',
        description: [
          "A stunning transformation turns first-time visitors into loyal customers. In a city like Bangalore, where dining is as much about ambiance as it is about food, restaurant interior design plays a powerful role in customer experience. A clever redesign can breathe new life into a space, elevate a brand’s identity, and spark conversations.",
          "Here, we’ll walk you through how restaurant interior design influences customer behavior, showcase before-and-after moments from real projects, and explore how your restaurant can benefit from thoughtful design updates.",
          "Here, we’ll walk you through how restaurant interior design influences customer behavior, showcase before-and-after moments from real projects, and explore how your restaurant can benefit from thoughtful design updates."
        ],
        image: 'https://interiorwalaa.smepulse.in/Rectangle%2034626837.png'
      },
      {
        title: 'Handpicked for client',
        description: [
          "A stunning transformation turns first-time visitors into loyal customers. In a city like Bangalore, where dining is as much about ambiance as it is about food, restaurant interior design plays a powerful role in customer experience. A clever redesign can breathe new life into a space, elevate a brand’s identity, and spark conversations.",
          "Here, we’ll walk you through how restaurant interior design influences customer behavior, showcase before-and-after moments from real projects, and explore how your restaurant can benefit from thoughtful design updates.",
          "Here, we’ll walk you through how restaurant interior design influences customer behavior, showcase before-and-after moments from real projects, and explore how your restaurant can benefit from thoughtful design updates."
        ],
        image: 'https://interiorwalaa.smepulse.in/interior%20design.png',
        reverse: true
      }],
    image: "https://interiorwalaa.smepulse.in/a506b29235acd804840bf8e65834cdc504afc47f.jpg",
    gallery: [
      "https://interiorwalaa.smepulse.in/a506b29235acd804840bf8e65834cdc504afc47f.jpg",
      "https://interiorwalaa.smepulse.in/bfac9f222d64991bc5cea91fdacd015c3717b851.jpg",
      "https://interiorwalaa.smepulse.in/e853760eeddaf4327b3e5b027b7957b9bf39d601.jpg"
    ],
  },
  {
    id: "7",
    title: "Handpicked for Client",
    clientName: "Restaurant Interior Design",
    category: "Hospitality",
    slug: "handpicked-for-client",
    description: "We've designed and curated pieces that are a cut above your average home goods.",
    content: [ {
        title: 'Our Service',
        description: [
          "A stunning transformation turns first-time visitors into loyal customers. In a city like Bangalore, where dining is as much about ambiance as it is about food, restaurant interior design plays a powerful role in customer experience. A clever redesign can breathe new life into a space, elevate a brand’s identity, and spark conversations.",
          "Here, we’ll walk you through how restaurant interior design influences customer behavior, showcase before-and-after moments from real projects, and explore how your restaurant can benefit from thoughtful design updates.",
          "Here, we’ll walk you through how restaurant interior design influences customer behavior, showcase before-and-after moments from real projects, and explore how your restaurant can benefit from thoughtful design updates."
        ],
        image: 'https://interiorwalaa.smepulse.in/Rectangle%2034626837.png'
      },
      {
        title: 'Handpicked for client',
        description: [
          "A stunning transformation turns first-time visitors into loyal customers. In a city like Bangalore, where dining is as much about ambiance as it is about food, restaurant interior design plays a powerful role in customer experience. A clever redesign can breathe new life into a space, elevate a brand’s identity, and spark conversations.",
          "Here, we’ll walk you through how restaurant interior design influences customer behavior, showcase before-and-after moments from real projects, and explore how your restaurant can benefit from thoughtful design updates.",
          "Here, we’ll walk you through how restaurant interior design influences customer behavior, showcase before-and-after moments from real projects, and explore how your restaurant can benefit from thoughtful design updates."
        ],
        image: 'https://interiorwalaa.smepulse.in/interior%20design.png',
        reverse: true
      }],
    image: "https://interiorwalaa.smepulse.in/21aac1dbc99e33d922b13dc7d7677367fa7d906d.jpg",
    gallery: [
      "https://interiorwalaa.smepulse.in/21aac1dbc99e33d922b13dc7d7677367fa7d906d.jpg",
      "https://interiorwalaa.smepulse.in/643d0a12c41f409f8b9ad632431f1f7e02deeb6f.jpg",
      "https://interiorwalaa.smepulse.in/a506b29235acd804840bf8e65834cdc504afc47f.jpg"
    ],
  }
];
