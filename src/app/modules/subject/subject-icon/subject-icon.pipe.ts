import { Pipe, PipeTransform } from '@angular/core';

import { subjects } from '../../../core/constants/menu-items';

@Pipe({
  name: 'subjectIcon',
})
export class SubjectIconPipe implements PipeTransform {
  // eslint-disable-next-line class-methods-use-this
  public transform(url: string): unknown {
    const sub = subjects.find((s) => s.url === url);
    return sub.icon.slice(0, -8);
  }
}
