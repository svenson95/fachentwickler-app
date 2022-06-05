import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';
import { auditQuestions } from '../../constants/pruefungsfragen';
import { AuditState } from '../../models/audit-state';
import { ImageChunk } from '../../models/image-data';
import { DataService } from '../../services/data/data.service';
import { HeaderService } from '../../services/header.service';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'fe-audit-simulator-page',
  templateUrl: './audit-simulator.page.html',
  styleUrls: ['./audit-simulator.page.scss'],
})
export class AuditSimulatorPage implements OnInit, OnDestroy {
  @ViewChild('slideInWrapper') public slideInWrapper: ElementRef;

  @ViewChild('choiceButton') public choiceButton: ElementRef;

  public AuditState = AuditState;

  public auditQuestions = auditQuestions;

  public state: AuditState;

  public round = 0;

  public isCorrect: boolean;

  public selectedAnswer: number;

  public isLoading: boolean;

  private loadingSubscription: Subscription;

  public image: boolean | string = false;

  public choiceInput: string;

  public currentQuestion = this.auditQuestions[this.round];

  constructor(
    private headerService: HeaderService,
    private dataService: DataService,
    private loadingService: LoadingService,
  ) {
    this.headerService.setPageTitle('Audimulator');
  }

  public ngOnInit(): void {
    this.state = AuditState.INTRODUCTION;
    this.loadingSubscription = this.loadingService.loading$.pipe(delay(0)).subscribe((status: boolean) => {
      this.isLoading = status;
    });
  }

  public ngOnDestroy(): void {
    this.loadingSubscription.unsubscribe();
  }

  public get auditState(): string {
    switch (this.state) {
      case AuditState.INTRODUCTION:
        return 'Einleitung';
      case AuditState.PLAY:
        return `${this.round + 1}/${auditQuestions.length}`;
      case AuditState.END:
        return 'Ende';
      default:
        return 'unknown';
    }
  }

  public startAudit(): void {
    this.state = AuditState.PLAY;
  }

  public checkAnswer(event, choice): void {
    if (this.isCorrect !== undefined) {
      return;
    }

    if (this.currentQuestion.choices) {
      this.selectedAnswer = this.currentQuestion.choices.indexOf(choice);
      const correctAnswer = this.currentQuestion.choices[Number(this.currentQuestion.answer) - 1];
      this.isCorrect = choice === correctAnswer;
    } else {
      const inputAnswer = this.choiceInput;
      this.isCorrect = inputAnswer === this.currentQuestion.answer;
    }

    setTimeout(() => {
      if (this.isCorrect) {
        this.nextRound();
        this.slideInWrapper.nativeElement.classList.add('slide-in-animation');
        setTimeout(() => this.slideInWrapper.nativeElement.classList.remove('slide-in-animation'), 400);
      }
      this.isCorrect = undefined;
      this.selectedAnswer = undefined;
    }, 1000);
  }

  private nextRound(): void {
    if (auditQuestions[this.round + 1] === undefined) {
      this.state = AuditState.END;
    } else {
      this.round += 1;
    }

    this.currentQuestion = this.auditQuestions[this.round];

    if (this.currentQuestion.image) {
      this.loadImage(this.currentQuestion.image);
    }
  }

  private loadImage(url): void {
    this.dataService.getImage(url).subscribe(
      (data) => {
        const dataStrings = data.chunks.map((chunk: ImageChunk) => chunk.data);
        this.image = `data:image/png;base64,${dataStrings.join('')}`;
      },
      () => {
        this.image = null;
      },
    );
  }
}
