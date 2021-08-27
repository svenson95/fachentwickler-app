import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatchingPage } from './matching.page';

const routes: Routes = [
  {
    path: '',
    component: MatchingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatchingRoutingModule { }
