import { Component, OnInit } from '@angular/core';
import { schedule } from '../../core/constants/schedule';
import { DashboardData } from '../../core/models/dashboard-data';
import { Schedule } from '../../core/models/schedule';
import { AuthService } from '../../core/services/auth.service';
import { DataService } from '../../core/services/data.service';
import { HeaderService } from '../../core/services/header.service';

@Component({
  selector: 'fe-dashboard-page',
  templateUrl: './dashboard.page.html',
})
export class DashboardPage implements OnInit {
  public schedule: Schedule = schedule;

  constructor(private headerService: HeaderService, public dataService: DataService, public authService: AuthService) {
    this.headerService.setPageTitle('Dashboard');
  }

  public ngOnInit(): void {
    this.setupComponent();
  }

  private setupComponent(): void {
    if (!this.dataService.dashboard) {
      this.dataService.dashboard = {} as DashboardData;
      this.authService.fetchNextExams();
      this.authService.fetchUsersNextLesson();
    }
  }
}
