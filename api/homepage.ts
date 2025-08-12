import { HomepageHeroResponse, HomepageAboutUsResponse, HomepageServicesResponse, HomepageWhyChooseUsResponse, HomepageFAQResponse, HomepageTestimonialsResponse, HomepageVideoResponse } from '@/types/homepage';
import axios from 'axios';

const BASE_URL = process.env.API_BASE_URL || 'https://dev-api-interiorwala.smeexclusive.com';

export async function getHomepageHero(): Promise<HomepageHeroResponse> {
    try {
        const response = await axios.get(`${BASE_URL}/api/v1/homepage/hero`, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        return response.data;
    } catch (error) {
        console.error('Error fetching homepage hero data:', error);
        throw error;
    }
}

export async function getHomepageAboutUs(): Promise<HomepageAboutUsResponse> {
    try {
        const response = await axios.get(`${BASE_URL}/api/v1/homepage/about-us`, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        return response.data;
    } catch (error) {
        console.error('Error fetching homepage about-us data:', error);
        throw error;
    }
}

export async function getHomepageServices(): Promise<HomepageServicesResponse> {
    try {
        const response = await axios.get(`${BASE_URL}/api/v1/homepage/services`, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        return response.data;
    } catch (error) {
        console.error('Error fetching homepage services data:', error);
        throw error;
    }
}

export async function getHomepageWhyChooseUs(): Promise<HomepageWhyChooseUsResponse> {
    try {
        const response = await axios.get(`${BASE_URL}/api/v1/homepage/why-choose-us`, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        return response.data;
    } catch (error) {
        console.error('Error fetching homepage why-choose-us data:', error);
        throw error;
    }
}

export async function getHomepageFAQ(): Promise<HomepageFAQResponse> {
    try {
        const response = await axios.get(`${BASE_URL}/api/v1/homepage/faq`, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        return response.data;
    } catch (error) {
        console.error('Error fetching homepage FAQ data:', error);
        throw error;
    }
}

export async function getHomepageTestimonials(): Promise<HomepageTestimonialsResponse> {
    try {
        const response = await axios.get(`${BASE_URL}/api/v1/homepage/testimonials`, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        return response.data;
    } catch (error) {
        console.error('Error fetching homepage testimonials data:', error);
        throw error;
    }
}

export async function getHomepageVideo(): Promise<HomepageVideoResponse> {
    try {
        const response = await axios.get(`${BASE_URL}/api/v1/homepage/video`, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        return response.data;
    } catch (error) {
        console.error('Error fetching homepage video data:', error);
        throw error;
    }
}
