import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExamsPage } from './exams.page';

const routes: Routes = [
  {
    path: '',
    component: ExamsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamsRoutingModule {}
