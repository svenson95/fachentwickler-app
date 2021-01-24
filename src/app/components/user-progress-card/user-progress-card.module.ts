import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../../app-common/angular-material.module';

import { UserProgressCardComponent } from './user-progress-card.component';
import { ExamItemModule } from '../exam-item/exam-item.module';
import { PostLinkModule } from '../post-link/post-link.module';



@NgModule({
  declarations: [UserProgressCardComponent],
  exports: [
    UserProgressCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterialModule,
    ExamItemModule,
    PostLinkModule
  ]
})
export class UserProgressCardModule { }
