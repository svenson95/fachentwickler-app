import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../../core/angular-material.module';
import { LoadingSpinnerModule } from '../../core/components/loading-spinner/loading-spinner.module';
import { NewsCardModule } from '../../shared/components/news-card/news-card.module';
import { ScheduleCardModule } from '../../shared/components/schedule-card/schedule-card.module';
import { SchoolWeekCardModule } from '../../shared/components/school-week-card/school-week-card.module';
import { NextExamsCardModule } from '../dashboard/next-exams-card/next-exams-card.module';
import { UserProgressCardModule } from '../dashboard/user-progress-card/user-progress-card.module';
import { IndexCardModule } from '../indexcards/index-card/index-card.module';
import { MatchingsCardModule } from '../matchings/matchings-card/matchings-card.module';
import { QuizCardModule } from '../quiz/quiz-card/quiz-card.module';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingPage } from './landing.page';

@NgModule({
  declarations: [LandingPage],
  imports: [
    CommonModule,
    LandingRoutingModule,
    AngularMaterialModule,
    NextExamsCardModule,
    UserProgressCardModule,
    SchoolWeekCardModule,
    QuizCardModule,
    IndexCardModule,
    MatchingsCardModule,
    ScheduleCardModule,
    NewsCardModule,
    LoadingSpinnerModule,
  ],
})
export class LandingPageModule {}
