import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../../app-common/angular-material.module';
import { FeedbackPageRoutingModule } from './feedback-routing.module';
import { FeedbackPage } from './feedback.page';

@NgModule({
  declarations: [FeedbackPage],
  imports: [CommonModule, FeedbackPageRoutingModule, AngularMaterialModule],
})
export class FeedbackPageModule {}
