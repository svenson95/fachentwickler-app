import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuardService } from '../../services/guards/admin-guard.service';
import { SubjectPage } from './subject.page';

const routes: Routes = [
  {
    path: '',
    component: SubjectPage,
  },
  {
    path: ':topic/:post',
    loadChildren: () => import('../post/post.module').then((m) => m.PostPageModule),
  },
  {
    path: ':topic/:post/edit',
    loadChildren: () => import('../edit-post/edit-post.module').then((m) => m.EditPostPageModule),
    canActivate: [AdminGuardService],
  },
  {
    path: ':topic/:title/karteikarten',
    loadChildren: () => import('../index-card/index-card.module').then((m) => m.IndexCardPageModule),
  },
  {
    path: ':topic/:title/quiz',
    loadChildren: () => import('../quiz/quiz.module').then((m) => m.QuizPageModule),
  },
  {
    path: ':topic/:title/matching',
    loadChildren: () => import('../matching/matching.module').then((m) => m.MatchingPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubjectPageRoutingModule {}
