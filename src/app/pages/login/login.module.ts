import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { LoginPageRoutingModule } from './login-routing.module';
import {AngularMaterialModule} from '../../app-common/angular-material.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        LoginPageRoutingModule,
        ReactiveFormsModule,
        AngularMaterialModule
    ],
  declarations: [LoginComponent],
})
export class LoginModule { }
