import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { QuizCardModule } from '../../components/cards/quiz-card/quiz-card.module';
import { LessonFooterModule } from '../../components/lesson-footer/lesson-footer.module';
import { LoadingSpinnerModule } from '../../components/loading-spinner/loading-spinner.module';
import { AngularMaterialModule } from '../../shared/angular-material.module';
import { QuizRoutingModule } from './quiz-routing.module';
import { QuizPage } from './quiz.page';

@NgModule({
  declarations: [QuizPage],
  exports: [QuizPage],
  imports: [
    CommonModule,
    QuizRoutingModule,
    AngularMaterialModule,
    LessonFooterModule,
    QuizCardModule,
    LoadingSpinnerModule,
  ],
})
export class QuizPageModule {}
