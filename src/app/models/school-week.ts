import { Post } from './post';

export interface SchoolWeek {
  schoolWeek: string;
  posts: Post[];
}

export interface Weekdays {
  day: number;
  lessons: Post[];
}
