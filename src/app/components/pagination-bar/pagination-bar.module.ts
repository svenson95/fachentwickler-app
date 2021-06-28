import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PaginationBarComponent } from './pagination-bar.component';



@NgModule({
  declarations: [PaginationBarComponent],
  exports: [PaginationBarComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PaginationBarModule { }
