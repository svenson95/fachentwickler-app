import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { SharedModule } from '../../../../../shared/shared.module';
import { DeleteImageDialogModule } from './delete-image-dialog/delete-image-dialog.module';
import { ImageManagerDialogComponent } from './image-manager-dialog.component';

@NgModule({
  declarations: [ImageManagerDialogComponent],
  exports: [ImageManagerDialogComponent],
  imports: [SharedModule, NgxDropzoneModule, DeleteImageDialogModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ImageManagerDialogModule {}
