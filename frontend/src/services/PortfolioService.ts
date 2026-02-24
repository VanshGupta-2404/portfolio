export interface Project {
    title: string;
    tech: string[];
    desc: string;
    link?: string;
    github?: string;
}

export interface Experience {
    role: string;
    company: string;
    date: string;
    desc: string;
}

export interface Education {
    school: string;
    degree: string;
    duration: string;
    grade: string;
}

export interface PortfolioData {
    name: string;
    email: string;
    phone: string;
    location: string;
    github: string;
    linkedin: string;
    leetcode: string;
    about: string;
    education: Education;
    experience: Experience[];
    projects: Project[];
    skills: string[];
    achievements: string[];
    certifications: string[];
}

const API_BASE_URL = 'http://localhost:8080/api';

export const fetchPortfolioData = async (): Promise<PortfolioData> => {
    const response = await fetch(`${API_BASE_URL}/portfolio`);
    if (!response.ok) {
        throw new Error('Failed to fetch portfolio data');
    }
    return response.json();
};
