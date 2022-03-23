import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../../app-common/angular-material.module';

import { StateButtonComponent } from './state-button.component';

import { LoadingSpinnerModule } from '../loading-spinner/loading-spinner.module';



@NgModule({
  declarations: [StateButtonComponent],
  exports: [StateButtonComponent],
  imports: [
    CommonModule,
    LoadingSpinnerModule,
    AngularMaterialModule
  ]
})
export class StateButtonModule { }
