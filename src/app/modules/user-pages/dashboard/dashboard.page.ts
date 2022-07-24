import { Component } from '@angular/core';

import { schedule } from '@constants/schedule';
import { Schedule } from '@models/schedule';
import { UserData } from '@models/user';
import { DashboardService } from '@services/dashboard.service';
import { HeaderService } from '@services/header.service';
import { UserService } from '@services/user.service';

@Component({
  selector: 'fe-dashboard-page',
  templateUrl: './dashboard.page.html',
})
export class DashboardPage {
  public schedule: Schedule = schedule;

  public userData: UserData;

  constructor(private headerService: HeaderService, public dashboard: DashboardService, private user: UserService) {
    this.headerService.setPageTitle('Dashboard');

    this.user.data$.subscribe((data) => {
      this.userData = data;
    });
  }
}
