import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../../pipes/pipes.module';
import { AngularMaterialModule } from '../../shared/angular-material.module';
import { PostBadgeModule } from '../post-badge/post-badge.module';
import { PostLinkComponent } from './post-link.component';

@NgModule({
  declarations: [PostLinkComponent],
  exports: [PostLinkComponent],
  imports: [CommonModule, AngularMaterialModule, RouterModule, PostBadgeModule, PipesModule],
})
export class PostLinkModule {}
