import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../../app-common/snackbar/snackbar.component';

import { AuthService } from '../../services/auth/auth.service';
import { UserProgress, UserRole } from '../../models/user';

@Component({
  selector: 'app-lesson-footer',
  templateUrl: './lesson-footer.component.html',
  styleUrls: ['./lesson-footer.component.scss']
})
export class LessonFooterComponent implements OnInit {

  @Input() postId: string;
  alreadyRead: boolean;

  UserRole = UserRole;

  constructor(public authService: AuthService,
              private matSnackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.alreadyRead = this.authService.user.progress.includes(this.postId);
  }

  /* -- Component functions -- */
  addUserProgress(): void {
    const lesson = {
      "userId": this.authService.user._id,
      "postId": this.postId
    } as UserProgress;

    this.authService.addProgress(lesson).subscribe(
      (response) => {
        this.alreadyRead = true;
        this.matSnackBar.openFromComponent(SnackbarComponent, {
          duration: 3000,
          data: 'Lektion als gelesen markiert'
        });
      }, (error) => {
        console.log('error while POST user/add-progress', error);
        this.matSnackBar.openFromComponent(SnackbarComponent, {
          duration: 3000,
          data: 'Fehler: ' + (typeof error === 'string' ? error : error.message)
        });
      }
    );
  }

}
