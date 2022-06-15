import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LegalPage } from './legal.page';

const routes: Routes = [
  {
    path: '',
    component: LegalPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LegalPageRoutingModule {}
