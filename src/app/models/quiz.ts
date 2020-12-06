import {SubjectPost} from './subject';

export interface Quiz {
  url: string;
  topic: string;
  subject: string;
  lessonDate: string;
  lastUpdate: string;
  schoolWeek: string;
  questions: Question[];
}

interface Question {
  question: string;
  answer: number;
  choice1: string;
  choice2: string;
}

export interface QuizData {
  content: Quiz;
  details: SubjectPost;
}
