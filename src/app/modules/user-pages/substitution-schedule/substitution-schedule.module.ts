import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';

import { SubstitutionScheduleRoutingModule } from './substitution-schedule-routing.module';
import { SubstitutionSchedulePage } from './substitution-schedule.page';

@NgModule({
  declarations: [SubstitutionSchedulePage],
  imports: [SharedModule, SubstitutionScheduleRoutingModule],
})
export class SubstitutionSchedulePageModule {}
