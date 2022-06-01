import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoadingSpinnerModule } from '../loading-spinner/loading-spinner.module';
import { PageButtonsPipe } from './page-buttons.pipe';
import { PaginationBarComponent } from './pagination-bar.component';

@NgModule({
  declarations: [PaginationBarComponent, PageButtonsPipe],
  exports: [PaginationBarComponent],
  imports: [CommonModule, RouterModule, LoadingSpinnerModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PaginationBarModule {}
