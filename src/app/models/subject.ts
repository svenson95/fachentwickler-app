import { PostType } from './post-type';

export interface Subject {
  subject: string;
  topics: Topic[];
  tests?: SubjectPost[];
}

export interface Topic {
  title: string;
  links: SubjectPost[];
}

export interface SubjectPost {
  title: string;
  description: string;
  url: string;
  type?: PostType | string;
  postId: string;
  lessonDate?: string;
  subject?: string;
}
