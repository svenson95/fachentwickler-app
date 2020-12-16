import { SubjectPost } from './subject';

export interface ExamDate {
  date: string;
  subject: string;
  title: string;
  lessons?: string[] | SubjectPost[];
}
