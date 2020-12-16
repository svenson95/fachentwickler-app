import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../../app-common/angular-material.module';

import { NextExamsCardComponent } from './next-exams-card.component';
import { ExamItemModule } from '../exam-item/exam-item.module';



@NgModule({
  declarations: [NextExamsCardComponent],
  exports: [
    NextExamsCardComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ExamItemModule
  ]
})
export class NextExamsCardModule { }
