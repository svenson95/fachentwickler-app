import { Component, Input } from '@angular/core';
import { ExamDate } from '../../models/exam-date';
import { Post } from '../../models/post';
import { DataService } from '../../services/data/data.service';

@Component({
  selector: 'fe-exam-item',
  templateUrl: './exam-item.component.html',
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
