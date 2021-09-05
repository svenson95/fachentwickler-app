import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../../../app-common/angular-material.module';

import { ImageManagerDialogComponent } from './image-manager-dialog.component';

import { NgxDropzoneModule } from 'ngx-dropzone';
import { StateButtonModule } from '../../state-button/state-button.module';
import { PaginationBarModule } from '../../pagination-bar/pagination-bar.module';
import { LoadingSpinnerModule } from '../../loading-spinner/loading-spinner.module';



@NgModule({
  declarations: [ImageManagerDialogComponent],
  exports: [ImageManagerDialogComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    NgxDropzoneModule,
    StateButtonModule,
    PaginationBarModule,
    LoadingSpinnerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ImageManagerDialogModule { }
