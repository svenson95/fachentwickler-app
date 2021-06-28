import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../../../app-common/angular-material.module';

import { ImageManagerDialogComponent } from './image-manager-dialog.component';

import { NgxDropzoneModule } from 'ngx-dropzone';
import { ButtonStateModule } from '../../button-state/button-state.module';
import { PaginationBarModule } from '../../pagination-bar/pagination-bar.module';



@NgModule({
  declarations: [ImageManagerDialogComponent],
  exports: [ImageManagerDialogComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    NgxDropzoneModule,
    ButtonStateModule,
    PaginationBarModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ImageManagerDialogModule { }
