import { BlogsBannerResponse, BlogsMainResponse, BlogByIdResponse } from '@/types/blogs';
import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://dev-api-interiorwala.smeexclusive.com';

export async function getBlogsBanner(): Promise<BlogsBannerResponse> {
    try {
        const response = await axios.get(`${BASE_URL}/api/v1/blogs/banner`, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        return response.data;
    } catch (error) {
        console.error('Error fetching blogs banner data:', error);
        throw error;
    }
}

export async function getBlogsMain(): Promise<BlogsMainResponse> {
    try {
        const response = await axios.get(`${BASE_URL}/api/v1/blogs/main`, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        return response.data;
    } catch (error) {
        console.error('Error fetching blogs main data:', error);
        throw error;
    }
}

export async function getBlogById(blogId: string): Promise<BlogByIdResponse> {
    try {
        const response = await axios.get(`${BASE_URL}/api/v1/blogs/${blogId}`, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        return response.data;
    } catch (error) {
        console.error('Error fetching blog by ID:', error);
        throw error;
    }
}
