import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../../app-common/angular-material.module';

import { SubstitutionSchedulePage } from './substitution-schedule.page';
import { SubstitutionScheduleRoutingModule } from './substitution-schedule-routing.module';
import { ScheduleCardModule } from '../../components/cards/schedule-card/schedule-card.module';



@NgModule({
  declarations: [SubstitutionSchedulePage],
  imports: [
    CommonModule,
    SubstitutionScheduleRoutingModule,
    AngularMaterialModule,
    ScheduleCardModule
  ]
})
export class SubstitutionSchedulePageModule { }
