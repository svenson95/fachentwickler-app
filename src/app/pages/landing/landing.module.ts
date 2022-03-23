import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../../app-common/angular-material.module';

import { LandingPage } from './landing.page';
import { LandingRoutingModule } from './landing-routing.module';
import { NextExamsCardModule } from '../../components/cards/next-exams-card/next-exams-card.module';
import { UserProgressCardModule } from '../../components/cards/user-progress-card/user-progress-card.module';
import { SchoolWeekCardModule } from '../../components/cards/school-week-card/school-week-card.module';
import { QuizCardModule } from '../../components/cards/quiz-card/quiz-card.module';
import { IndexCardModule } from '../../components/cards/index-card/index-card.module';
import { MatchingCardModule } from '../../components/cards/matching-card/matching-card.module';
import { ScheduleCardModule } from '../../components/cards/schedule-card/schedule-card.module';
import { NewsCardContainerModule } from '../../containers/news-card-container/news-card-container.module';
import {LoadingSpinnerModule} from '../../components/loading-spinner/loading-spinner.module';



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
        MatchingCardModule,
        ScheduleCardModule,
        NewsCardContainerModule,
        LoadingSpinnerModule,
    ]
})
export class LandingPageModule { }
