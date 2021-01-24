import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../services/data/data.service';

@Component({
  selector: 'app-indexcards-card',
  templateUrl: './indexcards-card.component.html',
  styleUrls: ['./indexcards-card.component.scss']
})
export class IndexcardsCardComponent implements OnInit {

  @Input() indexCardsContent;
  @Input() indexCardsDetails;

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
    if (this.indexCardsContent.questions[this.level + 1] !== undefined) {
      this.level++;
    }
  }

  resetLevel(): void {
    this.level = 0;
    this.end = false;
    this.isAnswerVisible = false;
  }

  isLastQuestion(): boolean {
    return this.indexCardsContent.questions[this.level + 1] === undefined;
  }

  stripHtml(html): string {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  }

}
