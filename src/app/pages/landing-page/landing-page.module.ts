import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../../app-common/angular-material.module';

import { LandingPageComponent } from './landing-page.component';
import { LandingPageRoutingModule } from './landing-page-routing.module';
import { NextExamsCardModule } from '../../components/next-exams-card/next-exams-card.module';
import { NewsCardModule } from '../../components/news-card/news-card.module';
import { UserProgressCardModule } from '../../components/user-progress-card/user-progress-card.module';
import { SchoolWeekCardModule } from '../../components/school-week-card/school-week-card.module';
import { QuizCardModule } from '../../components/quiz-card/quiz-card.module';
import { IndexcardsCardModule } from '../../components/indexcards-card/indexcards-card.module';



@NgModule({
  declarations: [LandingPageComponent],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    AngularMaterialModule,
    NextExamsCardModule,
    NewsCardModule,
    UserProgressCardModule,
    SchoolWeekCardModule,
    QuizCardModule,
    IndexcardsCardModule
  ]
})
export class LandingPageModule { }
