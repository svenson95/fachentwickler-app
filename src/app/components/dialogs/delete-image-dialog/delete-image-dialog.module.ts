import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../../../app-common/angular-material.module';

import { DeleteImageDialogComponent } from './delete-image-dialog.component';

import { ButtonStateModule } from '../../button-state/button-state.module';
import { PaginationBarModule } from '../../pagination-bar/pagination-bar.module';



@NgModule({
  declarations: [DeleteImageDialogComponent],
  exports: [DeleteImageDialogComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ButtonStateModule,
    PaginationBarModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DeleteImageDialogModule { }
