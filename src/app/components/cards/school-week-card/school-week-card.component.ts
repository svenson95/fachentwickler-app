import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { SchoolWeek } from '../../../models/school-week';
import { DataService } from '../../../services/data/data.service';

@Component({
  selector: 'fe-school-week-card',
  templateUrl: './school-week-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SchoolWeekCardComponent implements OnInit, OnChanges {

  @Input() week: SchoolWeek;
  @Input() showNavigation?: boolean;
  weeks: SchoolWeek[];
  isLoading: boolean;

  constructor(public dataService: DataService) {}

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.showNavigation && this.weeks === undefined && this.week !== undefined) {
      this.weeks = [this.week];
    }
  }

  getWeek(value: number): void {
    const schoolWeek = Number(this.week.schoolWeek);

    const previousWeek = this.weeks.find(el => Number(el.schoolWeek) === (schoolWeek + value));
    if (previousWeek) {
      this.week = previousWeek;
      this.dataService.schoolWeek = previousWeek;
      return;
    }

    this.isLoading = true;
    this.dataService.getSchoolWeek(schoolWeek + value).subscribe(response => {
      this.weeks.push(response);
      this.week = response;
      this.dataService.schoolWeek = response;
      this.isLoading = false;
    });
  }

}
