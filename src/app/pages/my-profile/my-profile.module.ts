import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../../app-common/angular-material.module';

import { MyProfilePage } from './my-profile.page';
import { MyProfilePageRoutingModule } from './my-profile-routing.module';



@NgModule({
  declarations: [MyProfilePage],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    MyProfilePageRoutingModule
  ]
})
export class MyProfilePageModule { }
