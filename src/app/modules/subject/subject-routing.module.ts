import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuardService } from '../../core/guards/admin-guard.service';
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
    loadChildren: () => import('../indexcards/indexcards.module').then((m) => m.IndexcardsPageModule),
  },
  {
    path: ':topic/:title/quiz',
    loadChildren: () => import('../quiz/quiz.module').then((m) => m.QuizPageModule),
  },
  {
    path: ':topic/:title/matchings',
    loadChildren: () => import('../matchings/matchings.module').then((m) => m.MatchingsPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubjectPageRoutingModule {}