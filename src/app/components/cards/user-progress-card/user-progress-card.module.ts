import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../../../app-common/angular-material.module';
import { CardModule } from '../../card/card.module';
import { LoadingSpinnerModule } from '../../loading-spinner/loading-spinner.module';
import { PostLinkModule } from '../../post-link/post-link.module';
import { UserProgressCardComponent } from './user-progress-card.component';

@NgModule({
  declarations: [UserProgressCardComponent],
  exports: [UserProgressCardComponent],
  imports: [
    CommonModule,
    CardModule,
    AngularMaterialModule,
    PostLinkModule,
    LoadingSpinnerModule,
  ],
})
export class UserProgressCardModule {}
