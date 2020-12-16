import { Component, OnInit } from '@angular/core';
import { ExamDate } from '../../models/exam-date';
import { DataService } from '../../services/data/data.service';
import { LoadingService } from '../../services/loading.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-next-exams-card',
  templateUrl: './next-exams-card.component.html',
  styleUrls: ['./next-exams-card.component.scss']
})
export class NextExamsCardComponent implements OnInit {

  allExams: ExamDate[];
  openExams: ExamDate[] = [];
  isLoading: boolean;

  constructor(private dataService: DataService,
              private loadingService: LoadingService
  ) {
    this.loadingService.loading$.pipe(delay(0)).subscribe(
      (status: boolean) => {
        this.isLoading = status;
      }
    );

    this.dataService.getExamDates().subscribe(
      (exams) => {
        this.allExams = exams;
        exams.forEach(exam => {
          const today = new Date();
          const examDate = new Date(exam.date);

          if (today < examDate) {
            this.openExams = [...this.openExams, exam];
          }
          this.dataService.openExams = this.openExams;
        });
      }, (error) => {
        console.log('error while GET exam-dates', error);
      }
    );
  }

  ngOnInit(): void {
  }

}
