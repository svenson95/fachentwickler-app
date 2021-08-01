import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularMaterialModule } from '../../app-common/angular-material.module';
import { LoadingSpinnerComponent } from './loading-spinner.component';



@NgModule({
  declarations: [LoadingSpinnerComponent],
  exports: [LoadingSpinnerComponent],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
})
export class LoadingSpinnerModule { }
