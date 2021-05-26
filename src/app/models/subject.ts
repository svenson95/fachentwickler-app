import { Quiz } from './quiz';
import { IndexCards } from './index-cards';
import { Matching } from './matching-piece';
import { PostElement } from './post';

export interface Subject {
  subject: string;
  description: Array<PostElement>;
  topics: string[] | Topic[];
  quizzes?: string[] | Quiz[];
  indexcards?: string[] | IndexCards[];
  matchings?: string[] | Matching[];
  tests?: string[];
}

export interface Topic {
  title: string;
  _id: string;
  url: string;
  subject: string;
  links: string[];
}
