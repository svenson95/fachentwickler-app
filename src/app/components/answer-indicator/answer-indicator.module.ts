import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {AnswerIndicatorComponent, SvgElementDirective} from './answer-indicator.component';



@NgModule({
  declarations: [AnswerIndicatorComponent, SvgElementDirective],
  exports: [AnswerIndicatorComponent],
  imports: [
    CommonModule
  ]
})
export class AnswerIndicatorModule { }
