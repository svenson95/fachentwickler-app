import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../../app-common/angular-material.module';

import { LandingPageComponent } from './landing-page.component';
import { LandingPageRoutingModule } from './landing-page-routing.module';
import { NextExamsCardModule } from '../../components/cards/next-exams-card/next-exams-card.module';
import { NewsCardModule } from '../../components/cards/news-card/news-card.module';
import { UserProgressCardModule } from '../../components/cards/user-progress-card/user-progress-card.module';
import { SchoolWeekCardModule } from '../../components/cards/school-week-card/school-week-card.module';
import { QuizCardModule } from '../../components/cards/quiz-card/quiz-card.module';
import { IndexcardsCardModule } from '../../components/cards/indexcards-card/indexcards-card.module';
import { MatchingGameModule } from '../../components/matching-game/matching-game.module';
import { ScheduleCardModule } from '../../components/cards/schedule-card/schedule-card.module';



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
    IndexcardsCardModule,
    MatchingGameModule,
    ScheduleCardModule,
  ]
})
export class LandingPageModule { }
