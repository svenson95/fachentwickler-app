import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../../app-common/angular-material.module';

import { ForgotPasswordComponent } from './forgot-password.component';
import { ForgotPasswordPageRoutingModule } from './forgot-password-routing.module';

import { ButtonStateModule } from '../../components/button-state/button-state.module';

@NgModule({
  declarations: [ForgotPasswordComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    ForgotPasswordPageRoutingModule,
    ButtonStateModule
  ],
})
export class ForgotPasswordModule { }
