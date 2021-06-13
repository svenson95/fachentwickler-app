import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Subject } from 'rxjs';

import { Matching, MatchingPair } from '../../models/matching-piece';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-matching-game',
  templateUrl: './matching-game.component.html'
})
export class MatchingGameComponent implements OnInit {

  @Input() matching: Matching;

  round = 0;
  isCorrect: boolean;

  state: 'play' | 'end' = 'play';

  unsolvedPairs: MatchingPair[] = [];
  leftSidePairs: MatchingPair[];
  rightSidePairs: MatchingPair[];

  assignmentStream = new Subject<{pair: MatchingPair, side: string}>();

  @ViewChild('gameView') gameView;

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

    for (let i = 0; i < this.matching.pairs.length; i++) {
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

    if (this.state === 'play' && this.matching.pairs[this.round + 1] === undefined) {
      this.state = 'end';
    } else {
      this.round++;
    }

    if (this.matching.pairs[this.round] !== undefined) {
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
    this.matching.pairs[this.round].forEach(pair => {
      this.unsolvedPairs.push(pair);
    });
    this.leftSidePairs = [...this.unsolvedPairs].sort(() => Math.random() - 0.5);
    this.rightSidePairs = [...this.unsolvedPairs].sort(() => Math.random() - 0.5);
  }

  setSolvedState(): void {
    if (!this.auth.user.progress.includes(this.matching._id)) {
      this.auth.setLessonSolved(this.matching._id);
    }
  }
}
