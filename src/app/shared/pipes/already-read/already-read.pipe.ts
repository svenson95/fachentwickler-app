import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alreadyRead',
})
export class AlreadyReadPipe implements PipeTransform {
  public transform(value: string, userProgress: string[]): boolean {
    return userProgress.includes(value);
  }
}
