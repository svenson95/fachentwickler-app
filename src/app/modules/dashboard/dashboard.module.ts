import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../../core/angular-material.module';
import { LoadingSpinnerModule } from '../../core/components/loading-spinner/loading-spinner.module';
import { NewsCardModule } from '../../shared/components/news-card/news-card.module';
import { PostLinkModule } from '../../shared/components/post-link/post-link.module';
import { ScheduleCardModule } from '../../shared/components/schedule-card/schedule-card.module';
import { SchoolWeekCardModule } from '../../shared/components/school-week-card/school-week-card.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPage } from './dashboard.page';
import { NextExamsCardModule } from './next-exams-card/next-exams-card.module';
import { UserProgressCardModule } from './user-progress-card/user-progress-card.module';

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
    NewsCardModule,
  ],
})
export class DashboardPageModule {}
