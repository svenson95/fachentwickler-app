import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../../app-common/angular-material.module';
import { LoadingSpinnerModule } from '../loading-spinner/loading-spinner.module';
import { SearchFieldComponent } from './search-field.component';

@NgModule({
  declarations: [SearchFieldComponent],
  exports: [SearchFieldComponent],
  imports: [
    CommonModule,
    FormsModule,
    AngularMaterialModule,
    LoadingSpinnerModule,
  ],
})
export class SearchFieldModule {}
