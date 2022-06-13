import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { QuizCardModule } from './quiz-card/quiz-card.module';
import { QuizRoutingModule } from './quiz-routing.module';
import { QuizPage } from './quiz.page';

@NgModule({
  declarations: [QuizPage],
  exports: [QuizPage],
  imports: [SharedModule, QuizRoutingModule, QuizCardModule],
})
export class QuizPageModule {}
