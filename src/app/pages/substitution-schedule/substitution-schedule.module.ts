import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubstitutionScheduleComponent } from './substitution-schedule.component';
import { SubstitutionScheduleRoutingModule } from './substitution-schedule-routing.module';
import { AngularMaterialModule } from '../../app-common/angular-material.module';
import { ScheduleModule } from '../../components/schedule/schedule.module';



@NgModule({
  declarations: [SubstitutionScheduleComponent],
  imports: [
    CommonModule,
    SubstitutionScheduleRoutingModule,
    AngularMaterialModule,
    ScheduleModule
  ]
})
export class SubstitutionScheduleModule { }
