import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPage } from './dashboard.page';
import { NextExamsCardModule } from './next-exams-card/next-exams-card.module';
import { UserProgressCardModule } from './user-progress-card/user-progress-card.module';

@NgModule({
  declarations: [DashboardPage],
  imports: [SharedModule, DashboardRoutingModule, NextExamsCardModule, UserProgressCardModule],
})
export class DashboardPageModule {}
