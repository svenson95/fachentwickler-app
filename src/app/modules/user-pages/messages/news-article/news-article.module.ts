import { NgModule } from '@angular/core';

import { SharedModule } from '../../../../shared/shared.module';

import { NewsArticleRoutingModule } from './news-article-routing.module';
import { NewsArticlePage } from './news-article.page';

@NgModule({
  declarations: [NewsArticlePage],
  imports: [SharedModule, NewsArticleRoutingModule],
})
export class NewsArticlePageModule {}
