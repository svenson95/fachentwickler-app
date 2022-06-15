import { Component } from '@angular/core';

import { schedule } from '@constants/schedule';
import { Schedule } from '@models/schedule';
import { AuthService } from '@services/auth.service';
import { DashboardService } from '@services/dashboard.service';
import { HeaderService } from '@services/header.service';

@Component({
  selector: 'fe-dashboard-page',
  templateUrl: './dashboard.page.html',
})
export class DashboardPage {
  public schedule: Schedule = schedule;

  constructor(
    private headerService: HeaderService,
    public dashboard: DashboardService,
    public authService: AuthService,
  ) {
    this.headerService.setPageTitle('Dashboard');
  }
}
