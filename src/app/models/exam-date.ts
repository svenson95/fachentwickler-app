import { Post } from './post';

export interface ExamDate {
  date: string;
  subject: string;
  title: string;
  lessons?: string[] | Post[];
}
