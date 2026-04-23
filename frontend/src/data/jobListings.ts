import type { JobListing } from '../types/job'

export const jobListings: JobListing[] = [
    {
        id: 'job-1',
        title: 'Senior Systems Architect',
        company: 'Vertex Systems',
        location: 'San Francisco, CA',
        tags: ['Kubernetes', 'SaaS', 'Docker', 'Go', 'Redis'],
        type: 'Full-time',
        postedLabel: '2 days ago',
    },
    {
        id: 'job-2',
        title: 'Product Designer (UI/UX)',
        company: 'Linear Form',
        location: 'London, UK',
        tags: ['Design Systems', 'Figma', 'Prototyping', 'User Research'],
        type: 'Remote',
        postedLabel: '2 days ago',
    },
    {
        id: 'job-3',
        title: 'Go Developer',
        company: 'CloudScale Systems',
        location: 'Austin, TX',
        tags: ['Go', 'Cloud Architecture', 'gRPC', 'PostgreSQL'],
        type: 'Full-time',
        postedLabel: '2 days ago',
    },
]
