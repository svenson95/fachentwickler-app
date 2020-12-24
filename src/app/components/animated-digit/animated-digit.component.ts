import { Component, Input, ElementRef, AfterViewInit, ViewChild, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-animated-digit',
  templateUrl: 'animated-digit.component.html',
  styleUrls: ['animated-digit.component.scss']
})
export class AnimatedDigitComponent implements AfterViewInit, OnChanges {

  @Input() digit: number | string;
  @ViewChild('animatedDigit') animatedDigit: ElementRef;

  duration: number;
  steps: number;

  animateCount(): void {
    this.duration = 300;

    if (typeof this.digit === 'number' || typeof this.digit === 'string') {
      this.counterFunc(this.digit, this.duration, this.animatedDigit);
    }
  }

  counterFunc(endValue, durationMs, element): void {

    this.steps = 10;

    console.log('date numbers', endValue);

    const stepCount = Math.abs(durationMs / this.steps);
    const valueIncrement = (endValue as number) / stepCount;
    const sinValueIncrement = Math.PI / stepCount;

    let currentValue = 0;
    let currentSinValue = 0;

    function step(): void {
      currentSinValue += sinValueIncrement;
      currentValue += valueIncrement * Math.sin(currentSinValue) ** 2 * 2;

      if (element) {
        element.nativeElement.textContent = Math.abs(Math.floor(currentValue));
      }

      if (currentSinValue < Math.PI) {
        window.requestAnimationFrame(step);
      }
    }

    step();
  }

  ngAfterViewInit(): void {
    if (this.digit) {
      this.animateCount();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.digit) {
      this.animateCount();
    }
  }
}
