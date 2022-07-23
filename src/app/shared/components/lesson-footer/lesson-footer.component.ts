import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { UserData, UserRole } from '@models/user';
import { AuthService } from '@services/auth.service';
import { DashboardService } from '@services/dashboard.service';
import { UserService } from '@services/user.service';

@Component({
  selector: 'fe-lesson-footer',
  templateUrl: './lesson-footer.component.html',
  styleUrls: ['./lesson-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LessonFooterComponent {
  @Input() public postId: string;

  // TODO: check if isLoading can be refactored to fe-state-button component
  @Input() public isLoading: boolean;

  public userData: UserData = this.user.data;

  public UserRole = UserRole;

  constructor(public auth: AuthService, private dashboard: DashboardService, private user: UserService) {}

  public lessonSolved(): void {
    this.user.setLessonSolved(this.postId, () => {
      this.dashboard.getNextLesson();
    });
  }
}
