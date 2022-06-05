import { Post } from './post';

interface Topic {
  title: string;
  _id: string;
  url: string;
  subject: string;
}

export interface TopicPopulated extends Topic {
  links: Post[];
}

export interface TopicUnpopulated extends Topic {
  links: string[];
}
