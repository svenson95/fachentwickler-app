import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SharedModule } from '../../../../../../shared/shared.module';
import { DeleteImageDialogComponent } from './delete-image-dialog.component';

@NgModule({
  declarations: [DeleteImageDialogComponent],
  exports: [DeleteImageDialogComponent],
  imports: [SharedModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DeleteImageDialogModule {}
