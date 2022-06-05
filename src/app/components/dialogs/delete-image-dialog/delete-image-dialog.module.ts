import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AngularMaterialModule } from '../../../shared/angular-material.module';
import { PaginationBarModule } from '../../pagination-bar/pagination-bar.module';
import { StateButtonModule } from '../../state-button/state-button.module';
import { DeleteImageDialogComponent } from './delete-image-dialog.component';

@NgModule({
  declarations: [DeleteImageDialogComponent],
  exports: [DeleteImageDialogComponent],
  imports: [CommonModule, AngularMaterialModule, StateButtonModule, PaginationBarModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DeleteImageDialogModule {}
