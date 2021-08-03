import { Component, Input, OnInit } from '@angular/core';

import { UserRole } from '../../models/user';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'fe-lesson-footer',
  templateUrl: './lesson-footer.component.html'
})
export class LessonFooterComponent implements OnInit {

  @Input() postId: string;
  @Input() isLoading: boolean;

  UserRole = UserRole;

  constructor(public authService: AuthService) {
  }

  ngOnInit(): void {
  }
}
