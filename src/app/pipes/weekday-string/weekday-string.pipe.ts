import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weekdayString'
})
export class WeekdayStringPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    if (value === 1) {
      return 'Montag';
    } else if (value === 2) {
      return 'Dienstag';
    } else if (value === 3) {
      return 'Mittwoch';
    } else if (value === 4) {
      return 'Donnerstag';
    } else if (value === 5) {
      return 'Freitag';
    }
  }

}
