export type Language = 'uz' | 'en' | 'ru' | 'tr' | 'es';

export type CategoryId = 
  | 'all'
  | 'ai'
  | 'web'
  | 'space'
  | 'design'
  | 'green'
  | 'business';

export type ProjectStage = 'Concept' | 'Prototype' | 'Alpha' | 'Production';
export type ImpactLevel = 'Transformative' | 'High' | 'Moderate';

export interface Author {
  id: string;
  name: string;
  role: string;
  avatar: string;
  email: string;
}

export interface Idea {
  id: string;
  title: string;
  summary: string;
  description: string;
  category: CategoryId;
  tags: string[];
  stage: ProjectStage;
  impact: ImpactLevel;
  likes: number;
  views: number;
  bookmarks: number;
  createdAt: string;
  author: Author;
  gradientTheme: string;
  featured?: boolean;
  externalLink?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: string;
  isLoggedIn: boolean;
  savedIdeaIds: string[];
  likedIdeaIds: string[];
  createdIdeaIds: string[];
  joinedDate: string;
}

export interface ToastMessage {
  id: string;
  title: string;
  message?: string;
  type: 'success' | 'error' | 'info';
}
