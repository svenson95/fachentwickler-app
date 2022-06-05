import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { AngularMaterialModule } from '../../../shared/angular-material.module';
import { LoadingSpinnerModule } from '../../loading-spinner/loading-spinner.module';
import { PaginationBarModule } from '../../pagination-bar/pagination-bar.module';
import { StateButtonModule } from '../../state-button/state-button.module';
import { ImageManagerDialogComponent } from './image-manager-dialog.component';

@NgModule({
  declarations: [ImageManagerDialogComponent],
  exports: [ImageManagerDialogComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    NgxDropzoneModule,
    StateButtonModule,
    PaginationBarModule,
    LoadingSpinnerModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ImageManagerDialogModule {}
