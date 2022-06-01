import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../../app-common/angular-material.module';
import { MyProfilePageRoutingModule } from './my-profile-routing.module';
import { MyProfilePage } from './my-profile.page';

@NgModule({
  declarations: [MyProfilePage],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    MyProfilePageRoutingModule,
  ],
})
export class MyProfilePageModule {}
