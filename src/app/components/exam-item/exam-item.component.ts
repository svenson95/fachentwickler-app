import { Component, Input, OnInit } from '@angular/core';

import { subjects } from '../../../data/menu-items';
import { DataService } from '../../services/data/data.service';
import { ExamDate } from '../../models/exam-date';
import { SubjectPost } from '../../models/subject';

@Component({
  selector: 'app-exam-item',
  templateUrl: './exam-item.component.html',
  styleUrls: ['./exam-item.component.scss']
})
export class ExamItemComponent implements OnInit {

  @Input() exam: ExamDate;
  examLessons: SubjectPost[] = [];
  lessonsVisible: boolean;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  fullSubjectName = (subject: string) => {
    return subjects.find(el => el.url.substring(1) === subject)?.title;
  }

  showLessons(): void {
    if (this.lessonsVisible) {
      this.lessonsVisible = null;
    } else {
      if (this.examLessons.length === 0) {
        this.getExamLessons().then(lessons => {
          this.examLessons = lessons;
        });
      }
      this.lessonsVisible = true;
    }
  }

  async getExamLessons(): Promise<SubjectPost[]> {
    const postIdsArray = '_' + this.exam.lessons.join();
    this.dataService.getSubjectPosts(postIdsArray).subscribe(
      (posts) => {
        this.examLessons = posts;

        this.examLessons.sort((a, b) => {
          if (a.lessonDate > b.lessonDate) { return 1; }
          if (a.lessonDate < b.lessonDate) { return -1; }
          return 0;
        });
        return this.examLessons as SubjectPost[];
      }, (error) => {
        console.log('error while GET subject-posts (exam lessons)', error);
      }
    );
    return;
  }

}
