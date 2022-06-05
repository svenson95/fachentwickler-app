import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardModule } from '../../core/components/card/card.module';
import { FeedbackPageRoutingModule } from './feedback-routing.module';
import { FeedbackPage } from './feedback.page';

@NgModule({
  declarations: [FeedbackPage],
  imports: [CommonModule, FeedbackPageRoutingModule, CardModule],
})
export class FeedbackPageModule {}
