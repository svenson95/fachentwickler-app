import {Component, Directive, ElementRef, Input} from '@angular/core';
import {coerceBooleanProperty} from '@angular/cdk/coercion';

@Directive({
  selector: '[feSvgElement]'
})
export class SvgElementDirective {
  constructor(el: ElementRef) {
    el.nativeElement.classList.add('animateElement');
    setInterval(() => {
      el.nativeElement.classList.remove('animateElement');
    }, 4000);
  }

}

@Component({
  selector: 'fe-answer-indicator',
  templateUrl: './answer-indicator.component.html',
  styleUrls: ['./answer-indicator.component.scss']
})
export class AnswerIndicatorComponent {

  @Input() checkmark: boolean;
  @Input() cross: boolean;

  constructor() {
  }

}
