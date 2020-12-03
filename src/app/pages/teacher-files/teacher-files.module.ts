import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherFilesComponent } from './teacher-files.component';
import { TeacherFilesPageRoutingModule } from './teacher-files-routing.module';
import { AngularMaterialModule } from '../../app-common/angular-material.module';



@NgModule({
  declarations: [TeacherFilesComponent],
  imports: [
    CommonModule,
    TeacherFilesPageRoutingModule,
    AngularMaterialModule
  ]
})
export class TeacherFilesModule { }
