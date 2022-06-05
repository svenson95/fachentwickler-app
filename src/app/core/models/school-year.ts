import { SchoolWeek } from './school-week';

export class SchoolYear {
  constructor(year: number) {
    this.year = year;
  }

  public year: number;

  public weeks: SchoolWeek[] = [];
}
