import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackComponent } from './feedback.component';
import { FeedbackPageRoutingModule } from './feedback-routing.module';
import { AngularMaterialModule } from '../../app-common/angular-material.module';



@NgModule({
  declarations: [FeedbackComponent],
  imports: [
    CommonModule,
    FeedbackPageRoutingModule,
    AngularMaterialModule
  ]
})
export class FeedbackModule { }
