import { Component, Input } from '@angular/core';

import { UserRole } from '@models/user';
import { AuthService } from '@services/auth.service';
import { DashboardService } from '@services/dashboard.service';

@Component({
  selector: 'fe-lesson-footer',
  templateUrl: './lesson-footer.component.html',
  styleUrls: ['./lesson-footer.component.scss'],
})
export class LessonFooterComponent {
  @Input() public postId: string;

  @Input() public isLoading: boolean;

  public UserRole = UserRole;

  constructor(public authService: AuthService, private dashboard: DashboardService) {}

  public lessonSolved(): void {
    this.authService.setLessonSolved(this.postId);
    this.dashboard.getNextLesson();
  }
}
