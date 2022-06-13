import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { NgxDropzoneModule } from 'ngx-dropzone';

import { SharedModule } from '../../../../../shared/shared.module';

import { DeleteImageDialogComponent } from './delete-image-dialog/delete-image-dialog.component';
import { ImageManagerDialogComponent } from './image-manager-dialog.component';

@NgModule({
  declarations: [ImageManagerDialogComponent, DeleteImageDialogComponent],
  exports: [ImageManagerDialogComponent],
  imports: [SharedModule, NgxDropzoneModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ImageManagerDialogModule {}
