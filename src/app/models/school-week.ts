import { Post } from './post';

export interface SchoolWeek {
  schoolWeek: string;
  posts: SchoolWeekPost[];
}

interface SchoolWeekPost {
  details: Post;
  id: string;
  lessonDate: string;
  schoolWeek: string;
  subject: string;
}
