import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardModule } from '../../core/components/card/card.module';
import { LoadingSpinnerModule } from '../../core/components/loading-spinner/loading-spinner.module';
import { LessonFooterModule } from '../../shared/components/lesson-footer/lesson-footer.module';
import { PostElementModule } from '../../shared/components/post-element/post-element.module';
import { PostPageRoutingModule } from './post-routing.module';
import { PostPage } from './post.page';

@NgModule({
  declarations: [PostPage],
  exports: [PostPage],
  imports: [
    CommonModule,
    PostPageRoutingModule,
    PostElementModule,
    LessonFooterModule,
    LoadingSpinnerModule,
    CardModule,
  ],
})
export class PostPageModule {}
