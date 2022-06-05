import { PostElement } from './post-element';

export interface SchoolNews {
  title: string;
  date: string;
  url: string;
  content: PostElement[];
}
