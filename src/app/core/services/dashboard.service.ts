import { Injectable } from '@angular/core';
import { map, shareReplay, switchMap } from 'rxjs/operators';
import { Observable, ReplaySubject } from 'rxjs';

import { ExamDate } from '@models/exam-date';
import { SchoolNews } from '@models/school-news';
import { SchoolWeek } from '@models/school-week';
import { UserData } from '@models/user';

import { PostType } from '../types/post-type';

import { DataService } from './data.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  public schoolNews: Observable<SchoolNews[]>;

  public nextExams$: Observable<ExamDate[]>;

  public allLessons$: Observable<string[]> = this.data.getAllLessons().pipe(shareReplay(1));

  private nextLesson = new ReplaySubject<PostType>(1);

  public readonly nextLesson$ = this.nextLesson.asObservable();

  public lessonsPercentage$: Observable<number>;

  public schoolWeek$: Observable<SchoolWeek>;

  private userData: UserData;

  constructor(private data: DataService, private user: UserService) {
    this.init();
  }

  public init(): void {
    this.user.data$.subscribe((data) => {
      this.userData = data;
    });
    this.getNextLesson();
    this.getSchoolWeek();
    this.getNextExams();
    this.getLessonsPercentage();
  }

  public getNextLesson(): void {
    this.allLessons$.subscribe(async (allLessons) => {
      const nextLessonId = allLessons.find((lessonId) => !this.userData.progress.includes(lessonId));
      const post = await this.data.getPostById(nextLessonId).toPromise();
      this.nextLesson.next(post);
    });
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
        return (this.userData.progress.length / response.length) * 100;
      }),
      shareReplay(1),
    );
  }
}
