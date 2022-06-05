import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../../../shared/angular-material.module';
import { CardModule } from '../../card/card.module';
import { ExamItemModule } from '../../exam-item/exam-item.module';
import { LoadingSpinnerModule } from '../../loading-spinner/loading-spinner.module';
import { NextExamsCardComponent } from './next-exams-card.component';

@NgModule({
  declarations: [NextExamsCardComponent],
  exports: [NextExamsCardComponent],
  imports: [CommonModule, CardModule, AngularMaterialModule, ExamItemModule, LoadingSpinnerModule],
})
export class NextExamsCardModule {}
