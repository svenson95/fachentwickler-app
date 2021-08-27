import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../../app-common/angular-material.module';

import { ForgotPasswordPage } from './forgot-password.page';
import { ForgotPasswordPageRoutingModule } from './forgot-password-routing.module';

import { ButtonStateModule } from '../../components/button-state/button-state.module';

@NgModule({
  declarations: [ForgotPasswordPage],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    ForgotPasswordPageRoutingModule,
    ButtonStateModule
  ],
})
export class ForgotPasswordPageModule { }
