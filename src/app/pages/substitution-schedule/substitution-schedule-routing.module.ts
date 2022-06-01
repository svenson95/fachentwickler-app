import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubstitutionSchedulePage } from './substitution-schedule.page';

const routes: Routes = [
  {
    path: '',
    component: SubstitutionSchedulePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubstitutionScheduleRoutingModule {}
