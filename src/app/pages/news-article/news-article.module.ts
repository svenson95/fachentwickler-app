import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../../app-common/angular-material.module';

import { NewsArticleComponent } from './news-article.component';
import { NewsArticleRoutingModule } from './news-article-routing.module';

import { PostElementModule } from '../../components/post-element/post-element.module';
import { LoadingSpinnerModule } from '../../components/loading-spinner/loading-spinner.module';



@NgModule({
  declarations: [NewsArticleComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    NewsArticleRoutingModule,
    PostElementModule,
    LoadingSpinnerModule
  ]
})
export class NewsArticleModule { }
