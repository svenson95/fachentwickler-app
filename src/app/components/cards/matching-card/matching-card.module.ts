import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../../../app-common/angular-material.module';
import { PostBadgeModule } from '../../post-badge/post-badge.module';
import { MatchingCardComponent } from './matching-card.component';

@NgModule({
  declarations: [MatchingCardComponent],
  exports: [MatchingCardComponent],
  imports: [CommonModule, AngularMaterialModule, RouterModule, PostBadgeModule],
})
export class MatchingCardModule {}
