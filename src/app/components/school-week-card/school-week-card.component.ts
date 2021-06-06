import { Component, Input, OnInit } from '@angular/core';

import { subjects } from '../../../data/menu-items';
import { DataService } from '../../services/data/data.service';
import { SchoolWeek, Weekdays } from '../../models/school-week';

@Component({
  selector: 'app-school-week-card',
  templateUrl: './school-week-card.component.html'
})
export class SchoolWeekCardComponent implements OnInit {

  @Input() week?: SchoolWeek;
  @Input('is-dashboard-page') isDashboardPage?: boolean;

  isLoading: boolean;
  currentWeek: number;

  constructor(public dataService: DataService) {}

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
    this.isLoading = true;
    this.dataService.getSchoolWeek(this.currentWeek - 1).subscribe(response => {
      this.currentWeek--;
      this.week = response;
      this.dataService.schoolWeek = response;
      this.isLoading = false;
    });
  }

  getNextWeek(): void {
    this.isLoading = true;
    this.dataService.getSchoolWeek(this.currentWeek + 1).subscribe(response => {
      this.currentWeek++;
      this.week = response;
      this.dataService.schoolWeek = response;
      this.isLoading = false;
    });
  }

}
