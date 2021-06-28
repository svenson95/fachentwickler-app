import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../../app-common/angular-material.module';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { ButtonStateModule } from '../../components/button-state/button-state.module';


@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    RegisterRoutingModule,
    ButtonStateModule
  ]
})
export class RegisterModule { }
