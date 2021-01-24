import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../../app-common/angular-material.module';

import { QuizComponent } from './quiz.component';
import { QuizRoutingModule } from './quiz-routing.module';
import { LessonFooterModule } from '../../components/lesson-footer/lesson-footer.module';
import {QuizCardModule} from '../../components/quiz-card/quiz-card.module';


@NgModule({
    declarations: [QuizComponent],
    exports: [
        QuizComponent
    ],
  imports: [
    CommonModule,
    QuizRoutingModule,
    AngularMaterialModule,
    LessonFooterModule,
    QuizCardModule
  ]
})
export class QuizModule { }
