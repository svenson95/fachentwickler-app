import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizComponent } from './quiz.component';
import { QuizRoutingModule } from './quiz-routing.module';
import { AngularMaterialModule } from '../../app-common/angular-material.module';


@NgModule({
  declarations: [QuizComponent],
  imports: [
    CommonModule,
    QuizRoutingModule,
    AngularMaterialModule
  ]
})
export class QuizModule { }
