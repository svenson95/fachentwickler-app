import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardModule } from '../../core/components/card/card.module';
import { LoadingSpinnerModule } from '../../core/components/loading-spinner/loading-spinner.module';
import { PostElementModule } from '../../shared/components/post-element/post-element.module';
import { NewsArticleRoutingModule } from './news-article-routing.module';
import { NewsArticlePage } from './news-article.page';

@NgModule({
  declarations: [NewsArticlePage],
  imports: [CommonModule, NewsArticleRoutingModule, CardModule, PostElementModule, LoadingSpinnerModule],
})
export class NewsArticlePageModule {}
