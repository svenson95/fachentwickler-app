import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../../app-common/angular-material.module';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { PostLinkModule } from '../../components/post-link/post-link.module';
import { NextExamsCardModule } from '../../components/cards/next-exams-card/next-exams-card.module';
import { ScheduleCardModule } from '../../components/cards/schedule-card/schedule-card.module';
import { SchoolWeekCardModule } from '../../components/cards/school-week-card/school-week-card.module';
import { UserProgressCardModule } from '../../components/cards/user-progress-card/user-progress-card.module';
import { LoadingSpinnerModule } from '../../components/loading-spinner/loading-spinner.module';
import { NewsCardContainerModule } from '../../containers/news-card-container/news-card-container.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AngularMaterialModule,
    PostLinkModule,
    SchoolWeekCardModule,
    NextExamsCardModule,
    ScheduleCardModule,
    UserProgressCardModule,
    LoadingSpinnerModule,
    NewsCardContainerModule
  ]
})
export class DashboardModule { }
