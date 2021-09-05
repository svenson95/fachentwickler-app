import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../../app-common/angular-material.module';

import { LoginPage } from './login.page';
import { LoginPageRoutingModule } from './login-routing.module';

import { StateButtonModule } from '../../components/state-button/state-button.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    LoginPageRoutingModule,
    StateButtonModule
  ],
  declarations: [LoginPage],
})
export class LoginPageModule { }
