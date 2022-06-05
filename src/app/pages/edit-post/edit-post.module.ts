import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardModule } from '../../components/card/card.module';
import { LessonFooterModule } from '../../components/lesson-footer/lesson-footer.module';
import { LoadingSpinnerModule } from '../../components/loading-spinner/loading-spinner.module';
import { PostElementModule } from '../../components/post-element/post-element.module';
import { AngularMaterialModule } from '../../shared/angular-material.module';
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
