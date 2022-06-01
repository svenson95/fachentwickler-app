import { Post, PostArticle } from './post';
import { PostElement } from './post-element';

export interface Topic {
  title: string;
  _id: string;
  url: string;
  subject: string;
  links: Post[];
}

export interface Subject {
  subject: string;
  description: Array<PostElement>;
  topics: Topic[];
  tests?: PostArticle[];
}
