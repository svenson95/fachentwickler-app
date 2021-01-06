import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsArticleComponent } from './news-article.component';

const routes: Routes = [
  {
    path: '',
    component: NewsArticleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsArticleRoutingModule {}
