import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../services/data/data.service';
import { IndexCards } from '../../models/index-cards';

@Component({
  selector: 'app-indexcards-card',
  templateUrl: './indexcards-card.component.html',
  styleUrls: ['./indexcards-card.component.scss']
})
export class IndexcardsCardComponent implements OnInit {

  @Input() indexCards: IndexCards;

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
    if (this.indexCards.questions[this.level + 1] !== undefined) {
      setTimeout(() => this.level++, 200);
    }
  }

  resetLevel(): void {
    this.level = 0;
    this.end = false;
    this.isAnswerVisible = false;
  }

  isLastQuestion(): boolean {
    return this.indexCards.questions[this.level + 1] === undefined;
  }

  stripHtml(html): string {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  }

}
