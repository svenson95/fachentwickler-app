import { Component, Input, OnInit } from '@angular/core';

import { subjects } from '../../../data/menu-items';
import { DataService } from '../../services/data/data.service';
import { SchoolWeek, Weekdays } from '../../models/school-week';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-school-week-card',
  templateUrl: './school-week-card.component.html',
  styleUrls: ['./school-week-card.component.scss']
})
export class SchoolWeekCardComponent implements OnInit {

  @Input() week?: SchoolWeek;
  @Input('is-dashboard-page') isDashboardPage?: boolean;

  isLoading: boolean;
  currentWeek: number;

  constructor(private dataService: DataService,
              private loadingService: LoadingService
  ) {
    this.loadingService.loading$.subscribe(response => {
      this.isLoading = response;
    });
  }

  ngOnInit(): void {
    this.currentWeek = Number(this.week.schoolWeek);
  }

  /* -- Component functions -- */
  weekdays(): Weekdays[] {
    const weekArray: Weekdays[] = [];
    this.week.posts.forEach(post => {
      const postDay = new Date(post.lessonDate).getDay();
      const dayLessons = weekArray.find(week => week.day === postDay);
      if (dayLessons) {
        dayLessons.lessons.push(post);
      } else if (postDay) {
        weekArray.push({ day: postDay, lessons: [post] });
      }
    });
    return weekArray;
  }

  weekdayAsString(day): string {
    if (day === 1) {
      return 'Montag';
    } else if (day === 2) {
      return 'Dienstag';
    } else if (day === 3) {
      return 'Mittwoch';
    } else if (day === 4) {
      return 'Donnerstag';
    } else if (day === 5) {
      return 'Freitag';
    }
  }

  fullSubjectName = (subject: string) => {
    return subjects.find(el => el.url.substring(1) === subject)?.title;
  }

  /* -- Calendar buttons --*/
  getPreviousWeek(): void {
    this.currentWeek--;
    this.dataService.getSchoolWeek(this.currentWeek).subscribe(response => {
      this.week = response;
      this.dataService.schoolWeek = response;
    });
  }

  getNextWeek(): void {
    this.currentWeek++;
    this.dataService.getSchoolWeek(this.currentWeek).subscribe(response => {
      this.week = response;
      this.dataService.schoolWeek = response;
    });
  }

}
