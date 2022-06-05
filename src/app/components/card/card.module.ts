import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../../shared/angular-material.module';
import { PostBadgeModule } from '../post-badge/post-badge.module';
import { CardComponent } from './card.component';

@NgModule({
  declarations: [CardComponent],
  exports: [CardComponent],
  imports: [CommonModule, RouterModule, AngularMaterialModule, PostBadgeModule],
})
export class CardModule {}
