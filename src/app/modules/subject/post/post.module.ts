import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared/shared.module';

import { PostPageRoutingModule } from './post-routing.module';
import { PostPage } from './post.page';

@NgModule({
  declarations: [PostPage],
  exports: [PostPage],
  imports: [SharedModule, PostPageRoutingModule],
})
export class PostPageModule {}
