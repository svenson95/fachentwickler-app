import { Post } from './post';
import { ExamDate } from './exam-date';
import { SchoolNews } from './school-news';

export interface DashboardData {
  allLessons: string[];
  lessonsPercentage: number;
  nextLesson: Post;
  nextExams: ExamDate[];
  schoolNews: SchoolNews[];
}
