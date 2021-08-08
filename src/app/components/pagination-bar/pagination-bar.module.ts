import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PaginationBarComponent, PageButtonsPipe } from './pagination-bar.component';

import { LoadingSpinnerModule } from '../loading-spinner/loading-spinner.module';



@NgModule({
  declarations: [PaginationBarComponent, PageButtonsPipe],
  exports: [PaginationBarComponent],
  imports: [
    CommonModule,
    RouterModule,
    LoadingSpinnerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PaginationBarModule { }
