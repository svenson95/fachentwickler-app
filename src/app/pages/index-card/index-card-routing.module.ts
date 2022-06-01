import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexCardPage } from './index-card.page';

const routes: Routes = [
  {
    path: '',
    component: IndexCardPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexCardRoutingModule {}
