import { Component, Input, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';

import { AuthService } from '../../services/auth/auth.service';
import { DataService } from '../../services/data/data.service';
import { UserRole } from '../../models/user';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-lesson-footer',
  templateUrl: './lesson-footer.component.html',
  styleUrls: ['./lesson-footer.component.scss']
})
export class LessonFooterComponent implements OnInit {

  @Input() postId: string;
  isLoading: boolean;

  UserRole = UserRole;

  constructor(public authService: AuthService,
              public dataService: DataService,
              private loadService: LoadingService,
  ) {
    this.loadService.loading$.pipe(delay(0)).subscribe((status: boolean) => {
      this.isLoading = status;
    });
  }

  ngOnInit(): void {
  }

  alreadyRead(): boolean {
    return this.authService.user.progress.includes(this.postId);
  }

}
