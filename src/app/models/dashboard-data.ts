import { Post } from './post';

export interface DashboardData {
  allLessons: string[];
  lessonsPercentage: number;
  nextLesson: Post;
}
