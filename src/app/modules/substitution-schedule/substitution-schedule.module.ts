import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardModule } from '../../core/components/card/card.module';
import { ScheduleCardModule } from '../../shared/components/schedule-card/schedule-card.module';
import { SubstitutionScheduleRoutingModule } from './substitution-schedule-routing.module';
import { SubstitutionSchedulePage } from './substitution-schedule.page';

@NgModule({
  declarations: [SubstitutionSchedulePage],
  imports: [CommonModule, CardModule, SubstitutionScheduleRoutingModule, ScheduleCardModule],
})
export class SubstitutionSchedulePageModule {}