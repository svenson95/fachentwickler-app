import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../../app-common/snackbar/snackbar.component';

import { AuthService } from '../../services/auth/auth.service';
import { UserProgress, UserRole } from '../../models/user';
import { SubjectPost } from '../../models/subject';
import { Post } from '../../models/post';

@Component({
  selector: 'app-lesson-footer',
  templateUrl: './lesson-footer.component.html',
  styleUrls: ['./lesson-footer.component.scss']
})
export class LessonFooterComponent implements OnInit {

  @Input() post: Post | SubjectPost;
  alreadyRead: boolean;
  POST_ID: string;

  UserRole = UserRole;

  constructor(public authService: AuthService,
              private matSnackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    if (this.post.postId) {
      this.POST_ID = this.post.postId;
    } else if ('_id' in this.post) {
      this.POST_ID = this.post._id;
    }
    this.alreadyRead = this.authService.user.progress.includes(this.POST_ID);
  }

  /* -- Component functions -- */
  addUserProgress(): void {
    const lesson = {
      "userId": this.authService.user._id,
      "postId": this.POST_ID
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
