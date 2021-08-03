import { PostElement } from './post-element';
import { Post, PostArticle } from './post';

export interface Subject {
  subject: string;
  description: Array<PostElement>;
  topics: string[] | Topic[];
  tests?: string[] | PostArticle[];
}

export interface Topic {
  title: string;
  _id: string;
  url: string;
  subject: string;
  links: string[] | Post[];
}
