import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfileComponent } from './my-profile.component';
import { MyProfilePageRoutingModule } from './my-profile-routing.module';
import { AngularMaterialModule } from '../../app-common/angular-material.module';



@NgModule({
  declarations: [MyProfileComponent],
  imports: [
    CommonModule,
    MyProfilePageRoutingModule,
    AngularMaterialModule
  ]
})
export class MyProfileModule { }
