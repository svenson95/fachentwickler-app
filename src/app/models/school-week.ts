import { Post } from './post';

export interface SchoolWeek {
  schoolWeek: string;
  posts: Post[];
}

export interface WeekDays {
  day: number;
  lessons: Post[];
}
