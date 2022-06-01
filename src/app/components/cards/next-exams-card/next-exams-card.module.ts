import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../../../app-common/angular-material.module';
import { ExamItemModule } from '../../exam-item/exam-item.module';
import { LoadingSpinnerModule } from '../../loading-spinner/loading-spinner.module';
import { NextExamsCardComponent } from './next-exams-card.component';

@NgModule({
  declarations: [NextExamsCardComponent],
  exports: [NextExamsCardComponent],
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterialModule,
    ExamItemModule,
    LoadingSpinnerModule,
  ],
})
export class NextExamsCardModule {}
