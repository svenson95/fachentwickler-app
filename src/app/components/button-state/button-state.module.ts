import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../../app-common/angular-material.module';

import { ButtonStateComponent } from './button-state.component';



@NgModule({
  declarations: [ButtonStateComponent],
  exports: [ButtonStateComponent],
  imports: [
    CommonModule,
    AngularMaterialModule
  ]
})
export class ButtonStateModule { }
