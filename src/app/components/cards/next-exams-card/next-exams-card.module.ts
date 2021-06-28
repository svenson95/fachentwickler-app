import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../../../app-common/angular-material.module';

import { NextExamsCardComponent } from './next-exams-card.component';
import { ExamItemModule } from '../../exam-item/exam-item.module';



@NgModule({
  declarations: [NextExamsCardComponent],
  exports: [
    NextExamsCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterialModule,
    ExamItemModule
  ]
})
export class NextExamsCardModule { }
