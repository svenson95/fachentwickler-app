import { Pipe, PipeTransform } from '@angular/core';

import { subjects } from '../../constants/menu-items';

@Pipe({
  name: 'longSubjectName'
})
export class LongSubjectNamePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    const subject = subjects.find(el => el.url.substring(1) === value);
    return subject.title;
  }

}
