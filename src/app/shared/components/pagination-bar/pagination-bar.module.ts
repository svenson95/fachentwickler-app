import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AngularMaterialModule } from '../../../core/angular-material.module';
import { LoadingSpinnerModule } from '../../../core/components/loading-spinner/loading-spinner.module';
import { PageButtonsPipe } from './page-buttons.pipe';
import { PaginationBarComponent } from './pagination-bar.component';

@NgModule({
  declarations: [PaginationBarComponent, PageButtonsPipe],
  exports: [PaginationBarComponent],
  imports: [CommonModule, AngularMaterialModule, LoadingSpinnerModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PaginationBarModule {}
