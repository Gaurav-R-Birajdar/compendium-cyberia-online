
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
