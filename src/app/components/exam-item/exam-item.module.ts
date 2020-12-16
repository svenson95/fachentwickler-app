import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../../app-common/angular-material.module';

import { ExamItemComponent } from './exam-item.component';
import { PostLinkModule } from '../post-link/post-link.module';



@NgModule({
  declarations: [ExamItemComponent],
  exports: [
    ExamItemComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    PostLinkModule
  ]
})
export class ExamItemModule { }
