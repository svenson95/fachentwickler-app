import { Injectable } from '@angular/core';
import { map, shareReplay, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { ExamDate } from '@models/exam-date';
import { Post } from '@models/post';
import { SchoolNews } from '@models/school-news';
import { SchoolWeek } from '@models/school-week';

import { DataService } from './data.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  public schoolNews: Observable<SchoolNews[]>;

  public nextExams$: Observable<ExamDate[]>;

  public allLessons$: Observable<string[]> = this.data.getAllLessons().pipe(shareReplay(1));

  public nextLesson$: Observable<Post>;

  public lessonsPercentage$: Observable<number>;

  public schoolWeek$: Observable<SchoolWeek>;

  constructor(private data: DataService, private user: UserService) {
    this.init();
  }

  public init(): void {
    this.getNextLesson();
    this.getSchoolWeek();
    this.getNextExams();
    this.getLessonsPercentage();
  }

  public getNextLesson(): void {
    this.nextLesson$ = this.allLessons$.pipe(
      switchMap(async (allLessons) => {
        const nextLessonId = allLessons.find((lessonId) => !this.user.data.progress.includes(lessonId));
        const post = await this.data.getPostById(nextLessonId).toPromise();
        return post;
      }),
      shareReplay(1),
    );
  }

  private getSchoolWeek(): void {
    this.schoolWeek$ = this.nextLesson$.pipe(
      switchMap(async (nextLesson) => {
        const schoolWeek = await this.data.getSchoolWeek(nextLesson.schoolWeek).toPromise();
        return schoolWeek;
      }),
      shareReplay(1),
    );
  }

  private getNextExams(): void {
    this.nextExams$ = this.data.getAllExamDates().pipe(
      map((response) => {
        const openExams = [];

        const today = new Date();
        today.setHours(23, 59, 59, 999);

        response.forEach((exam) => {
          const examDate = new Date(exam.date);
          examDate.setHours(23, 59, 59, 999);

          if (today <= examDate) {
            openExams.push(exam);
          }
        });

        openExams.sort((a, b) => {
          if (a.date > b.date) return 1;
          if (a.date < b.date) return -1;
          return 0;
        });

        return openExams;
      }),
      shareReplay(1),
    );
  }

  private getLessonsPercentage(): void {
    this.lessonsPercentage$ = this.allLessons$.pipe(
      map((response) => {
        return (this.user.data.progress.length / response.length) * 100;
      }),
      shareReplay(1),
    );
  }
}
