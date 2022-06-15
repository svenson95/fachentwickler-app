import { Component, Input } from '@angular/core';

import { Post } from '@models/post';
import { User } from '@models/user';
import { DashboardService } from '@services/dashboard.service';
import { LoadingService } from '@services/loading.service';

@Component({
  selector: 'fe-user-progress-card',
  templateUrl: './user-progress-card.component.html',
  styleUrls: ['./user-progress-card.component.scss'],
})
export class UserProgressCardComponent {
  @Input() public user: User;

  @Input() public allLessons: string[];

  @Input() public nextLesson: Post;

  @Input() public lessonsPercentage: number;

  public get lessonProgress(): number | string {
    return this.user?.progress.length || '...';
  }

  public get lessonLength(): number | string {
    return this.allLessons?.length || '...';
  }

  public get weekProgress(): number | string {
    return this.nextLesson?.schoolWeek || '...';
  }

  public get weekLength(): number {
    return this.dashboard.SCHOOL_WEEKS_LENGTH;
  }

  public get schoolWeekPercentage(): number {
    const currentWeek = this.nextLesson?.schoolWeek;
    return (currentWeek / this.dashboard.SCHOOL_WEEKS_LENGTH) * 100;
  }

  constructor(public loadingService: LoadingService, public dashboard: DashboardService) {}
}
