import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardModule } from '../../components/card/card.module';
import { TeacherFilesPageRoutingModule } from './teacher-files-routing.module';
import { TeacherFilesPage } from './teacher-files.page';

@NgModule({
  declarations: [TeacherFilesPage],
  imports: [CommonModule, CardModule, TeacherFilesPageRoutingModule],
})
export class TeacherFilesPageModule {}
