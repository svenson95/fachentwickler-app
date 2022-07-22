import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isEmpty',
})
export class IsEmptyPipe implements PipeTransform {
  public transform(value: any[]): boolean {
    return value && value.length === 0;
  }
}
