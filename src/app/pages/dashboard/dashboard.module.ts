import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../../app-common/angular-material.module';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { PostLinkModule } from '../../components/post-link/post-link.module';
import { NextExamsCardModule } from '../../components/next-exams-card/next-exams-card.module';
import { ScheduleCardModule } from '../../components/schedule-card/schedule-card.module';
import { SchoolWeekCardModule } from '../../components/school-week-card/school-week-card.module';
import { NewsCardModule } from '../../components/news-card/news-card.module';
import { UserProgressCardModule } from '../../components/user-progress-card/user-progress-card.module';

@NgModule({
  declarations: [DashboardComponent],
    imports: [
      CommonModule,
      FormsModule,
      DashboardRoutingModule,
      AngularMaterialModule,
      PostLinkModule,
      SchoolWeekCardModule,
      NextExamsCardModule,
      ScheduleCardModule,
      NewsCardModule,
      UserProgressCardModule
    ]
})
export class DashboardModule { }
