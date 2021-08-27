import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherFilesPage } from './teacher-files.page';
import { TeacherFilesPageRoutingModule } from './teacher-files-routing.module';
import { AngularMaterialModule } from '../../app-common/angular-material.module';



@NgModule({
  declarations: [TeacherFilesPage],
  imports: [
    CommonModule,
    TeacherFilesPageRoutingModule,
    AngularMaterialModule
  ]
})
export class TeacherFilesPageModule { }
