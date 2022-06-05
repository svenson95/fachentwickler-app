import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../../core/angular-material.module';
import { CardModule } from '../../core/components/card/card.module';
import { MyProfilePageRoutingModule } from './my-profile-routing.module';
import { MyProfilePage } from './my-profile.page';

@NgModule({
  declarations: [MyProfilePage],
  imports: [CommonModule, ReactiveFormsModule, AngularMaterialModule, MyProfilePageRoutingModule, CardModule],
})
export class MyProfilePageModule {}
