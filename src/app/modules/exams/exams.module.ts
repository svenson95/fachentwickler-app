import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../../core/angular-material.module';
import { CardModule } from '../../core/components/card/card.module';
import { LoadingSpinnerModule } from '../../core/components/loading-spinner/loading-spinner.module';
import { ExamItemModule } from '../../shared/components/exam-item/exam-item.module';
import { ExamsRoutingModule } from './exams-routing.module';
import { ExamsPage } from './exams.page';

@NgModule({
  declarations: [ExamsPage],
  imports: [CommonModule, ExamsRoutingModule, AngularMaterialModule, CardModule, ExamItemModule, LoadingSpinnerModule],
})
export class ExamsPageModule {}
