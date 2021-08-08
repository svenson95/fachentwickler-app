import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../../app-common/angular-material.module';

import { NewsCardContainerComponent } from './news-card-container.component';

import { PaginationBarModule } from '../../components/pagination-bar/pagination-bar.module';
import { LoadingSpinnerModule } from '../../components/loading-spinner/loading-spinner.module';
import { NewsCardModule } from '../../components/cards/news-card/news-card.module';



@NgModule({
  declarations: [NewsCardContainerComponent],
  exports: [NewsCardContainerComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule,
    PaginationBarModule,
    LoadingSpinnerModule,
    NewsCardModule
  ]
})
export class NewsCardContainerModule { }