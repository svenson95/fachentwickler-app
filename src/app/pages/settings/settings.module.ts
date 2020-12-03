import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { SettingsPageRoutingModule } from './settings-routing.module';
import { AngularMaterialModule } from '../../app-common/angular-material.module';



@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    SettingsPageRoutingModule,
    AngularMaterialModule
  ]
})
export class SettingsModule { }
