import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../../app-common/angular-material.module';

import { ForgotPasswordPage } from './forgot-password.page';
import { ForgotPasswordPageRoutingModule } from './forgot-password-routing.module';

import { StateButtonModule } from '../../components/state-button/state-button.module';

@NgModule({
  declarations: [ForgotPasswordPage],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    ForgotPasswordPageRoutingModule,
    StateButtonModule
  ],
})
export class ForgotPasswordPageModule { }
