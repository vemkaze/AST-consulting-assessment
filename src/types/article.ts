// Article data model
export interface Article {
  id: string;
  title: string;
  summary: string;
  content: string;
  image: string | null; // Can be null for articles without images
  category: string;
  author: string;
  publishedAt: string;
  readTime: number; // in minutes
  slug: string;
  isFeatured: boolean;
  isBreaking: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  color: string;
}

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  error?: string;
}
