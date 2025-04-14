
export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  images: string[];
  categories: string[];
  content: string;
  featured?: boolean;
}
