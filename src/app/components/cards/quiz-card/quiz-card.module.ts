import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AnswerIndicatorModule } from '../../answer-indicator/answer-indicator.module';
import { CardModule } from '../../card/card.module';
import { CheckmarkModule } from '../../checkmark/checkmark.module';
import { QuizCardComponent } from './quiz-card.component';

@NgModule({
  declarations: [QuizCardComponent],
  exports: [QuizCardComponent],
  imports: [CommonModule, CardModule, AnswerIndicatorModule, CheckmarkModule],
})
export class QuizCardModule {}
