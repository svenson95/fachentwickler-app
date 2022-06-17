import { Component } from '@angular/core';

import { indexCards } from '@data/index-cards';
import { matchings } from '@data/matchings';
import { quizzes } from '@data/quizzes';
import { PostIndexCards, PostMatching, PostQuiz } from '@models/post';

@Component({
  selector: 'section.3',
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.scss'],
})
export class Section3Component {
  public testQuiz: PostQuiz = quizzes[2];

  public testIndexCards: PostIndexCards = indexCards[1];

  public testMatching: PostMatching = matchings[0];
}
