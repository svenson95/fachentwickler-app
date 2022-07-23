import { Component, ElementRef, OnInit } from '@angular/core';

import { SchoolWeek } from '@models/school-week';
import { DataService } from '@services/data.service';
import { HeaderService } from '@services/header.service';
import { SCHOOL_WEEKS_LENGTH } from '@constants/school-weeks';

import { SchoolYear } from './school-year';

@Component({
  selector: 'fe-curriculum-page',
  templateUrl: './curriculum.page.html',
  styleUrls: ['./curriculum.page.scss'],
})
export class CurriculumPage implements OnInit {
  private allWeeks: number[];

  public schoolYears: SchoolYear[];

  public selectedYear = 0;

  public selectedWeek = 1;

  constructor(private headerService: HeaderService, private dataService: DataService, private elementRef: ElementRef) {
    this.headerService.setPageTitle('Lehrplan');
    this.initAllWeeks();
  }

  public ngOnInit(): void {
    this.dataService.getAllSchoolWeeks().subscribe((response) => {
      this.schoolYears = this.initSchoolYears(response);
    });
  }

  private initAllWeeks(): void {
    this.allWeeks = Array.from(Array(SCHOOL_WEEKS_LENGTH + 1).keys());
    this.allWeeks.shift(); // remove school-week 0
  }

  private initSchoolYears(schoolWeeks: SchoolWeek[]): SchoolYear[] {
    const schoolYears = [new SchoolYear(1), new SchoolYear(2), new SchoolYear(3)];

    schoolWeeks.forEach((week) => {
      if (week.schoolWeek <= 13) {
        schoolYears.find((year) => year.year === 1).weeks.push(week);
      } else if (week.schoolWeek <= 26) {
        schoolYears.find((year) => year.year === 2).weeks.push(week);
      } else if (week.schoolWeek > 26) {
        schoolYears.find((year) => year.year === 2).weeks.push(week);
      }
    });
    return schoolYears;
  }

  public onWeekChange(week: number): void {
    this.elementRef.nativeElement.querySelector(`.week-${week}`).scrollIntoView({
      behavior: 'auto',
      block: 'start',
    });
  }

  public onYearChange(): void {
    this.selectedWeek = this.schoolYears[this.selectedYear].weeks[0].schoolWeek;
  }

  public onScroll(): void {
    this.schoolYears[this.selectedYear].weeks.forEach((week) => {
      const weekEl = this.elementRef.nativeElement.querySelector(`.week-${week.schoolWeek}`);
      if (this.isVisible(weekEl)) {
        this.selectedWeek = week.schoolWeek;
      }
    });
  }

  private isVisible = (el: HTMLElement): boolean => {
    const { bottom, height, top } = el.getBoundingClientRect();
    const weeksContainer = document.querySelector('.weeks-container');
    const containerRect = weeksContainer.getBoundingClientRect();

    return top <= containerRect.top ? containerRect.top - top <= height : bottom - containerRect.bottom <= height;
  };
}
