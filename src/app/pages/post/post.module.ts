import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../../app-common/angular-material.module';
import { LessonFooterModule } from '../../components/lesson-footer/lesson-footer.module';
import { LoadingSpinnerModule } from '../../components/loading-spinner/loading-spinner.module';
import { PostBadgeModule } from '../../components/post-badge/post-badge.module';
import { PostElementModule } from '../../components/post-element/post-element.module';
import { PostPageRoutingModule } from './post-routing.module';
import { PostPage } from './post.page';

@NgModule({
  declarations: [PostPage],
  exports: [PostPage],
  imports: [
    CommonModule,
    PostPageRoutingModule,
    AngularMaterialModule,
    PostElementModule,
    LessonFooterModule,
    PostBadgeModule,
    LoadingSpinnerModule,
  ],
})
export class PostPageModule {}
