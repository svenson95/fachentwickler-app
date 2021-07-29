import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { delay } from 'rxjs/operators';
import { Subscription } from 'rxjs';

import { ImageChunk } from '../../models/image-data';
import { AuditState } from '../../models/audit-state';
import { HeaderService } from '../../services/header.service';
import { LoadingService } from '../../services/loading.service';
import { DataService } from '../../services/data/data.service';
import { auditQuestions } from '../../../data/pruefungsfragen';

@Component({
  selector: 'fe-pruefungssimluator',
  templateUrl: './pruefungssimulator.component.html'
})
export class PruefungsSimulatorComponent implements OnInit, OnDestroy {

  @ViewChild('slideInWrapper') slideInWrapper: ElementRef;
  @ViewChild('choiceButton') choiceButton: ElementRef;

  AuditState = AuditState;
  auditQuestions = auditQuestions;
  state: AuditState;
  round = 0;
  isCorrect: boolean;
  selectedAnswer: number;
  isLoading: boolean;
  loadingSubscription: Subscription;
  image: boolean | string = false;
  choiceInput: string;
  currentQuestion = this.auditQuestions[this.round];

  constructor(private headerService: HeaderService,
              private dataService: DataService,
              private loadingService: LoadingService
  ) {
    this.headerService.setPageTitle('Audimulator');
  }

  ngOnInit(): void {
    this.state = AuditState.INTRODUCTION;
    this.loadingSubscription = this.loadingService.loading$.pipe(delay(0)).subscribe((status: boolean) => {
      this.isLoading = status;
    });
  }

  ngOnDestroy(): void {
    this.loadingSubscription.unsubscribe();
  }

  startAudit(): void {
    this.state = AuditState.PLAY;
  }

  checkAnswer(event, choice): void {
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

  nextRound(): void {
    if (auditQuestions[this.round + 1] === undefined) {
      this.state = AuditState.END;
    } else {
      this.round++;
    }

    this.currentQuestion = this.auditQuestions[this.round];

    if (this.currentQuestion.image) {
      this.loadImage(this.currentQuestion.image);
    }
  }

  loadImage(url): void {
    this.dataService.getImage(url).subscribe(
        (data) => {
          const dataStrings = data.chunks.map((chunk: ImageChunk) => chunk.data);
          this.image = 'data:image/png;base64,' + dataStrings.join('');
        },
        (error) => {
          this.image = null;
          console.log('Error while GET audit question image', error);
        }
    );
  }

}
