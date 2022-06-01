import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../../app-common/angular-material.module';
import { ScheduleCardModule } from '../../components/cards/schedule-card/schedule-card.module';
import { SubstitutionScheduleRoutingModule } from './substitution-schedule-routing.module';
import { SubstitutionSchedulePage } from './substitution-schedule.page';

@NgModule({
  declarations: [SubstitutionSchedulePage],
  imports: [
    CommonModule,
    SubstitutionScheduleRoutingModule,
    AngularMaterialModule,
    ScheduleCardModule,
  ],
})
export class SubstitutionSchedulePageModule {}
