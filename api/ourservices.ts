import { OurServicesBannerResponse, OurServicesListResponse } from '@/types/ourservices';
import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://dev-api-interiorwala.smeexclusive.com';

export async function getOurServicesBanner(): Promise<OurServicesBannerResponse> {
    try {
        const response = await axios.get(`${BASE_URL}/api/v1/services/banner`, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        return response.data;
    } catch (error) {
        console.error('Error fetching our-services banner data:', error);
        throw error;
    }
}

export async function getOurServicesList(): Promise<OurServicesListResponse> {
    try {
        const response = await axios.get(`${BASE_URL}/api/v1/services/list`, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        return response.data;
    } catch (error) {
        console.error('Error fetching our-services list data:', error);
        throw error;
    }
}
