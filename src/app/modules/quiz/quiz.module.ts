import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../../core/angular-material.module';
import { LoadingSpinnerModule } from '../../core/components/loading-spinner/loading-spinner.module';
import { LessonFooterModule } from '../../shared/components/lesson-footer/lesson-footer.module';
import { QuizCardModule } from './quiz-card/quiz-card.module';
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
