import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { ImageData } from '../../models/image-data';
import { DataService } from '../../services/data/data.service';

@Component({
  selector: 'app-pagination-bar',
  templateUrl: './pagination-bar.component.html'
})
export class PaginationBarComponent implements OnInit {

  @Output() isLoadingImages = new EventEmitter<boolean>();
  @Output() images = new EventEmitter<ImageData[]>();

  @Input() currentPage: number;
  @Input() totalPages: number;
  @Input() imagesCount: number;

  paginationPage = 0;
  rowsPerPage = 7;

  constructor(private dataService: DataService) { }

  ngOnInit(): void { }

  loadPage(page: number): void {
    this.currentPage = page;
    this.isLoadingImages.emit(true);
    this.dataService.getMultipleImages(page).subscribe(data => {
      this.images.emit(data);
      this.isLoadingImages.emit(false);
    });
  }

  paginationButtons(): any {
    const trimStart = (this.paginationPage) * this.rowsPerPage;
    let trimEnd = trimStart + this.rowsPerPage;

    trimEnd = trimEnd <= this.totalPages ? trimEnd : this.totalPages;

    const trimmedPages = [];
    for (let i = trimStart; i < trimEnd; i++) {
      trimmedPages.push(i);
    }

    return trimmedPages;
  }

  /* Pagination Page Actions */
  decrementPaginationPage(): void {
    if (this.paginationPage - 1 >= 0) {
      this.paginationPage -= 1;
    }
  }

  incrementPaginationPage(): void {
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
}
