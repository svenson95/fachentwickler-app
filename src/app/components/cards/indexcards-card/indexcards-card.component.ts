import { Component, Input, OnInit } from '@angular/core';

import { PostIndexCards } from '../../../models/post';
import { DataService } from '../../../services/data/data.service';

@Component({
  selector: 'fe-indexcards-card',
  templateUrl: './indexcards-card.component.html'
})
export class IndexcardsCardComponent implements OnInit {

  @Input() indexCards: PostIndexCards;

  level = 0;
  isAnswerVisible = false;
  end = false;

  constructor(public dataService: DataService) {}

  ngOnInit(): void {
  }

  showAnswer(): void {
    this.isAnswerVisible = true;
    if (this.isLastQuestion()) {
      this.end = true;
    }
  }

  answerVisible(content): string {
    return this.isAnswerVisible ? content.questions[this.level].answer : content.questions[this.level].question;
  }

  increaseLevel(): void {
    this.isAnswerVisible = false;
    if (this.indexCards.elements[this.level + 1] !== undefined) {
      setTimeout(() => this.level++, 200);
    }
  }

  resetLevel(): void {
    this.level = 0;
    this.end = false;
    this.isAnswerVisible = false;
  }

  isLastQuestion(): boolean {
    return this.indexCards.elements[this.level + 1] === undefined;
  }

  stripHtml(html): string {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  }

}
