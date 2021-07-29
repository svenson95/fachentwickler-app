import { PostType } from './post-type';
import { PostElement } from './post-element';

export interface Post {
  _id?: string;
  topicId?: string;
  url: string;
  title: string;
  description: string;
  subject: string;
  type: PostType | string;
  lessonDate: string;
  lastUpdate: string;
  schoolWeek: string;
  elements?: PostElement[] | IndexCardQuestion[] | MatchingPair[][] | QuizQuestion[];
}

export interface PostArticle extends Post {
  elements: PostElement[];
}

export interface PostQuiz extends Post {
  elements: QuizQuestion[];
}

interface QuizQuestion {
  question: string;
  answer: number;
  choice1: string;
  choice2: string;
}

export interface PostIndexCards extends Post {
  elements: IndexCardQuestion[];
}

interface IndexCardQuestion {
  question: string;
  answer: string;
}

export interface PostMatching extends Post {
  elements: MatchingPair[][];
}

export interface MatchingPair {
  leftpart: string;
  rightpart: string;
  pairNumber: number;
}
