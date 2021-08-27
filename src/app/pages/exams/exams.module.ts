import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../../app-common/angular-material.module';

import { ExamsPage } from './exams.page';
import { ExamsRoutingModule } from './exams-routing.module';

import { ExamItemModule } from '../../components/exam-item/exam-item.module';
import { LoadingSpinnerModule } from '../../components/loading-spinner/loading-spinner.module';



@NgModule({
  declarations: [ExamsPage],
  imports: [
    CommonModule,
    ExamsRoutingModule,
    AngularMaterialModule,
    ExamItemModule,
    LoadingSpinnerModule
  ]
})
export class ExamsPageModule { }
