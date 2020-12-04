import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostBadgeComponent } from './post-badge.component';



@NgModule({
  declarations: [PostBadgeComponent],
  exports: [PostBadgeComponent],
  imports: [
    CommonModule
  ]
})
export class PostBadgeModule { }
