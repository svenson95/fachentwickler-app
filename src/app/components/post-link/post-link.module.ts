import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PostLinkComponent } from './post-link.component';
import { PostBadgeModule } from '../post-badge/post-badge.module';



@NgModule({
  declarations: [PostLinkComponent],
  exports: [PostLinkComponent],
  imports: [
    CommonModule,
    PostBadgeModule,
    RouterModule
  ]
})
export class PostLinkModule { }
