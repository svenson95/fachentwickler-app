import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../../app-common/angular-material.module';

import { ScheduleComponent } from './schedule.component';



@NgModule({
  declarations: [ScheduleComponent],
  exports: [ScheduleComponent],
  imports: [
    CommonModule,
    AngularMaterialModule
  ]
})
export class ScheduleModule { }
