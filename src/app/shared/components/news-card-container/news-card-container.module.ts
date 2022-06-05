import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../../../core/angular-material.module';
import { LoadingSpinnerModule } from '../../../core/components/loading-spinner/loading-spinner.module';
import { PaginationBarModule } from '../pagination-bar/pagination-bar.module';
import { NewsCardContainerComponent } from './news-card-container.component';
import { NewsCardModule } from './news-card/news-card.module';

@NgModule({
  declarations: [NewsCardContainerComponent],
  exports: [NewsCardContainerComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule,
    PaginationBarModule,
    LoadingSpinnerModule,
    NewsCardModule,
  ],
})
export class NewsCardContainerModule {}
