import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';
import { SchoolWeek } from '../../core/models/school-week';
import { SchoolYear } from '../../core/models/school-year';
import { DataService } from '../../core/services/data.service';
import { HeaderService } from '../../core/services/header.service';
import { LoadingService } from '../../core/services/loading.service';

@Component({
  selector: 'fe-curriculum-page',
  templateUrl: './curriculum.page.html',
  styleUrls: ['./curriculum.page.scss'],
})
export class CurriculumPage implements OnInit, OnDestroy {
  private allWeeks: number[];

  private isLoading: boolean;

  private subscription: Subscription = new Subscription();

  public schoolYears: SchoolYear[];

  public selectedYear = 0;

  public selectedWeek = 1;

  constructor(
    private headerService: HeaderService,
    private dataService: DataService,
    private loadingService: LoadingService,
    private elementRef: ElementRef,
  ) {
    this.headerService.setPageTitle('Lehrplan');
    this.initAllWeeks();
  }

  public ngOnInit(): void {
    this.subscription.add(
      this.loadingService.loading$.pipe(delay(0)).subscribe((status) => {
        this.isLoading = status;
      }),
    );
    this.subscription.add(
      this.dataService.getAllSchoolWeeks().subscribe((response) => {
        this.schoolYears = this.initSchoolYears(response);
      }),
    );
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private initAllWeeks(): void {
    this.allWeeks = Array.from(Array(this.dataService.currentSchoolWeek + 1).keys());
    this.allWeeks.shift(); // remove school-week 0
  }

  // eslint-disable-next-line class-methods-use-this
  private initSchoolYears(schoolWeeks: SchoolWeek[]): SchoolYear[] {
    const schoolYears = [new SchoolYear(1), new SchoolYear(2), new SchoolYear(3)];

    schoolWeeks.forEach((week) => {
      if (Number(week.schoolWeek) <= 13) {
        schoolYears.find((year) => year.year === 1).weeks.push(week);
      } else if (Number(week.schoolWeek) <= 26) {
        schoolYears.find((year) => year.year === 2).weeks.push(week);
      } else if (Number(week.schoolWeek) > 26) {
        schoolYears.find((year) => year.year === 2).weeks.push(week);
      }
    });
    return schoolYears;
  }

  public onWeekChange(week): void {
    this.elementRef.nativeElement.querySelector(`.week-${week}`).scrollIntoView({
      behavior: 'auto',
      block: 'start',
    });
  }

  public onYearChange(): void {
    this.selectedWeek = Number(this.schoolYears[this.selectedYear].weeks[0].schoolWeek);
  }

  public onScroll(): void {
    this.schoolYears[this.selectedYear].weeks.forEach((week) => {
      const weekEl = this.elementRef.nativeElement.querySelector(`.week-${week.schoolWeek}`);
      if (this.isVisible(weekEl)) {
        this.selectedWeek = Number(week.schoolWeek);
      }
    });
  }

  // eslint-disable-next-line class-methods-use-this
  private isVisible = (el: HTMLElement): boolean => {
    const { bottom, height, top } = el.getBoundingClientRect();
    const weeksContainer = document.querySelector('.weeks-container');
    const containerRect = weeksContainer.getBoundingClientRect();

    return top <= containerRect.top ? containerRect.top - top <= height : bottom - containerRect.bottom <= height;
  };
}
