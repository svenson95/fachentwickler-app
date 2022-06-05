import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../../../core/angular-material.module';
import { CardModule } from '../../../core/components/card/card.module';
import { LoadingSpinnerModule } from '../../../core/components/loading-spinner/loading-spinner.module';
import { ExamItemModule } from '../../../shared/components/exam-item/exam-item.module';
import { NextExamsCardComponent } from './next-exams-card.component';

@NgModule({
  declarations: [NextExamsCardComponent],
  exports: [NextExamsCardComponent],
  imports: [CommonModule, CardModule, AngularMaterialModule, ExamItemModule, LoadingSpinnerModule],
})
export class NextExamsCardModule {}
