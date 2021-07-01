import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../../app-common/angular-material.module';

import { VerifyComponent } from './verify.component';
import { VerifyPageRoutingModule } from './verify-routing.module';

import { ButtonStateModule } from '../../components/button-state/button-state.module';

@NgModule({
  declarations: [VerifyComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    VerifyPageRoutingModule,
    ButtonStateModule
  ],
})
export class VerifyModule { }
