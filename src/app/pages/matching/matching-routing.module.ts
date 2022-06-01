import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatchingPage } from './matching.page';

const routes: Routes = [
  {
    path: '',
    component: MatchingPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatchingRoutingModule {}
