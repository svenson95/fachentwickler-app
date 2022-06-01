import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../../app-common/angular-material.module';
import { TeacherFilesPageRoutingModule } from './teacher-files-routing.module';
import { TeacherFilesPage } from './teacher-files.page';

@NgModule({
  declarations: [TeacherFilesPage],
  imports: [CommonModule, TeacherFilesPageRoutingModule, AngularMaterialModule],
})
export class TeacherFilesPageModule {}
