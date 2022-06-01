import { PostElement } from './post-element';
import { PostType } from './post-type';

interface IndexCardQuestion {
  question: string;
  answer: string;
}

export interface MatchingPair {
  leftpart: string;
  rightpart: string;
  pairNumber: number;
}

interface QuizQuestion {
  question: string;
  answer: number;
  choice1: string;
  choice2: string;
}

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
  elements?:
    | PostElement[]
    | IndexCardQuestion[]
    | MatchingPair[][]
    | QuizQuestion[]
    | any[];
}

export interface PostArticle extends Post {
  elements: PostElement[];
}

export interface PostQuiz extends Post {
  elements: QuizQuestion[];
}

export interface PostIndexCards extends Post {
  elements: IndexCardQuestion[];
}

export interface PostMatching extends Post {
  elements: MatchingPair[][];
}
