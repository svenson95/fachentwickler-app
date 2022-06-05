import { Component, Input } from '@angular/core';
import { PostIndexCards } from '../../../models/post';

@Component({
  selector: 'fe-index-card',
  templateUrl: './index-card.component.html',
  styleUrls: ['./index-card.component.scss'],
})
export class IndexCardComponent {
  @Input() public indexCards: PostIndexCards;

  public level = 0;

  public isAnswerVisible = false;

  public end = false;

  public showAnswer(): void {
    this.isAnswerVisible = true;
    if (this.isLastQuestion()) {
      this.end = true;
    }
  }

  public answerVisible(content): string {
    return this.isAnswerVisible ? content.questions[this.level].answer : content.questions[this.level].question;
  }

  public increaseLevel(): void {
    this.isAnswerVisible = false;
    if (this.indexCards.elements[this.level + 1] !== undefined) {
      setTimeout(() => {
        this.level += 1;
      }, 200);
    }
  }

  public resetLevel(): void {
    this.level = 0;
    this.end = false;
    this.isAnswerVisible = false;
  }

  public isLastQuestion(): boolean {
    return this.indexCards.elements[this.level + 1] === undefined;
  }

  // eslint-disable-next-line class-methods-use-this
  public stripHtml(html: any): string {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  }
}
