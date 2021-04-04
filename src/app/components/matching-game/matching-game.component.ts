import { Component, Input, OnInit } from '@angular/core';
import { Matching, MatchingPair } from '../../models/matching-piece';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-matching-game',
  templateUrl: './matching-game.component.html',
  styleUrls: ['./matching-game.component.scss']
})
export class MatchingGameComponent implements OnInit {

  @Input() matching: Matching;

  leftpartSelected = null;
  rightpartSelected = null;

  round = 0;
  isCorrect: boolean;

  solvedPairs: MatchingPair[] = [];
  unsolvedPairs: MatchingPair[] = [];

  leftSidePairs: MatchingPair[];
  rightSidePairs: MatchingPair[];

  assignmentStream = new Subject<{pair: MatchingPair, side: string}>();

  constructor() { }

  ngOnInit(): void {
    this.setupMatchings();
  }

  setLeft(pairNumber): void {
    if (!this.leftpartSelected || this.leftpartSelected !== pairNumber) {
      this.leftpartSelected = pairNumber;
    } else if (this.leftpartSelected === pairNumber) {
      this.leftpartSelected = null;
    }
  }

  setRight(pairNumber): void {
    if (!this.rightpartSelected || this.rightpartSelected !== pairNumber) {
      this.rightpartSelected = pairNumber;
    } else if (this.rightpartSelected === pairNumber) {
      this.rightpartSelected = null;
    }
  }

  selectItem(item): void {
    if (item.side === 'left' && this.rightpartSelected) {
      if (item.pair.pairNumber === this.rightpartSelected && !this.solvedPairs.includes(item.pair)) {
        this.handleSolvedAssignment(item.pair);
      } else {
        this.handleFailedAssignment();
      }
    } else if (item.side === 'right' && this.leftpartSelected) {
      if (item.pair.pairNumber === this.leftpartSelected && !this.solvedPairs.includes(item.pair)) {
        this.handleSolvedAssignment(item.pair);
      } else {
        this.handleFailedAssignment();
      }
    }
  }

  private handleSolvedAssignment(pair: MatchingPair): void {
    this.isCorrect = true;
    setTimeout(() => {
      this.solvedPairs.push(pair);
      this.remove(pair);
      this.leftpartSelected = null;
      this.rightpartSelected = null;
      this.isCorrect = undefined;
    }, 1000);
  }

  remove(pair): void {
    for (let i = 0; i < this.unsolvedPairs.length; i++) {
      if (this.unsolvedPairs[i].pairNumber === pair.pairNumber) {
        this.unsolvedPairs.splice(i, 1);
      }
    }
  }

  private handleFailedAssignment(): void {
    this.isCorrect = false;
    setTimeout(() => {
      this.leftpartSelected = null;
      this.rightpartSelected = null;
      this.isCorrect = undefined;
    }, 1500);
  }

  startNextRound(): void {
    this.round++;
    this.setupMatchings();
  }

  setupMatchings(): void {
    this.matching.pairs[this.round].forEach(pair => {
      this.unsolvedPairs.push(pair);
    });
    this.leftSidePairs = this.unsolvedPairs.sort(() => Math.random() - 0.5);
    this.rightSidePairs = this.unsolvedPairs.sort(() => Math.random() - 0.5);
  }
}
