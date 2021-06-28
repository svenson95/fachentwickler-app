import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../../app-common/angular-material.module';

import { LoginComponent } from './login.component';
import { LoginPageRoutingModule } from './login-routing.module';

import { ButtonStateModule } from '../../components/button-state/button-state.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    LoginPageRoutingModule,
    ButtonStateModule
  ],
  declarations: [LoginComponent],
})
export class LoginModule { }
