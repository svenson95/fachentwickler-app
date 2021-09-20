import { SchoolWeek } from './school-week';

export class SchoolYear {
  constructor(year: number) {
    this.year = year;
  }
  year: number;
  weeks: SchoolWeek[] = [];
}
