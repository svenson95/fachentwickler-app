import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
import { Subscription } from 'rxjs';

import { ExamDate } from '../../../models/exam-date';
import { DataService } from '../../../services/data/data.service';
import { LoadingService } from '../../../services/loading.service';

@Component({
  selector: 'fe-next-exams-card',
  templateUrl: './next-exams-card.component.html'
})
export class NextExamsCardComponent implements OnInit, OnDestroy {

  @Input() nextExams: ExamDate[];
  isLoading: boolean;
  loadingSubscription: Subscription;

  constructor(private dataService: DataService,
              private loadingService: LoadingService
  ) {
  }

  ngOnInit(): void {
    this.loadingSubscription = this.loadingService.loading$.pipe(delay(0)).subscribe(status => this.isLoading = status);
  }

  ngOnDestroy(): void {
    this.loadingSubscription.unsubscribe();
  }

}
