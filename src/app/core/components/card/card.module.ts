import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PostBadgeModule } from '../../../shared/components/post-badge/post-badge.module';
import { AngularMaterialModule } from '../../angular-material.module';
import { CardComponent } from './card.component';

@NgModule({
  declarations: [CardComponent],
  exports: [CardComponent],
  imports: [CommonModule, RouterModule, AngularMaterialModule, PostBadgeModule],
})
export class CardModule {}
