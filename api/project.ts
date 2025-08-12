import { ProjectBannerResponse, LatestProjectsResponse, ProjectsMainResponse } from '@/types/project';
import axios from 'axios';

const BASE_URL = process.env.API_BASE_URL || 'https://dev-api-interiorwala.smeexclusive.com';

export async function getProjectBanner(): Promise<ProjectBannerResponse> {
    try {
        const response = await axios.get(`${BASE_URL}/api/v1/projects/banner`, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching project banner data:', error);
        throw error;
    }
}

export async function getLatestProjects(): Promise<LatestProjectsResponse> {
    try {
        const response = await axios.get(`${BASE_URL}/api/v1/projects/latest`, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching latest projects data:', error);
        throw error;
    }
}

export async function getProjectsMain(): Promise<ProjectsMainResponse> {
    try {
        const response = await axios.get(`${BASE_URL}/api/v1/projects/main`, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching projects main data:', error);
        throw error;
    }
}
