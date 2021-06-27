import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../../app-common/angular-material.module';

import { VerifyComponent } from './verify.component';
import { LoginPageRoutingModule } from './verify-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AngularMaterialModule,
        LoginPageRoutingModule
    ],
  declarations: [VerifyComponent],
})
export class VerifyModule { }
