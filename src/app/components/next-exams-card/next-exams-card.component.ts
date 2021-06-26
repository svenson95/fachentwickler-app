import { Component, Input, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';

import { ExamDate } from '../../models/exam-date';
import { DataService } from '../../services/data/data.service';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'fe-next-exams-card',
  templateUrl: './next-exams-card.component.html'
})
export class NextExamsCardComponent implements OnInit {

  @Input() nextExams: ExamDate[];
  isLoading: boolean;

  constructor(private dataService: DataService,
              private loadingService: LoadingService
  ) {
    this.loadingService.loading$.pipe(delay(0)).subscribe(
      (status: boolean) => {
        this.isLoading = status;
      }
    );
  }

  ngOnInit(): void {
  }

}
