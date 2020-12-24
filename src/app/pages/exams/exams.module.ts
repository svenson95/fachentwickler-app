import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamsComponent } from './exams.component';
import { ExamsRoutingModule } from './exams-routing.module';
import { AngularMaterialModule } from '../../app-common/angular-material.module';
import { ExamItemModule } from '../../components/exam-item/exam-item.module';



@NgModule({
  declarations: [ExamsComponent],
  imports: [
    CommonModule,
    ExamsRoutingModule,
    AngularMaterialModule,
    ExamItemModule
  ]
})
export class ExamsModule { }
