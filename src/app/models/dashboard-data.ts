import { ExamDate } from './exam-date';
import { Post } from './post';
import { SchoolNews } from './school-news';

export interface DashboardData {
  allLessons: string[];
  lessonsPercentage: number;
  nextLesson: Post;
  nextExams: ExamDate[];
  schoolNews: SchoolNews[];
}
