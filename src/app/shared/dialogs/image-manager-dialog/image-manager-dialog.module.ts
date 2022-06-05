import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { AngularMaterialModule } from '../../../core/angular-material.module';
import { LoadingSpinnerModule } from '../../../core/components/loading-spinner/loading-spinner.module';
import { StateButtonModule } from '../../../core/components/state-button/state-button.module';
import { PaginationBarModule } from '../../components/pagination-bar/pagination-bar.module';
import { DeleteImageDialogModule } from '../delete-image-dialog/delete-image-dialog.module';
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
    DeleteImageDialogModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ImageManagerDialogModule {}
