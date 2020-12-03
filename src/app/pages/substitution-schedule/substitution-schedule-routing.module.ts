import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubstitutionScheduleComponent } from './substitution-schedule.component';

const routes: Routes = [
  {
    path: '',
    component: SubstitutionScheduleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubstitutionScheduleRoutingModule {}
