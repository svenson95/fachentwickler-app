import { Component, Input } from '@angular/core';
import { ExamDate } from '../../../core/models/exam-date';
import { Post } from '../../../core/models/post';
import { DataService } from '../../../core/services/data.service';

@Component({
  selector: 'fe-exam-item',
  templateUrl: './exam-item.component.html',
  styleUrls: ['./exam-item.component.scss'],
})
export class ExamItemComponent {
  @Input() public exam: ExamDate;

  public examLessons: Post[] = [];

  public lessonsVisible = false;

  constructor(private dataService: DataService) {}

  public showLessons(): void {
    this.lessonsVisible = !this.lessonsVisible;
    if (this.examLessons.length === 0) {
      const postIdsArray = `_${this.exam.lessons.join()}`;

      this.dataService.getMultiplePosts(postIdsArray).subscribe((posts) => {
        this.examLessons = posts;

        this.examLessons.sort((a, b) => {
          if (a.lessonDate > b.lessonDate) return 1;
          if (a.lessonDate < b.lessonDate) return -1;
          return 0;
        });
      });
    }
  }
}
