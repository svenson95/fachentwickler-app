import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../../app-common/angular-material.module';

import { SubstitutionScheduleComponent } from './substitution-schedule.component';
import { SubstitutionScheduleRoutingModule } from './substitution-schedule-routing.module';
import { ScheduleCardModule } from '../../components/schedule-card/schedule-card.module';



@NgModule({
  declarations: [SubstitutionScheduleComponent],
  imports: [
    CommonModule,
    SubstitutionScheduleRoutingModule,
    AngularMaterialModule,
    ScheduleCardModule
  ]
})
export class SubstitutionScheduleModule { }
