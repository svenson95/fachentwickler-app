import { Component, Input, OnChanges } from '@angular/core';

import { SCHOOL_WEEKS_LENGTH } from '@constants/school-weeks';
import { SchoolWeek } from '@models/school-week';
import { DataService } from '@services/data.service';

@Component({
  selector: 'fe-school-week-card',
  templateUrl: './school-week-card.component.html',
  styleUrls: ['./school-week-card.component.scss'],
})
export class SchoolWeekCardComponent implements OnChanges {
  @Input() public week: SchoolWeek;

  @Input() public showNavigation?: boolean;

  private weeks: SchoolWeek[];

  public isLoading: boolean;

  public schoolWeeksLength = SCHOOL_WEEKS_LENGTH;

  constructor(public dataService: DataService) {}

  public ngOnChanges(): void {
    if (this.showNavigation && this.weeks === undefined && this.week !== null) {
      this.weeks = [this.week];
    }
  }

  public setWeek(value: number): void {
    if (this.isLoading) return;
    const { schoolWeek } = this.week;
    const previousWeek = this.weeks.find((el) => el.schoolWeek === schoolWeek + value);

    if (previousWeek) {
      this.week = previousWeek;
      return;
    }

    this.isLoading = true;
    this.dataService.getSchoolWeek(schoolWeek + value).subscribe((response) => {
      this.weeks.push(response);
      this.week = response;
      this.isLoading = false;
    });
  }
}
