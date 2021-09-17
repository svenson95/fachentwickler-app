import { Pipe, PipeTransform } from '@angular/core';
import { subjects } from '../../constants/menu-items';

@Pipe({
  name: 'subjectIcon'
})
export class SubjectIconPipe implements PipeTransform {

  transform(url: string): unknown {
    console.log(url);
    const sub = subjects.find(s => s.url === url);
    return sub.icon.slice(0, -8);
  }

}
