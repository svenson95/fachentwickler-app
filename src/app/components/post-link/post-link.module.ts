import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostLinkComponent } from './post-link.component';
import { PostBadgeModule } from '../post-badge/post-badge.module';
import {RouterModule} from '@angular/router';



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
