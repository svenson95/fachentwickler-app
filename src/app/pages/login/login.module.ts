import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../../app-common/angular-material.module';
import { StateButtonModule } from '../../components/state-button/state-button.module';
import { LoginPageRoutingModule } from './login-routing.module';
import { LoginPage } from './login.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    LoginPageRoutingModule,
    StateButtonModule,
  ],
  declarations: [LoginPage],
})
export class LoginPageModule {}
