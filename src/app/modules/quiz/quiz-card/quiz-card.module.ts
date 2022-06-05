import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardModule } from '../../../core/components/card/card.module';
import { CheckmarkModule } from '../../../shared/components/checkmark/checkmark.module';
import { AnswerIndicatorModule } from '../answer-indicator/answer-indicator.module';
import { QuizCardComponent } from './quiz-card.component';

@NgModule({
  declarations: [QuizCardComponent],
  exports: [QuizCardComponent],
  imports: [CommonModule, CardModule, AnswerIndicatorModule, CheckmarkModule],
})
export class QuizCardModule {}
