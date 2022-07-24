import { Injectable } from '@angular/core';
import { shareReplay } from 'rxjs/operators';
import { Observable, ReplaySubject } from 'rxjs';

import { ExamDate } from '@models/exam-date';
import { SchoolWeek } from '@models/school-week';
import { UserData } from '@models/user';

import { PostType } from '../types/post-type';

import { DataService } from './data.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  public allLessons$: Observable<string[]> = this.data.getAllLessons().pipe(shareReplay(1));

  private nextLesson = new ReplaySubject<PostType>(1);

  public readonly nextLesson$ = this.nextLesson.asObservable();

  private nextExams = new ReplaySubject<ExamDate[]>(1);

  public readonly nextExams$ = this.nextExams.asObservable();

  private lessonsPercentage = new ReplaySubject<number>(1);

  public readonly lessonsPercentage$ = this.lessonsPercentage.asObservable();

  private schoolWeek = new ReplaySubject<SchoolWeek>(1);

  public readonly schoolWeek$ = this.schoolWeek.asObservable();

  private userData: UserData;

  constructor(private data: DataService, private user: UserService) {
    this.init();
  }

  private init(): void {
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
    this.nextLesson$.subscribe(async (nextLesson) => {
      const schoolWeek = await this.data.getSchoolWeek(nextLesson.schoolWeek).toPromise();
      this.schoolWeek.next(schoolWeek);
    });
  }

  private getNextExams(): void {
    this.data.getAllExamDates().subscribe((response) => {
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

      this.nextExams.next(openExams);
    });
  }

  private getLessonsPercentage(): void {
    this.allLessons$.subscribe((response) => {
      const value = (this.userData.progress.length / response.length) * 100;
      this.lessonsPercentage.next(value);
    });
  }
}
