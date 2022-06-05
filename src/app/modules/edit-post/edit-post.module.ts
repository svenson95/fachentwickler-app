import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../../core/angular-material.module';
import { CardModule } from '../../core/components/card/card.module';
import { LoadingSpinnerModule } from '../../core/components/loading-spinner/loading-spinner.module';
import { LessonFooterModule } from '../../shared/components/lesson-footer/lesson-footer.module';
import { PostElementModule } from '../../shared/components/post-element/post-element.module';
import { EditPostRoutingModule } from './edit-post-routing.module';
import { EditPostPage } from './edit-post.page';

@NgModule({
  declarations: [EditPostPage],
  exports: [EditPostPage],
  imports: [
    CommonModule,
    EditPostRoutingModule,
    AngularMaterialModule,
    CardModule,
    PostElementModule,
    LessonFooterModule,
    LoadingSpinnerModule,
  ],
})
export class EditPostPageModule {}
