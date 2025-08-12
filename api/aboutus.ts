import { AboutUsBannerResponse, AboutUsMainResponse, AboutUsGalleryResponse } from '@/types/aboutus';
import axios from 'axios';

const BASE_URL = process.env.API_BASE_URL || 'https://dev-api-interiorwala.smeexclusive.com';

export async function getAboutUsBanner(): Promise<AboutUsBannerResponse> {
    try {
        const response = await axios.get(`${BASE_URL}/api/v1/about-us/banner`, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        return response.data;
    } catch (error) {
        console.error('Error fetching about-us banner data:', error);
        throw error;
    }
}

export async function getAboutUsMain(): Promise<AboutUsMainResponse> {
    try {
        const response = await axios.get(`${BASE_URL}/api/v1/about-us/main`, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        return response.data;
    } catch (error) {
        console.error('Error fetching about-us main data:', error);
        throw error;
    }
}

export async function getAboutUsGallery(): Promise<AboutUsGalleryResponse> {
    try {
        const response = await axios.get(`${BASE_URL}/api/v1/about-us/gallery`, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        return response.data;
    } catch (error) {
        console.error('Error fetching about-us gallery data:', error);
        throw error;
    }
}
