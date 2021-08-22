import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../../app-common/angular-material.module';

import { SearchbarComponent } from './searchbar.component';

import { LoadingSpinnerModule } from '../loading-spinner/loading-spinner.module';


@NgModule({
  declarations: [SearchbarComponent],
  exports: [SearchbarComponent],
  imports: [
    CommonModule,
    FormsModule,
    AngularMaterialModule,
    LoadingSpinnerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SearchbarModule { }
