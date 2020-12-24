import { Post } from './post';

export interface SchoolWeek {
  schoolWeek: string;
  posts: SchoolWeekPost[];
}

export interface SchoolWeekPost {
  details: Post;
  id: string;
  lessonDate: string;
  schoolWeek: string;
  subject: string;
}

export interface Weekdays {
  day: number;
  lessons: SchoolWeekPost[];
}
