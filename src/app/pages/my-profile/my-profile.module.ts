import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../../app-common/angular-material.module';

import { MyProfileComponent } from './my-profile.component';
import { MyProfilePageRoutingModule } from './my-profile-routing.module';



@NgModule({
  declarations: [MyProfileComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    MyProfilePageRoutingModule
  ]
})
export class MyProfileModule { }
