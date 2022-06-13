import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { FeedbackPageRoutingModule } from './feedback-routing.module';
import { FeedbackPage } from './feedback.page';

@NgModule({
  declarations: [FeedbackPage],
  imports: [SharedModule, FeedbackPageRoutingModule],
})
export class FeedbackPageModule {}
