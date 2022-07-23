import { Component, Input } from '@angular/core';

import { SCHOOL_WEEKS_LENGTH } from '@constants/school-weeks';
import { Post } from '@models/post';
import { UserData } from '@models/user';

@Component({
  selector: 'fe-user-progress-card',
  templateUrl: './user-progress-card.component.html',
  styleUrls: ['./user-progress-card.component.scss'],
})
export class UserProgressCardComponent {
  @Input() public user: UserData;

  @Input() public allLessons: string[];

  @Input() public nextLesson: Post;

  @Input() public lessonsPercentage: number;

  public get lessonProgress(): number | string {
    return this.user?.progress.length ?? '...';
  }

  public get lessonLength(): number | string {
    return this.allLessons?.length || '...';
  }

  public get weekProgress(): number | string {
    return this.nextLesson?.schoolWeek || '...';
  }

  public get weekLength(): number {
    return SCHOOL_WEEKS_LENGTH;
  }

  public get schoolWeekPercentage(): number {
    const currentWeek = this.nextLesson?.schoolWeek;
    return (currentWeek / SCHOOL_WEEKS_LENGTH) * 100;
  }
}
