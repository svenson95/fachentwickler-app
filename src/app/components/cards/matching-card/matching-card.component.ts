import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Subject } from 'rxjs';

import { PostMatching, MatchingPair } from '../../../models/post';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'fe-matching-game',
  templateUrl: './matching-card.component.html'
})
export class MatchingCardComponent implements OnInit {

  @Input() matching: PostMatching;

  round = 0;
  isCorrect: boolean;

  state: 'play' | 'end' = 'play';

  unsolvedPairs: MatchingPair[] = [];
  leftSidePairs: MatchingPair[];
  rightSidePairs: MatchingPair[];

  assignmentStream = new Subject<{pair: MatchingPair, side: string}>();

  @ViewChild('gameView') gameView;
  @ViewChild('slideInLeft') slideInLeft: ElementRef;
  @ViewChild('slideInRight') slideInRight: ElementRef;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.setupMatchings();
  }

  drop(event: CdkDragDrop<string[]>, list): void {
    moveItemInArray(list, event.previousIndex, event.currentIndex);
  }

  checkResult(): void {
    const leftPairs = this.leftSidePairs;
    const rightPairs = this.rightSidePairs;

    let mistakes = 0;

    for (let i = 0; i < this.matching.elements.length; i++) {
      if (leftPairs[i].pairNumber !== rightPairs[i].pairNumber) {
        mistakes++;
      }
    }

    if (mistakes > 0) {
      this.handleFailedAssignment();
    } else {
      this.handleSolvedAssignment();
    }
  }

  private handleSolvedAssignment(): void {
    this.isCorrect = true;
    setTimeout(() => {
      this.isCorrect = undefined;
      this.startNextRound();

      this.slideInLeft.nativeElement.classList.add('slide-in-left');
      this.slideInRight.nativeElement.classList.add('slide-in-right');
      setTimeout(() => this.slideInLeft.nativeElement.classList.remove('slide-in-left'), 400);
      setTimeout(() => this.slideInRight.nativeElement.classList.remove('slide-in-right'), 400);
    }, 2000);
  }

  private handleFailedAssignment(): void {
    this.isCorrect = false;
    setTimeout(() => {
      this.isCorrect = undefined;
    }, 1500);
  }

  startNextRound(): void {
    if (this.round === 0) {
      this.gameView.nativeElement.classList.add('game-started');
    }

    if (this.state === 'play' && this.matching.elements[this.round + 1] === undefined) {
      this.state = 'end';
    } else {
      this.round++;
    }

    if (this.matching.elements[this.round] !== undefined) {
      this.setupMatchings();
    }

    if (this.state === 'end') {
      this.setSolvedState();
    }
  }

  restartGame(): void {
    this.gameView.nativeElement.classList.remove('game-started');
    this.round = 0;
    this.setupMatchings();
    this.state = 'play';
  }

  setupMatchings(): void {
    this.unsolvedPairs = [];
    this.matching.elements[this.round].forEach(pair => {
      this.unsolvedPairs.push(pair);
    });
    this.leftSidePairs = [...this.unsolvedPairs].sort(() => Math.random() - 0.5);
    this.rightSidePairs = [...this.unsolvedPairs].sort(() => Math.random() - 0.5);
  }

  setSolvedState(): void {
    if (!this.auth.user.progress.includes(this.matching._id) && this.auth.isAuthenticated) {
      this.auth.setLessonSolved(this.matching._id);
    }
  }
}
