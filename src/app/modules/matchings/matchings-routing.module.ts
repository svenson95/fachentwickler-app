import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatchingsPage } from './matchings.page';

const routes: Routes = [
  {
    path: '',
    component: MatchingsPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatchingsRoutingModule {}
