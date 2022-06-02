import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ExamDate } from '../../../models/exam-date';
import { LoadingService } from '../../../services/loading.service';

@Component({
  selector: 'fe-next-exams-card',
  templateUrl: './next-exams-card.component.html',
  styleUrls: ['./next-exams-card.component.scss'],
})
export class NextExamsCardComponent implements OnInit, OnDestroy {
  @Input() public nextExams: ExamDate[];

  public isLoading: boolean;

  private loadingSubscription: Subscription;

  constructor(private loadingService: LoadingService) {}

  public ngOnInit(): void {
    this.loadingSubscription = this.loadingService.loading$
      .pipe(delay(0))
      .subscribe((status) => {
        this.isLoading = status;
      });
  }

  public ngOnDestroy(): void {
    this.loadingSubscription.unsubscribe();
  }
}
