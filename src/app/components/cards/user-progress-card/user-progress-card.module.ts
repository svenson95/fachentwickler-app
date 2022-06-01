import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../../../app-common/angular-material.module';
import { ExamItemModule } from '../../exam-item/exam-item.module';
import { LoadingSpinnerModule } from '../../loading-spinner/loading-spinner.module';
import { PostLinkModule } from '../../post-link/post-link.module';
import { UserProgressCardComponent } from './user-progress-card.component';

@NgModule({
  declarations: [UserProgressCardComponent],
  exports: [UserProgressCardComponent],
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterialModule,
    ExamItemModule,
    PostLinkModule,
    LoadingSpinnerModule,
  ],
})
export class UserProgressCardModule {}
