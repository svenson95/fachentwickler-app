import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardModule } from '../../card/card.module';
import { LoadingSpinnerModule } from '../../loading-spinner/loading-spinner.module';
import { PaginationBarModule } from '../../pagination-bar/pagination-bar.module';
import { NewsCardComponent } from './news-card.component';

@NgModule({
  declarations: [NewsCardComponent],
  exports: [NewsCardComponent],
  imports: [
    CommonModule,
    RouterModule,
    CardModule,
    PaginationBarModule,
    LoadingSpinnerModule,
  ],
})
export class NewsCardModule {}
