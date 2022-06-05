import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CardModule } from '../../components/card/card.module';
import { AngularMaterialModule } from '../../shared/angular-material.module';
import { MyProfilePageRoutingModule } from './my-profile-routing.module';
import { MyProfilePage } from './my-profile.page';

@NgModule({
  declarations: [MyProfilePage],
  imports: [CommonModule, ReactiveFormsModule, AngularMaterialModule, MyProfilePageRoutingModule, CardModule],
})
export class MyProfilePageModule {}
