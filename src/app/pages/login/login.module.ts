import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../../app-common/angular-material.module';

import { LoginPage } from './login.page';
import { LoginPageRoutingModule } from './login-routing.module';

import { ButtonStateModule } from '../../components/button-state/button-state.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    LoginPageRoutingModule,
    ButtonStateModule
  ],
  declarations: [LoginPage],
})
export class LoginPageModule { }
