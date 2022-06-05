import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'daysLeft',
})
export class DaysLeftPipe implements PipeTransform {
  // eslint-disable-next-line class-methods-use-this
  public transform(date: string): string {
    const DAY_IN_MILLISECONDS = 24 * 60 * 60 * 1000;
    const today = new Date();

    if (new Date(date) < today) return null;

    const examDate = new Date(date);
    const days = Math.ceil(Math.abs((today.getTime() - examDate.getTime()) / DAY_IN_MILLISECONDS));
    const suffix = days > 1 ? 'Tage' : 'Tag';

    return `Noch ${days} ${suffix}`;
  }
}
