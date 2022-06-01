import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../../app-common/angular-material.module';
import { LoadingSpinnerModule } from '../../components/loading-spinner/loading-spinner.module';
import { PostElementModule } from '../../components/post-element/post-element.module';
import { NewsArticleRoutingModule } from './news-article-routing.module';
import { NewsArticlePage } from './news-article.page';

@NgModule({
  declarations: [NewsArticlePage],
  imports: [
    CommonModule,
    AngularMaterialModule,
    NewsArticleRoutingModule,
    PostElementModule,
    LoadingSpinnerModule,
  ],
})
export class NewsArticlePageModule {}
