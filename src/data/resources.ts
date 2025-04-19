
export interface Resource {
  id: string;
  title: string;
  description: string;
  link: string;
  type: 'video' | 'playlist' | 'article' | 'course' | 'tool' | 'website';
  category: string;
  tags: string[];
  featured?: boolean;
  thumbnail?: string;
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
    thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6'
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
    thumbnail: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b'
  },
  {
    id: '3',
    title: 'AWS Cloud Practitioner Essentials',
    description: 'Free course covering AWS cloud basics and fundamentals.',
    link: 'https://aws.amazon.com/training/digital/aws-cloud-practitioner-essentials/',
    type: 'course',
    category: 'devops',
    tags: ['aws', 'cloud', 'certification'],
    thumbnail: '/placeholder.svg'
  },
  {
    id: '4',
    title: 'Data Structures & Algorithms in 5 Minutes',
    description: 'Short videos explaining complex CS concepts in just 5 minutes each.',
    link: 'https://www.youtube.com/playlist?list=PLJKYKZKlE9AGPFPYkZA8GijgcSgR99RZb',
    type: 'playlist',
    category: 'cs-fundamentals',
    tags: ['algorithms', 'data structures', 'quick learning'],
    thumbnail: '/placeholder.svg'
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
    thumbnail: '/placeholder.svg'
  },
  {
    id: '6',
    title: 'Flutter & Dart - The Complete Guide',
    description: 'Free introduction videos to Flutter mobile development.',
    link: 'https://www.youtube.com/watch?v=GLSG_Wh_YWc',
    type: 'video',
    category: 'mobile-development',
    tags: ['flutter', 'dart', 'mobile development'],
    thumbnail: '/placeholder.svg'
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
    thumbnail: '/placeholder.svg'
  },
  {
    id: '8',
    title: 'freeCodeCamp',
    description: 'Learn to code with free interactive courses covering web development, data science, and more.',
    link: 'https://www.freecodecamp.org/',
    type: 'website',
    category: 'web-development',
    tags: ['web development', 'free courses', 'certification'],
    thumbnail: '/placeholder.svg'
  },
  {
    id: '9',
    title: 'The Complete Docker Course',
    description: 'Learn Docker, containers, and Kubernetes from basics to advanced.',
    link: 'https://www.youtube.com/watch?v=fqMOX6JJhGo',
    type: 'video',
    category: 'devops',
    tags: ['docker', 'containers', 'devops'],
    thumbnail: '/placeholder.svg'
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
    thumbnail: '/placeholder.svg'
  },
  {
    id: '11',
    title: 'Git & GitHub Crash Course',
    description: 'Everything you need to get started with Git and GitHub.',
    link: 'https://www.youtube.com/watch?v=RGOj5yH7evk',
    type: 'video',
    category: 'devops',
    tags: ['git', 'github', 'version control'],
    thumbnail: '/placeholder.svg'
  },
  {
    id: '12',
    title: 'Laracasts',
    description: 'Free video tutorials for modern web development including Laravel, Vue, and more.',
    link: 'https://laracasts.com/series/php-for-beginners-2023-edition',
    type: 'website',
    category: 'web-development',
    tags: ['php', 'laravel', 'web development'],
    thumbnail: '/placeholder.svg'
  },
  {
    id: '13',
    title: 'HTML & CSS Full Course',
    description: 'Complete HTML & CSS course from freeCodeCamp covering everything from basics to responsive design and flexbox.',
    link: 'https://www.youtube.com/watch?v=mU6anWqZJcc',
    type: 'video',
    category: 'web-development',
    tags: ['html', 'css', 'web development', 'beginner'],
    thumbnail: '/placeholder.svg'
  },
  {
    id: '14',
    title: 'Node.js Tutorial for Beginners',
    description: 'Learn Node.js fundamentals, Express.js, and building RESTful APIs in this comprehensive guide.',
    link: 'https://www.youtube.com/watch?v=TlB_eWDSMt4',
    type: 'video',
    category: 'web-development',
    tags: ['nodejs', 'express', 'backend'],
    thumbnail: '/placeholder.svg'
  },
  {
    id: '15',
    title: 'Vue.js Course for Beginners',
    description: 'Build modern web apps with Vue.js 3 - covers composition API, components, and routing.',
    link: 'https://www.youtube.com/watch?v=FXpIoQ_rT_c',
    type: 'video',
    category: 'web-development',
    tags: ['vue', 'javascript', 'frontend'],
    thumbnail: '/placeholder.svg'
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
    thumbnail: '/placeholder.svg'
  },
  {
    id: '17',
    title: 'TensorFlow 2.0 Complete Course',
    description: 'Learn deep learning with TensorFlow 2.0 - from basics to advanced neural networks.',
    link: 'https://www.youtube.com/watch?v=tPYj3fFJGjk',
    type: 'video',
    category: 'data-science',
    tags: ['tensorflow', 'deep learning', 'AI'],
    thumbnail: '/placeholder.svg'
  },
  {
    id: '18',
    title: 'Data Visualization with Python',
    description: 'Master data visualization using Matplotlib, Seaborn, and Plotly libraries.',
    link: 'https://www.youtube.com/watch?v=z9qUrt0bR0Q',
    type: 'playlist',
    category: 'data-science',
    tags: ['python', 'data visualization', 'matplotlib'],
    thumbnail: '/placeholder.svg'
  },
  {
    id: '19',
    title: 'Java Programming Masterclass',
    description: 'Comprehensive Java course covering core concepts, OOP, and advanced topics.',
    link: 'https://www.youtube.com/watch?v=eIrMbAQSU34',
    type: 'video',
    category: 'programming-languages',
    tags: ['java', 'programming', 'OOP'],
    featured: true,
    thumbnail: '/placeholder.svg'
  },
  {
    id: '20',
    title: 'C++ Programming Tutorial',
    description: 'Learn C++ programming from scratch - covers basic to advanced concepts.',
    link: 'https://www.youtube.com/watch?v=vLnPwxZdW4Y',
    type: 'video',
    category: 'programming-languages',
    tags: ['c++', 'programming', 'algorithms'],
    thumbnail: '/placeholder.svg'
  },
  {
    id: '21',
    title: 'Rust Programming Language Book',
    description: 'Official Rust programming language book - comprehensive guide for beginners.',
    link: 'https://doc.rust-lang.org/book/',
    type: 'website',
    category: 'programming-languages',
    tags: ['rust', 'programming', 'systems'],
    thumbnail: '/placeholder.svg'
  }
];

export const getFeaturedResources = () => resources.filter(resource => resource.featured);

export const getResourcesByCategory = (categoryId: string) => 
  resources.filter(resource => resource.category === categoryId);

