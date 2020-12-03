import {PostType} from './post-type';

export interface Subject {
  subject: string;
  topics: Topic[];
  tests?: Post[];
}

export interface Topic {
  title: string;
  links: Post[];
}

interface Post {
  title: string;
  description: string;
  url: string;
  type?: PostType | string;
  postId: string;
}
