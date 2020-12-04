import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexCardsComponent } from './index-cards.component';

const routes: Routes = [
  {
    path: '',
    component: IndexCardsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexCardsRoutingModule { }
