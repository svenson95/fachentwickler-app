import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { AngularMaterialModule } from '../../../core/angular-material.module';
import { CardModule } from '../../../core/components/card/card.module';
import { PostLinkModule } from '../../../shared/components/post-link/post-link.module';
import { UserProgressCardComponent } from './user-progress-card.component';

@NgModule({
  declarations: [UserProgressCardComponent],
  exports: [UserProgressCardComponent],
  imports: [CommonModule, AngularMaterialModule, CardModule, PostLinkModule, NgxSkeletonLoaderModule],
})
export class UserProgressCardModule {}
