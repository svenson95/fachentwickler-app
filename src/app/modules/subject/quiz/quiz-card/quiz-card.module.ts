import { NgModule } from '@angular/core';

import { SharedModule } from '../../../../shared/shared.module';
import { AnswerIndicatorModule } from '../answer-indicator/answer-indicator.module';

import { QuizCardComponent } from './quiz-card.component';

@NgModule({
  declarations: [QuizCardComponent],
  exports: [QuizCardComponent],
  imports: [SharedModule, AnswerIndicatorModule],
})
export class QuizCardModule {}
