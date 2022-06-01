import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'fe-pagination-bar',
  templateUrl: './pagination-bar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationBarComponent {
  @Input() public currentPage: number;

  @Input() private totalItems: number;

  @Input() public isLoading?: boolean;

  public paginationPage = 0;

  public buttonsPerPage = 7;

  public disabledOpacity = 0.4;

  @Output() public changePage = new EventEmitter<number>();

  public get totalPages(): number {
    const itemsPerPage = 10;
    return Math.ceil(this.totalItems / itemsPerPage);
  }

  public goTo(pageNumber): void {
    if (this.currentPage === pageNumber) {
      return;
    }
    this.changePage.emit(pageNumber);
  }

  public goToPreviousPage(): void {
    const previousPage = this.paginationPage - 1;
    if (previousPage >= 0) {
      this.paginationPage -= 1;
    }
  }

  public goToNextPage(): void {
    const nextPage = this.paginationPage + 1;
    if (nextPage <= Math.floor(this.totalPages / this.buttonsPerPage)) {
      this.paginationPage += 1;
    }
  }

  public goToFirstPage(): void {
    this.paginationPage = 0;
  }

  public goToLastPage(): void {
    this.paginationPage = Math.floor(this.totalPages / this.buttonsPerPage);
  }

  public get isFirstPaginationPage(): boolean {
    return !(this.paginationPage - 1 >= 0);
  }

  public get isLastPaginationPage(): boolean {
    const nextPage = this.paginationPage + 1;
    return !(nextPage <= Math.floor(this.totalPages / this.buttonsPerPage));
  }
}
