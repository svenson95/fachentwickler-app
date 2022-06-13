import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { EditPostRoutingModule } from './edit-post-routing.module';
import { EditPostPage } from './edit-post.page';

@NgModule({
  declarations: [EditPostPage],
  exports: [EditPostPage],
  imports: [SharedModule, EditPostRoutingModule],
})
export class EditPostPageModule {}
