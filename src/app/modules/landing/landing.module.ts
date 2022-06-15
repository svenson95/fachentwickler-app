import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { IndexCardModule } from '../subject/indexcards/index-card/index-card.module';
import { MatchingsCardModule } from '../subject/matchings/matchings-card/matchings-card.module';
import { QuizCardModule } from '../subject/quiz/quiz-card/quiz-card.module';
import { NextExamsCardModule } from '../user-pages/dashboard/next-exams-card/next-exams-card.module';
import { UserProgressCardModule } from '../user-pages/dashboard/user-progress-card/user-progress-card.module';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingPage } from './landing.page';
import { Section1Component } from './sections/section1/section1.component';
import { Section2Component } from './sections/section2/section2.component';
import { Section3Component } from './sections/section3/section3.component';
import { Section4Component } from './sections/section4/section4.component';
import { WelcomeBannerComponent } from './sections/welcome-banner/welcome-banner.component';

@NgModule({
  declarations: [
    LandingPage,
    WelcomeBannerComponent,
    Section1Component,
    Section2Component,
    Section3Component,
    Section4Component,
  ],
  imports: [
    SharedModule,
    LandingRoutingModule,
    NextExamsCardModule,
    UserProgressCardModule,
    QuizCardModule,
    IndexCardModule,
    MatchingsCardModule,
  ],
})
export class LandingPageModule {}
