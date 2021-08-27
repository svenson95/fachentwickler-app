import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackPage } from './feedback.page';
import { FeedbackPageRoutingModule } from './feedback-routing.module';
import { AngularMaterialModule } from '../../app-common/angular-material.module';



@NgModule({
  declarations: [FeedbackPage],
  imports: [
    CommonModule,
    FeedbackPageRoutingModule,
    AngularMaterialModule
  ]
})
export class FeedbackPageModule { }
