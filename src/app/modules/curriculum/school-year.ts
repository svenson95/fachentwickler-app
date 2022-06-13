import { SchoolWeek } from '../../core/models/school-week';

export class SchoolYear {
  public year: number;

  public weeks: SchoolWeek[] = [];

  constructor(year: number) {
    this.year = year;
  }
}
