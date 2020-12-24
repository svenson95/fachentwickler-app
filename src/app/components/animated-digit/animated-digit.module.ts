import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../../app-common/angular-material.module';

import { AnimatedDigitComponent } from './animated-digit.component';



@NgModule({
  declarations: [AnimatedDigitComponent],
  exports: [
    AnimatedDigitComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ]
})
export class AnimatedDigitModule { }
