import { Component, Input } from '@angular/core';

import { UserRole } from '../../../core/models/user';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'fe-lesson-footer',
  templateUrl: './lesson-footer.component.html',
  styleUrls: ['./lesson-footer.component.scss'],
})
export class LessonFooterComponent {
  @Input() public postId: string;

  @Input() public isLoading: boolean;

  public UserRole = UserRole;

  constructor(public authService: AuthService) {}
}
