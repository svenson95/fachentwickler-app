import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeacherFilesComponent } from './teacher-files.component';

const routes: Routes = [
  {
    path: '',
    component: TeacherFilesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherFilesPageRoutingModule {}
