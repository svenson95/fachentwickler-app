import { Post } from './post';

export interface SchoolWeek {
  schoolWeek: number;
  posts: Post[];
}

export interface WeekDays {
  day: number;
  lessons: Post[];
}
