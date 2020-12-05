import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../../app-common/angular-material.module';

import { LoginComponent } from './login.component';
import { LoginPageRoutingModule } from './login-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AngularMaterialModule,
        LoginPageRoutingModule
    ],
  declarations: [LoginComponent],
})
export class LoginModule { }
