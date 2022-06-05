import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../../../core/angular-material.module';
import { CardModule } from '../../../core/components/card/card.module';
import { LoadingSpinnerModule } from '../../../core/components/loading-spinner/loading-spinner.module';
import { PostLinkModule } from '../../../shared/components/post-link/post-link.module';
import { UserProgressCardComponent } from './user-progress-card.component';

@NgModule({
  declarations: [UserProgressCardComponent],
  exports: [UserProgressCardComponent],
  imports: [CommonModule, CardModule, AngularMaterialModule, PostLinkModule, LoadingSpinnerModule],
})
export class UserProgressCardModule {}
