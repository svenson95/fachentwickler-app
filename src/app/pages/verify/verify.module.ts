import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../../app-common/angular-material.module';

import { VerifyPage } from './verify.page';
import { VerifyPageRoutingModule } from './verify-routing.module';

import { ButtonStateModule } from '../../components/button-state/button-state.module';
import { CheckmarkModule } from '../../components/checkmark/checkmark.module';

@NgModule({
  declarations: [VerifyPage],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    VerifyPageRoutingModule,
    ButtonStateModule,
    CheckmarkModule
  ],
})
export class VerifyPageModule { }
