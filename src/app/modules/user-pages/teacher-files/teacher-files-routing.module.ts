import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TeacherFilesPage } from './teacher-files.page';

const routes: Routes = [
  {
    path: '',
    component: TeacherFilesPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherFilesPageRoutingModule {}
