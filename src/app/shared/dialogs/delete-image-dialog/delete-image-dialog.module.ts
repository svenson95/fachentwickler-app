import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AngularMaterialModule } from '../../../core/angular-material.module';
import { StateButtonModule } from '../../../core/components/state-button/state-button.module';
import { PaginationBarModule } from '../../components/pagination-bar/pagination-bar.module';
import { DeleteImageDialogComponent } from './delete-image-dialog.component';

@NgModule({
  declarations: [DeleteImageDialogComponent],
  exports: [DeleteImageDialogComponent],
  imports: [CommonModule, AngularMaterialModule, StateButtonModule, PaginationBarModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DeleteImageDialogModule {}
