import { Component, Input, OnInit } from '@angular/core';

import { ExamDate } from '../../models/exam-date';
import { Post } from '../../models/post';
import { DataService } from '../../services/data/data.service';

@Component({
  selector: 'fe-exam-item',
  templateUrl: './exam-item.component.html',
})
export class ExamItemComponent implements OnInit {

  @Input() exam: ExamDate;
  examLessons: Post[] = [];
  lessonsVisible = false;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  showLessons(): void {
    this.lessonsVisible = !this.lessonsVisible;
    if (this.examLessons.length === 0) {
      this.getExamLessons().then(lessons => this.examLessons = lessons);
    }
  }

  async getExamLessons(): Promise<Post[]> {
    const postIdsArray = '_' + this.exam.lessons.join();
    this.dataService.getMultiplePosts(postIdsArray).subscribe(
      (posts) => {
        this.examLessons = posts;

        this.examLessons.sort((a, b) => {
          if (a.lessonDate > b.lessonDate) { return 1; }
          if (a.lessonDate < b.lessonDate) { return -1; }
          return 0;
        });
        return this.examLessons as Post[];
      }, (error) => {
        console.log('error while GET subject-posts (exam lessons)', error);
      }
    );
    return;
  }

}
