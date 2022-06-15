import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AnswerIndicatorComponent } from './answer-indicator.component';
import { SvgAnimationDirective } from './svg-animation.directive';

@NgModule({
  declarations: [AnswerIndicatorComponent, SvgAnimationDirective],
  exports: [AnswerIndicatorComponent],
  imports: [CommonModule],
})
export class AnswerIndicatorModule {}
