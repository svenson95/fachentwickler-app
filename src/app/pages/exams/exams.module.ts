import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardModule } from '../../components/card/card.module';
import { ExamItemModule } from '../../components/exam-item/exam-item.module';
import { LoadingSpinnerModule } from '../../components/loading-spinner/loading-spinner.module';
import { AngularMaterialModule } from '../../shared/angular-material.module';
import { ExamsRoutingModule } from './exams-routing.module';
import { ExamsPage } from './exams.page';

@NgModule({
  declarations: [ExamsPage],
  imports: [CommonModule, ExamsRoutingModule, AngularMaterialModule, CardModule, ExamItemModule, LoadingSpinnerModule],
})
export class ExamsPageModule {}
