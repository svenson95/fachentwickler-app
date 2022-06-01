import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[feSvgElement]',
})
export class SvgAnimationDirective {
  constructor(el: ElementRef) {
    el.nativeElement.classList.add('animateElement');
    setInterval(() => {
      el.nativeElement.classList.remove('animateElement');
    }, 4000);
  }
}
