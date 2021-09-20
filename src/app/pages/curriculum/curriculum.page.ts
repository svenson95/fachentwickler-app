import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
import { Subscription } from 'rxjs';

import { SchoolWeek } from '../../models/school-week';
import { SchoolYear } from '../../models/school-year';
import { HeaderService } from '../../services/header.service';
import { DataService } from '../../services/data/data.service';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'fe-curriculum-page',
  templateUrl: './curriculum.page.html'
})
export class CurriculumPage implements OnInit, OnDestroy {

  allWeeks: number[];
  schoolYears: SchoolYear[];
  isLoading: boolean;
  subscription: Subscription = new Subscription();

  selectedYear = 0;
  selectedWeek = 1;

  constructor(private headerService: HeaderService,
              private dataService: DataService,
              private loadingService: LoadingService,
              private elementRef: ElementRef
  ) {
    this.headerService.setPageTitle('Lehrplan');
    this.initAllWeeks();
  }

  ngOnInit(): void {
    this.subscription.add(this.loadingService.loading$.pipe(delay(0)).subscribe(status => this.isLoading = status));
    this.subscription.add(this.dataService.getAllSchoolWeeks().subscribe(response => {
      this.schoolYears = this.initSchoolYears(response);
    }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  initAllWeeks(): void {
    this.allWeeks = Array.from(Array(this.dataService.currentSchoolWeek + 1).keys());
    this.allWeeks.shift(); // remove school-week 0
  }

  initSchoolYears(schoolWeeks: SchoolWeek[]): SchoolYear[] {
    const schoolYears = [
      new SchoolYear(1),
      new SchoolYear(2),
      new SchoolYear(3)
    ];

    schoolWeeks.forEach(week => {
      if (Number(week.schoolWeek) <= 13) {
        schoolYears.find(year => year.year === 1).weeks.push(week);
      } else if (Number(week.schoolWeek) <= 26) {
        schoolYears.find(year => year.year === 2).weeks.push(week);
      } else if (Number(week.schoolWeek) > 26) {
        schoolYears.find(year => year.year === 2).weeks.push(week);
      }
    });
    return schoolYears;
  }

  onWeekChange(week): void {
    this.elementRef.nativeElement.querySelector('.week-' + week).scrollIntoView({
      behavior: 'auto',
      block: 'start'
    });
  }

  onYearChange(): void {
    this.selectedWeek = Number(this.schoolYears[this.selectedYear].weeks[0].schoolWeek);
  }

  onScroll(): void {
    this.schoolYears[this.selectedYear].weeks.forEach(week => {
      const weekEl = this.elementRef.nativeElement.querySelector('.week-' + week.schoolWeek);
      if (this.isVisible(weekEl)) {
        this.selectedWeek = Number(week.schoolWeek);
      }
    });
  }

  private isVisible = (el) => {
    const { bottom, height, top } = el.getBoundingClientRect();
    const weeksContainer = document.querySelector('.weeks-container');
    const containerRect = weeksContainer.getBoundingClientRect();

    return top <= containerRect.top
        ? (containerRect.top - top <= height)
        : (bottom - containerRect.bottom <= height);
  }
}
