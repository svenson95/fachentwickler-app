import { Component, Input, OnInit } from '@angular/core';

import { SchoolWeek, Weekdays } from '../../../models/school-week';
import { DataService } from '../../../services/data/data.service';
import { subjects } from '../../../../data/menu-items';

@Component({
  selector: 'fe-school-week-card',
  templateUrl: './school-week-card.component.html'
})
export class SchoolWeekCardComponent implements OnInit {

  @Input() week: SchoolWeek;
  @Input() isDashboardPage?: boolean;

  weekdays: Weekdays[];
  isLoading: boolean;

  constructor(public dataService: DataService) {}

  ngOnInit(): void {
    this.initWeekdays();
  }

  /* -- Component functions -- */
  initWeekdays(): void {
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
    this.weekdays = weekArray;
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
    this.dataService.getSchoolWeek(Number(this.week.schoolWeek) - 1).subscribe(response => {
      this.week = response;
      this.initWeekdays();
      this.dataService.schoolWeek = response;
      this.isLoading = false;
    });
  }

  getNextWeek(): void {
    this.isLoading = true;
    this.dataService.getSchoolWeek(Number(this.week.schoolWeek) + 1).subscribe(response => {
      this.week = response;
      this.initWeekdays();
      this.dataService.schoolWeek = response;
      this.isLoading = false;
    });
  }

}
