import { Quiz } from './quiz';
import { IndexCards } from './index-cards';

export interface Subject {
  subject: string;
  description: string;
  topics: string[] | Topic[];
  quizzes?: string[] | Quiz[];
  indexcards?: string[] | IndexCards[];
  tests?: string[];
}

export interface Topic {
  title: string;
  links: string[];
}
