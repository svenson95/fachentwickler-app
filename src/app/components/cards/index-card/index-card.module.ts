import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../../../app-common/angular-material.module';
import { ExamItemModule } from '../../exam-item/exam-item.module';
import { PostBadgeModule } from '../../post-badge/post-badge.module';
import { PostLinkModule } from '../../post-link/post-link.module';
import { IndexCardComponent } from './index-card.component';

@NgModule({
  declarations: [IndexCardComponent],
  exports: [IndexCardComponent],
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterialModule,
    ExamItemModule,
    PostLinkModule,
    PostBadgeModule,
  ],
})
export class IndexCardModule {}
