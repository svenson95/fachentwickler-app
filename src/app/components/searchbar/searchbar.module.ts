import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchbarComponent } from './searchbar.component';
import { FormsModule } from '@angular/forms';
import {AngularMaterialModule} from '../../app-common/angular-material.module';


@NgModule({
  declarations: [SearchbarComponent],
  exports: [SearchbarComponent],
  imports: [
    CommonModule,
    FormsModule,
    AngularMaterialModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SearchbarModule { }
