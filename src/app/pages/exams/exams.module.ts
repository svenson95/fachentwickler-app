import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../../app-common/angular-material.module';

import { ExamsComponent } from './exams.component';
import { ExamsRoutingModule } from './exams-routing.module';

import { ExamItemModule } from '../../components/exam-item/exam-item.module';
import { LoadingSpinnerModule } from '../../components/loading-spinner/loading-spinner.module';



@NgModule({
  declarations: [ExamsComponent],
  imports: [
    CommonModule,
    ExamsRoutingModule,
    AngularMaterialModule,
    ExamItemModule,
    LoadingSpinnerModule
  ]
})
export class ExamsModule { }
