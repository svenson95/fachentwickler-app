import { Component, Input } from '@angular/core';
import { DashboardData } from '../../../core/models/dashboard-data';
import { User } from '../../../core/models/user';
import { DataService } from '../../../core/services/data.service';
import { LoadingService } from '../../../core/services/loading.service';

@Component({
  selector: 'fe-user-progress-card',
  templateUrl: './user-progress-card.component.html',
  styleUrls: ['./user-progress-card.component.scss'],
})
export class UserProgressCardComponent {
  @Input() public user: User;

  @Input() public dashboard: DashboardData;

  public get lessonProgress(): number | string {
    return this.user.progress.length || '...';
  }

  public get lessonLength(): number | string {
    return this.dashboard.allLessons?.length || '...';
  }

  public get weekProgress(): number | string {
    return this.dashboard.nextLesson?.schoolWeek || '...';
  }

  public get weekLength(): number {
    return this.dataService.schoolWeeksLength;
  }

  public get schoolWeekPercentage(): number {
    const currentWeek = this.dashboard?.nextLesson?.schoolWeek;
    return (currentWeek / this.dataService.schoolWeeksLength) * 100;
  }

  constructor(private dataService: DataService, public loadingService: LoadingService) {}
}
