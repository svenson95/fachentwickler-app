import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, Input } from '@angular/core';

import { ExamDate } from '@models/exam-date';
import { Post } from '@models/post';
import { DataService } from '@services/data.service';
import { PostType } from 'src/app/core/types/post-type';

@Component({
  selector: 'fe-exam-item',
  templateUrl: './exam-item.component.html',
  styleUrls: ['./exam-item.component.scss'],
  animations: [
    trigger('slide', [
      state(
        'void',
        style({
          // opacity: 0,
          height: 0,
          'padding-top': 0,
        }),
      ),
      state(
        '*',
        style({
          // opacity: 1,
          height: '*',
          'padding-top': '10px',
        }),
      ),
      transition('* => void', animate('400ms ease-out')),
      transition('void => *', animate('400ms ease-out')),
    ]),
  ],
})
export class ExamItemComponent {
  @Input() public exam: ExamDate;

  public examLessons: Post[] = [];

  public lessonsVisible = false;

  public isLoading = false;

  constructor(private dataService: DataService) {}

  public showLessons(): void {
    if (this.examLessons.length === 0) {
      const postIdsArray = `${this.exam.lessons.join()}`;
      this.isLoading = true;

      this.dataService.getMultiplePosts(postIdsArray).subscribe((response: PostType[]) => {
        const posts = response;
        this.isLoading = false;

        posts.sort((a, b) => {
          if (a.lessonDate > b.lessonDate) return 1;
          if (a.lessonDate < b.lessonDate) return -1;
          return 0;
        });

        this.examLessons = posts;
        this.lessonsVisible = !this.lessonsVisible;
      });
    } else {
      this.lessonsVisible = !this.lessonsVisible;
    }
  }
}
