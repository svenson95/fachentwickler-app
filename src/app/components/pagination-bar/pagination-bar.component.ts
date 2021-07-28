import { Component, Input, Output, EventEmitter, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'fe-pagination-bar',
  templateUrl: './pagination-bar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationBarComponent implements OnInit {

  @Output() changePage = new EventEmitter<number>();

  @Input() currentPage: number;
  @Input() totalItems: number;

  paginationPage = 0;
  rowsPerPage = 7;

  constructor() { }

  ngOnInit(): void {}

  get pageButtons(): number[] {
    const trimStart = (this.paginationPage) * this.rowsPerPage;
    let trimEnd = trimStart + this.rowsPerPage;

    trimEnd = trimEnd <= this.totalPages ? trimEnd : this.totalPages;

    const trimmedPages = [];
    for (let i = trimStart; i < trimEnd; i++) {
      trimmedPages.push(i);
    }

    return trimmedPages;
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

  /* Pagination Pages */
  goToPreviousPage(): void {
    if (this.paginationPage - 1 >= 0) {
      this.paginationPage -= 1;
    }
  }

  goToNextPage(): void {
    if (this.paginationPage + 1 <= Math.floor(this.totalPages / this.rowsPerPage)) {
      this.paginationPage += 1;
    }
  }

  goToFirstPage(): void {
    this.paginationPage = 0;
  }

  goToLastPage(): void {
    this.paginationPage = Math.floor(this.totalPages / this.rowsPerPage);
  }

  get isFirstPaginationPage(): boolean {
    return !(this.paginationPage - 1 >= 0);
  }

  get isLastPaginationPage(): boolean {
    return !(this.paginationPage + 1 <= Math.floor(this.totalPages / this.rowsPerPage));
  }
}
