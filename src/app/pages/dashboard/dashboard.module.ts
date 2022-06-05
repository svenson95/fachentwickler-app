import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NextExamsCardModule } from '../../components/cards/next-exams-card/next-exams-card.module';
import { ScheduleCardModule } from '../../components/cards/schedule-card/schedule-card.module';
import { SchoolWeekCardModule } from '../../components/cards/school-week-card/school-week-card.module';
import { UserProgressCardModule } from '../../components/cards/user-progress-card/user-progress-card.module';
import { LoadingSpinnerModule } from '../../components/loading-spinner/loading-spinner.module';
import { PostLinkModule } from '../../components/post-link/post-link.module';
import { NewsCardContainerModule } from '../../containers/news-card-container/news-card-container.module';
import { AngularMaterialModule } from '../../shared/angular-material.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPage } from './dashboard.page';

@NgModule({
  declarations: [DashboardPage],
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
    NewsCardContainerModule,
  ],
})
export class DashboardPageModule {}
