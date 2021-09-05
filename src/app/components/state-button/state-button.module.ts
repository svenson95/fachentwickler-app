import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';

import { StateButtonComponent } from './state-button.component';

import { LoadingSpinnerModule } from '../loading-spinner/loading-spinner.module';



@NgModule({
  declarations: [StateButtonComponent],
  exports: [StateButtonComponent],
  imports: [
    CommonModule,
    LoadingSpinnerModule,
    MatRippleModule
  ]
})
export class StateButtonModule { }
