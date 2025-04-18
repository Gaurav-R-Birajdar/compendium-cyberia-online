
export interface Resource {
  id: string;
  title: string;
  description: string;
  link: string;
  type: 'video' | 'playlist' | 'article' | 'course' | 'tool' | 'website';
  category: string;
  tags: string[];
  featured?: boolean;
  image?: string;
}

export const categories = [
  {
    id: 'programming-languages',
    name: 'Programming Languages',
    icon: '💻',
    description: 'Resources for learning various programming languages like Python, JavaScript, Java, and more.'
  },
  {
    id: 'web-development',
    name: 'Web Development',
    icon: '🌐',
    description: 'Front-end, back-end, and full-stack web development resources.'
  },
  {
    id: 'data-science',
    name: 'Data Science & AI',
    icon: '📊',
    description: 'Machine learning, data analysis, and artificial intelligence.'
  },
  {
    id: 'devops',
    name: 'DevOps & Cloud',
    icon: '☁️',
    description: 'Cloud platforms, CI/CD, containerization, and infrastructure.'
  },
  {
    id: 'cs-fundamentals',
    name: 'CS Fundamentals',
    icon: '🧮',
    description: 'Algorithms, data structures, and computer science theory.'
  },
  {
    id: 'mobile-development',
    name: 'Mobile Development',
    icon: '📱',
    description: 'iOS, Android, and cross-platform mobile app development.'
  }
];

export const resources: Resource[] = [
  {
    id: '1',
    title: 'JavaScript Crash Course',
    description: 'Learn JavaScript in 1 hour with this fast-paced beginner-friendly tutorial.',
    link: 'https://www.youtube.com/watch?v=W6NZfCO5SIk',
    type: 'video',
    category: 'programming-languages',
    tags: ['javascript', 'web development', 'beginner'],
    featured: true,
    image: '/placeholder.svg'
  },
  {
    id: '2',
    title: 'Python for Everybody',
    description: 'Comprehensive Python programming course for beginners by Dr. Charles Severance.',
    link: 'https://www.py4e.com/',
    type: 'course',
    category: 'programming-languages',
    tags: ['python', 'beginner', 'programming'],
    featured: true,
    image: '/placeholder.svg'
  },
  {
    id: '3',
    title: 'AWS Cloud Practitioner Essentials',
    description: 'Free course covering AWS cloud basics and fundamentals.',
    link: 'https://aws.amazon.com/training/digital/aws-cloud-practitioner-essentials/',
    type: 'course',
    category: 'devops',
    tags: ['aws', 'cloud', 'certification'],
    image: '/placeholder.svg'
  },
  {
    id: '4',
    title: 'Data Structures & Algorithms in 5 Minutes',
    description: 'Short videos explaining complex CS concepts in just 5 minutes each.',
    link: 'https://www.youtube.com/playlist?list=PLJKYKZKlE9AGPFPYkZA8GijgcSgR99RZb',
    type: 'playlist',
    category: 'cs-fundamentals',
    tags: ['algorithms', 'data structures', 'quick learning'],
    image: '/placeholder.svg'
  },
  {
    id: '5',
    title: 'React JS Crash Course',
    description: 'Build a task tracker app with React in 1.5 hours.',
    link: 'https://www.youtube.com/watch?v=w7ejDZ8SWv8',
    type: 'video',
    category: 'web-development',
    tags: ['react', 'javascript', 'web development'],
    featured: true,
    image: '/placeholder.svg'
  },
  {
    id: '6',
    title: 'Flutter & Dart - The Complete Guide',
    description: 'Free introduction videos to Flutter mobile development.',
    link: 'https://www.youtube.com/watch?v=GLSG_Wh_YWc',
    type: 'video',
    category: 'mobile-development',
    tags: ['flutter', 'dart', 'mobile development'],
    image: '/placeholder.svg'
  },
  {
    id: '7',
    title: 'Machine Learning for Beginners',
    description: 'Microsoft\'s ML for Beginners curriculum with 24 lessons.',
    link: 'https://github.com/microsoft/ML-For-Beginners',
    type: 'course',
    category: 'data-science',
    tags: ['machine learning', 'AI', 'data science'],
    featured: true,
    image: '/placeholder.svg'
  },
  {
    id: '8',
    title: 'freeCodeCamp',
    description: 'Learn to code with free interactive courses covering web development, data science, and more.',
    link: 'https://www.freecodecamp.org/',
    type: 'website',
    category: 'web-development',
    tags: ['web development', 'free courses', 'certification'],
    image: '/placeholder.svg'
  },
  {
    id: '9',
    title: 'The Complete Docker Course',
    description: 'Learn Docker, containers, and Kubernetes from basics to advanced.',
    link: 'https://www.youtube.com/watch?v=fqMOX6JJhGo',
    type: 'video',
    category: 'devops',
    tags: ['docker', 'containers', 'devops'],
    image: '/placeholder.svg'
  },
  {
    id: '10',
    title: 'Roadmap.sh',
    description: 'Community-driven roadmaps for different tech career paths with guides and resources.',
    link: 'https://roadmap.sh/',
    type: 'website',
    category: 'cs-fundamentals',
    tags: ['career', 'learning path', 'guide'],
    featured: true,
    image: '/placeholder.svg'
  },
  {
    id: '11',
    title: 'Git & GitHub Crash Course',
    description: 'Everything you need to get started with Git and GitHub.',
    link: 'https://www.youtube.com/watch?v=RGOj5yH7evk',
    type: 'video',
    category: 'devops',
    tags: ['git', 'github', 'version control'],
    image: '/placeholder.svg'
  },
  {
    id: '12',
    title: 'Laracasts',
    description: 'Free video tutorials for modern web development including Laravel, Vue, and more.',
    link: 'https://laracasts.com/series/php-for-beginners-2023-edition',
    type: 'website',
    category: 'web-development',
    tags: ['php', 'laravel', 'web development'],
    image: '/placeholder.svg'
  }
];

export const getFeaturedResources = () => resources.filter(resource => resource.featured);

export const getResourcesByCategory = (categoryId: string) => 
  resources.filter(resource => resource.category === categoryId);
