import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weekdayString',
})
export class WeekdayStringPipe implements PipeTransform {
  // eslint-disable-next-line class-methods-use-this, consistent-return, @typescript-eslint/no-unused-vars
  public transform(value: number, ...args: unknown[]): unknown {
    switch (value) {
      case 1:
        return 'Montag';
      case 2:
        return 'Dienstag';
      case 3:
        return 'Mittwoch';
      case 4:
        return 'Donnerstag';
      case 5:
        return 'Freitag';
      default:
        return 'unknown';
    }
  }
}
