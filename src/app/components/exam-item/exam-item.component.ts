import { Component, Input, OnInit } from '@angular/core';
import { transformDate } from 'src/app/app-common/transform-date';
import { getWeekday } from '../../app-common/getWeekday';

import { ExamDate } from '../../models/exam-date';
import { subjects } from '../../../data/menu-items';
import { DataService } from '../../services/data/data.service';
import { SubjectPost } from '../../models/subject';

@Component({
  selector: 'app-exam-item',
  templateUrl: './exam-item.component.html',
  styleUrls: ['./exam-item.component.scss']
})
export class ExamItemComponent implements OnInit {

  @Input() exam: ExamDate;
  examLessons: string[] | SubjectPost[] = [];
  lessonsVisible: boolean;
  transformDate = transformDate;
  getWeekday = getWeekday;

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
      const thisExam = this.dataService.openExams?.find(e => e.title === this.exam.title);
      if (typeof thisExam?.lessons[0] === 'string') {
        this.getExamLessons().then(lessons => {
          this.examLessons = lessons;
        });
      } else {
        this.examLessons = thisExam.lessons;
      }
      this.lessonsVisible = true;
    }
  }

  async getExamLessons(): Promise<SubjectPost[]> {
    const lessons = [];
    await this.exam.lessons.forEach((lesson, index) => {
      this.dataService.getSubjectPost(lesson).subscribe(
        (post) => {
          lessons[index] = post;
        }, (error) => {
          console.log('error while GET subject-post', error);
        }
      );
    });
    lessons.sort((a, b) => {
      if (a.date > b.date) { return 1; }
      if (a.date < b.date) { return -1; }
      return 0;
    });
    return lessons;
  }

}
