import {SubjectPost} from './subject';

export interface IndexCards {
  url: string;
  topic: string;
  subject: string;
  lessonDate: string;
  lastUpdate: string;
  schoolWeek: string;
  questions: Question[];
  _id?: string;
}

interface Question {
  question: string;
  answer: string;
}

export interface IndexCardsData {
  content: IndexCards;
  details: SubjectPost;
}
