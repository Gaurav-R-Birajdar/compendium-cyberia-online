
import type { Resource } from './types';

export const resourcesDataScience: Resource[] = [
  {
    id: '7',
    title: 'Machine Learning for Beginners',
    description: "Microsoft's ML for Beginners curriculum with 24 lessons.",
    link: 'https://github.com/microsoft/ML-For-Beginners',
    type: 'course',
    category: 'data-science',
    tags: ['machine learning', 'AI', 'data science'],
    featured: true,
    thumbnail: '/placeholder.svg',
  },
  {
    id: '16',
    title: 'Python for Data Science Handbook',
    description: 'Free online book covering NumPy, Pandas, Matplotlib, and Scikit-learn for data analysis.',
    link: 'https://jakevdp.github.io/PythonDataScienceHandbook/',
    type: 'website',
    category: 'data-science',
    tags: ['python', 'data science', 'pandas', 'numpy'],
    featured: true,
    thumbnail: '/placeholder.svg',
  },
  {
    id: '17',
    title: 'TensorFlow 2.0 Complete Course',
    description: 'Learn deep learning with TensorFlow 2.0 - from basics to advanced neural networks.',
    link: 'https://www.youtube.com/watch?v=tPYj3fFJGjk',
    type: 'video',
    category: 'data-science',
    tags: ['tensorflow', 'deep learning', 'AI'],
    thumbnail: '/placeholder.svg',
  },
  {
    id: '18',
    title: 'Data Visualization with Python',
    description: 'Master data visualization using Matplotlib, Seaborn, and Plotly libraries.',
    link: 'https://www.youtube.com/watch?v=z9qUrt0bR0Q',
    type: 'playlist',
    category: 'data-science',
    tags: ['python', 'data visualization', 'matplotlib'],
    thumbnail: '/placeholder.svg',
  },
];
