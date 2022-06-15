import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared/shared.module';

import { TeacherFilesPageRoutingModule } from './teacher-files-routing.module';
import { TeacherFilesPage } from './teacher-files.page';

@NgModule({
  declarations: [TeacherFilesPage],
  imports: [SharedModule, TeacherFilesPageRoutingModule],
})
export class TeacherFilesPageModule {}
