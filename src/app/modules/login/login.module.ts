import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../../core/angular-material.module';
import { CardModule } from '../../core/components/card/card.module';
import { StateButtonModule } from '../../core/components/state-button/state-button.module';
import { LoginPageRoutingModule } from './login-routing.module';
import { LoginPage } from './login.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    LoginPageRoutingModule,
    CardModule,
    StateButtonModule,
  ],
  declarations: [LoginPage],
})
export class LoginPageModule {}
