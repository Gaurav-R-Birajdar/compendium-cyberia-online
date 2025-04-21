
import type { Resource } from './types';

export const resourcesCloudComputing: Resource[] = [
  {
    id: '31',
    title: 'Google Cloud Training',
    description: 'Official free training from Google on Cloud fundamentals.',
    link: 'https://cloudskillsboost.google/',
    type: 'website',
    category: 'cloud-computing',
    tags: ['cloud', 'gcp', 'infrastructure'],
    thumbnail: 'https://images.unsplash.com/photo-1500673922987-e212871fec22'
  },
  {
    id: '34',
    title: 'AWS Training and Certification',
    description: 'Official AWS learning platform: free training, learning paths, exam guides.',
    link: 'https://aws.amazon.com/training/',
    type: 'website',
    category: 'cloud-computing',
    tags: ['cloud', 'aws', 'certification'],
    thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475'
  },
  {
    id: '35',
    title: 'Microsoft Learn: Azure',
    description: 'Free Microsoft Azure training modules and learning paths.',
    link: 'https://learn.microsoft.com/en-us/training/azure/',
    type: 'website',
    category: 'cloud-computing',
    tags: ['cloud', 'azure', 'microsoft'],
    thumbnail: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7'
  }
];
