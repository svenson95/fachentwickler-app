import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminGuardService } from '@guards/admin-guard.service';

import { PostPage } from './post.page';

const routes: Routes = [
  {
    path: '',
    component: PostPage,
  },
  {
    path: 'edit',
    loadChildren: () => import('./edit-post/edit-post.module').then((m) => m.EditPostPageModule),
    canActivate: [AdminGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostPageRoutingModule {}
