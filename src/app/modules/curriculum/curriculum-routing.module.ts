import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurriculumPage } from './curriculum.page';

const routes: Routes = [
  {
    path: '',
    component: CurriculumPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurriculumPageRoutingModule {}
