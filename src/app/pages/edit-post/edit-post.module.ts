import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../../app-common/angular-material.module';

import { EditPostComponent } from './edit-post.component';
import { EditPostRoutingModule } from './edit-post-routing.module';

import { PostElementModule } from '../../components/post-element/post-element.module';
import { LessonFooterModule } from '../../components/lesson-footer/lesson-footer.module';
import { LoadingSpinnerModule } from '../../components/loading-spinner/loading-spinner.module';



@NgModule({
  declarations: [EditPostComponent],
  exports: [EditPostComponent],
  imports: [
    CommonModule,
    EditPostRoutingModule,
    AngularMaterialModule,
    PostElementModule,
    LessonFooterModule,
    LoadingSpinnerModule
  ]
})
export class EditPostModule { }
