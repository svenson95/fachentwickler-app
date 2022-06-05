import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'pageButtons' })
export class PageButtonsPipe implements PipeTransform {
  // eslint-disable-next-line class-methods-use-this
  public transform(page: number, buttonsPerPage: number, total: number): any {
    const trimStart = page * buttonsPerPage;
    let trimEnd = trimStart + buttonsPerPage;
    trimEnd = trimEnd <= total ? trimEnd : total;

    const pages = [];
    for (let i = trimStart; i < trimEnd; i += 1) {
      pages.push(i);
    }

    return pages;
  }
}
