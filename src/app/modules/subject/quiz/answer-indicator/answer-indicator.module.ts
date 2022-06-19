import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';

import { AnswerIndicatorComponent } from './answer-indicator.component';
import { SvgAnimationDirective } from './svg-animation.directive';

@NgModule({
  declarations: [AnswerIndicatorComponent, SvgAnimationDirective],
  exports: [AnswerIndicatorComponent],
  imports: [SharedModule],
})
export class AnswerIndicatorModule {}
