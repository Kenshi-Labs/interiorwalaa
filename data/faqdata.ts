export interface FAQItem {
    id: number;
    question: string;
    answer: string;
}

export const faqData: FAQItem[] = [
    {
        id: 0,
        question: "How do I get started with your design services?",
        answer: "Getting started is simple! Contact us through our website or phone to schedule a consultation. We'll discuss your vision, space requirements, and budget to create a customized design plan for your project."
    },
    {
        id: 1,
        question: "Why choose Interiorwalaa for my café design?",
        answer: "We specialize in commercial interior design with over 10 years of experience and 80+ successful projects. Our expertise spans cafés, restaurants, pubs, and hotels, ensuring industry-specific solutions that drive business success."
    },
    {
        id: 2,
        question: "Do you offer sustainable design options?",
        answer: "Absolutely! We're committed to eco-friendly design practices. We offer sustainable material options, energy-efficient lighting solutions, and environmentally conscious design approaches that reduce your carbon footprint while maintaining aesthetic appeal."
    },
    {
        id: 3,
        question: "Can I see a preview of the design before execution?",
        answer: "Yes! We provide detailed 3D renderings so you can visualize the final design before any work begins. This helps you make confident decisions and request changes if needed. Our goal is to ensure complete alignment before moving to execution."
    },
    {
        id: 4,
        question: "What's the typical project timeline?",
        answer: "Project timelines vary based on scope and complexity. Typically, design development takes 2-4 weeks, followed by 4-8 weeks for execution. We provide detailed timelines during consultation and keep you updated throughout the process."
    },
    {
        id: 5,
        question: "Do I need to hire separate contractors for execution?",
        answer: "No need! We offer comprehensive services from design to execution. Our experienced team handles everything in-house, including project management, contractor coordination, and quality control, ensuring seamless delivery."
    }
];
