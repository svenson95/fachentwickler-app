import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../../app-common/angular-material.module';

import { PostComponent } from './post.component';
import { PostPageRoutingModule } from './post-routing.module';

import { PostElementModule } from '../../components/post-element/post-element.module';
import { LessonFooterModule } from '../../components/lesson-footer/lesson-footer.module';
import { PostBadgeModule } from '../../components/post-badge/post-badge.module';
import { LoadingSpinnerModule } from '../../components/loading-spinner/loading-spinner.module';



@NgModule({
  declarations: [PostComponent],
  exports: [PostComponent],
  imports: [
    CommonModule,
    PostPageRoutingModule,
    AngularMaterialModule,
    PostElementModule,
    LessonFooterModule,
    PostBadgeModule,
    LoadingSpinnerModule
  ]
})
export class PostModule { }
