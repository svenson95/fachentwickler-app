import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexcardsPage } from './indexcards.page';

const routes: Routes = [
  {
    path: '',
    component: IndexcardsPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexcardsRoutingModule {}
