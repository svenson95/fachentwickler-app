import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardModule } from '../../components/card/card.module';
import { LessonFooterModule } from '../../components/lesson-footer/lesson-footer.module';
import { LoadingSpinnerModule } from '../../components/loading-spinner/loading-spinner.module';
import { PostElementModule } from '../../components/post-element/post-element.module';
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
