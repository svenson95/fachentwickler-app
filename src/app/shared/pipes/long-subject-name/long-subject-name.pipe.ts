import { Pipe, PipeTransform } from '@angular/core';

import { subjects } from '@constants/menu-items';

@Pipe({
  name: 'longSubjectName',
})
export class LongSubjectNamePipe implements PipeTransform {
  // eslint-disable-next-line class-methods-use-this, @typescript-eslint/no-unused-vars
  public transform(value: unknown, ...args: unknown[]): string {
    const subject = subjects.find((el) => el.url.substring(1) === value);
    return subject.title;
  }
}
