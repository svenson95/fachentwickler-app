import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../../app-common/angular-material.module';

import { SearchFieldComponent } from './search-field.component';

import { LoadingSpinnerModule } from '../loading-spinner/loading-spinner.module';


@NgModule({
  declarations: [SearchFieldComponent],
  exports: [SearchFieldComponent],
  imports: [
    CommonModule,
    FormsModule,
    AngularMaterialModule,
    LoadingSpinnerModule
  ]
})
export class SearchFieldModule { }
