import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
import { Subscription } from 'rxjs';

import { UserRole } from '../../models/user';
import { AuthService } from '../../services/auth/auth.service';
import { DataService } from '../../services/data/data.service';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'fe-lesson-footer',
  templateUrl: './lesson-footer.component.html'
})
export class LessonFooterComponent implements OnInit, OnDestroy {

  @Input() postId: string;
  isLoading: boolean;
  loadingSubscription: Subscription;

  UserRole = UserRole;

  constructor(public authService: AuthService,
              public dataService: DataService,
              private loadService: LoadingService,
  ) {
  }

  ngOnInit(): void {
    this.loadingSubscription = this.loadService.loading$.pipe(delay(0)).subscribe(status => this.isLoading = status);
  }

  ngOnDestroy(): void {
    this.loadingSubscription.unsubscribe();
  }

  alreadyRead(): boolean {
    return this.authService.user.progress.includes(this.postId);
  }

}
