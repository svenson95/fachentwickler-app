import { SubjectPost } from './subject';

export interface DashboardData {
  allLessons: string[];
  lessonsPercentage: number;
  nextLesson: SubjectPost;
}
