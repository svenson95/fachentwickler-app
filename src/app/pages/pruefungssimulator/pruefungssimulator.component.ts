import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';

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
export class PruefungsSimulatorComponent implements OnInit {

  AuditState = AuditState;
  auditQuestions = auditQuestions;
  state: AuditState;
  round = 0;
  isLoading: boolean;
  isCorrect: boolean;
  choiceInput: string;
  image: boolean | string = false;

  currentQuestion = this.auditQuestions[this.round];

  constructor(private headerService: HeaderService,
              private dataService: DataService,
              private loadingService: LoadingService
  ) {
    this.headerService.setPageTitle('Prüfung<wbr/>simulator');
    this.loadingService.loading$.pipe(delay(0)).subscribe((status: boolean) => {
      this.isLoading = status;
    });
  }

  ngOnInit(): void {
    this.state = AuditState.INTRODUCTION;
  }

  startAudit(): void {
    this.state = AuditState.PLAY;
  }

  checkAnswer(event): void {
    if (this.isCorrect !== undefined) {
      return;
    }

    if (this.currentQuestion.choices) {
      const selectedAnswer = event.target.innerText;
      const correctAnswer = Number(this.currentQuestion.answer) - 1;
      this.isCorrect = selectedAnswer === this.currentQuestion.choices[correctAnswer];
    } else {
      const inputAnswer = this.choiceInput;
      this.isCorrect = inputAnswer === this.currentQuestion.answer;
    }

    event.target.classList.add(this.isCorrect ? 'correct' : 'wrong');

    setTimeout(() => {
      event.target.classList.remove(this.isCorrect ? 'correct' : 'wrong');
      if (this.isCorrect) {
        this.nextRound();
      }
      this.isCorrect = undefined;
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
