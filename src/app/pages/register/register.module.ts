import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../../app-common/angular-material.module';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterPage } from './register.page';
import { StateButtonModule } from '../../components/state-button/state-button.module';


@NgModule({
  declarations: [RegisterPage],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    RegisterRoutingModule,
    StateButtonModule
  ]
})
export class RegisterPageModule { }
