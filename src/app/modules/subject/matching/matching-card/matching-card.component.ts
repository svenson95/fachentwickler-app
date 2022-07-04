import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

import { MatchingPair, PostMatching } from '@models/post';
import { UserService } from '@services/user.service';

@Component({
  selector: 'fe-matching-card',
  templateUrl: './matching-card.component.html',
  styleUrls: ['./matching-card.component.scss'],
})
export class MatchingCardComponent implements OnInit {
  @Input() public matching: PostMatching;

  public round = 0;

  public isCorrect: boolean;

  public state: 'play' | 'end' = 'play';

  public unsolvedPairs: MatchingPair[] = [];

  public leftSidePairs: MatchingPair[];

  public rightSidePairs: MatchingPair[];

  @ViewChild('gameView') public gameView;

  @ViewChild('slideInLeft') public slideInLeft: ElementRef;

  @ViewChild('slideInRight') public slideInRight: ElementRef;

  constructor(private user: UserService) {}

  public ngOnInit(): void {
    this.setupMatchings();
  }

  // eslint-disable-next-line class-methods-use-this
  public drop(event: CdkDragDrop<string[]>, list): void {
    moveItemInArray(list, event.previousIndex, event.currentIndex);
  }

  public checkResult(): void {
    const leftPairs = this.leftSidePairs;
    const rightPairs = this.rightSidePairs;

    let mistakes = 0;

    this.matching.elements.forEach((_, i) => {
      if (leftPairs[i].pairNumber !== rightPairs[i].pairNumber) {
        mistakes += 1;
      }
    });

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
      setTimeout(() => {
        this.slideInLeft.nativeElement.classList.remove('slide-in-left');
      }, 400);
      setTimeout(() => {
        this.slideInRight.nativeElement.classList.remove('slide-in-right');
      }, 400);
    }, 2000);
  }

  private handleFailedAssignment(): void {
    this.isCorrect = false;
    setTimeout(() => {
      this.isCorrect = undefined;
    }, 1500);
  }

  private startNextRound(): void {
    if (this.round === 0) {
      this.gameView.nativeElement.classList.add('game-started');
    }

    if (this.state === 'play' && this.matching.elements[this.round + 1] === undefined) {
      this.state = 'end';
    } else {
      this.round += 1;
    }

    if (this.matching.elements[this.round] !== undefined) {
      this.setupMatchings();
    }
  }

  public restartGame(): void {
    this.gameView.nativeElement.classList.remove('game-started');
    this.round = 0;
    this.setupMatchings();
    this.state = 'play';
  }

  private setupMatchings(): void {
    this.unsolvedPairs = [];
    // TODO: check why array in array is typeof object
    const pairs: MatchingPair[] = Object.values(this.matching.elements[this.round]);
    pairs.forEach((pair) => {
      this.unsolvedPairs.push(pair);
    });
    this.leftSidePairs = [...this.unsolvedPairs].sort(() => Math.random() - 0.5);
    this.rightSidePairs = [...this.unsolvedPairs].sort(() => Math.random() - 0.5);
  }
}
