import { Component, Input, Output, EventEmitter, OnInit, ChangeDetectionStrategy, Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'pageButtons' })
export class PageButtonsPipe implements PipeTransform {
  transform(page: number, buttonsPerPage: number, total: number): any {
    const trimStart = (page) * buttonsPerPage;
    let trimEnd = trimStart + buttonsPerPage;
    trimEnd = trimEnd <= total ? trimEnd : total;

    const pages = [];
    for (let i = trimStart; i < trimEnd; i++) {
      pages.push(i);
    }

    return pages;
  }
}

@Component({
  selector: 'fe-pagination-bar',
  templateUrl: './pagination-bar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationBarComponent implements OnInit {

  @Input() currentPage: number;
  @Input() totalItems: number;
  @Input() isLoading?: boolean;

  paginationPage = 0;
  buttonsPerPage = 7;

  disabledOpacity = 0.4;

  @Output() changePage = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  get totalPages(): number {
    const itemsPerPage = 10;
    return Math.ceil(this.totalItems / itemsPerPage);
  }

  goTo(pageNumber): void {
    if (this.currentPage === pageNumber) {
      return;
    }
    this.changePage.emit(pageNumber);
  }

  goToPreviousPage(): void {
    if (this.paginationPage - 1 >= 0) {
      this.paginationPage -= 1;
    }
  }

  goToNextPage(): void {
    if (this.paginationPage + 1 <= Math.floor(this.totalPages / this.buttonsPerPage)) {
      this.paginationPage += 1;
    }
  }

  goToFirstPage(): void {
    this.paginationPage = 0;
  }

  goToLastPage(): void {
    this.paginationPage = Math.floor(this.totalPages / this.buttonsPerPage);
  }

  get isFirstPaginationPage(): boolean {
    return !(this.paginationPage - 1 >= 0);
  }

  get isLastPaginationPage(): boolean {
    return !(this.paginationPage + 1 <= Math.floor(this.totalPages / this.buttonsPerPage));
  }
}
