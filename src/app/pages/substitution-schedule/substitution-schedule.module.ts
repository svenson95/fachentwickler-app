import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubstitutionScheduleComponent } from './substitution-schedule.component';
import { SubstitutionScheduleRoutingModule } from './substitution-schedule-routing.module';
import { AngularMaterialModule } from '../../app-common/angular-material.module';



@NgModule({
  declarations: [SubstitutionScheduleComponent],
  imports: [
    CommonModule,
    SubstitutionScheduleRoutingModule,
    AngularMaterialModule
  ]
})
export class SubstitutionScheduleModule { }
