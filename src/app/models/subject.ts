import { PostElement } from './post-element';

export interface Subject {
  subject: string;
  description: Array<PostElement>;
  topics: string[] | Topic[];
  tests?: string[];
}

export interface Topic {
  title: string;
  _id: string;
  url: string;
  subject: string;
  links: string[];
}
