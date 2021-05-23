import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';

import { SchoolWeek } from '../../models/school-week';
import { HeaderService } from '../../services/header.service';
import { DataService } from '../../services/data/data.service';
import { LoadingService } from '../../services/loading.service';

interface SchoolYear {
  year: number;
  weeks: SchoolWeek[];
}

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss']
})
export class CurriculumComponent implements OnInit {

  allWeeks: number[];
  schoolYears: SchoolYear[];
  isLoading: boolean;

  selectedYear = 0;
  selectedWeek = 1;

  constructor(private headerService: HeaderService,
              private dataService: DataService,
              private loadingService: LoadingService
  ) {
    this.allWeeks = Array.from(Array(this.dataService.currentSchoolWeek + 1).keys());
    this.allWeeks.shift();      // remove school-week 0
    this.headerService.setPageTitle('Lehrplan');

    this.loadingService.loading$.pipe(delay(0)).subscribe(
        (status: boolean) => {
          this.isLoading = status;
        }
    );

    this.dataService.getAllWeeks().subscribe(response => {
      const schoolYears = [
        { year: 1, weeks: [] },
        { year: 2, weeks: [] },
        { year: 3, weeks: [] }
      ];

      response.forEach(week => {
        if (Number(week.schoolWeek) <= 13) {
          schoolYears.find(year => year.year === 1).weeks.push(week);
        } else if (Number(week.schoolWeek) <= 26) {
          schoolYears.find(year => year.year === 2).weeks.push(week);
        } else if (Number(week.schoolWeek) > 26) {
          schoolYears.find(year => year.year === 2).weeks.push(week);
        }
      });
      this.schoolYears = schoolYears;
      console.log(this.schoolYears);
    });
  }

  ngOnInit(): void {
  }

  toNumber(stringNumber): number {
    return Number(stringNumber);
  }

  changeWeek(week): void {
    document.querySelector('.week-' + week).scrollIntoView({
      behavior: 'auto',
      block: 'start'
    });
  }

  onScroll(): void {
    this.schoolYears[this.selectedYear].weeks.forEach(week => {
      const weekEl = document.querySelector('.week-' + week.schoolWeek);
      if (this.isVisible(weekEl)) {
        this.selectedWeek = Number(week.schoolWeek);
      }
    });
  }

  isVisible = (ele) => {
    const { bottom, height, top } = ele.getBoundingClientRect();
    const weeksContainer = document.querySelector('.fia-weeks-container');
    const containerRect = weeksContainer.getBoundingClientRect();

    return top <= containerRect.top
        ? (containerRect.top - top <= height)
        : (bottom - containerRect.bottom <= height);
  }

  setInitialWeek(): void {
    this.selectedWeek = Number(this.schoolYears[this.selectedYear].weeks[0].schoolWeek);
  }
}
