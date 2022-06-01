import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../../app-common/angular-material.module';
import { ScheduleComponent } from './schedule.component';

@NgModule({
  declarations: [ScheduleComponent],
  exports: [ScheduleComponent],
  imports: [CommonModule, AngularMaterialModule],
})
export class ScheduleModule {}
