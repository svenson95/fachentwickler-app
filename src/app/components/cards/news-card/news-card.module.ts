import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../../../app-common/angular-material.module';
import { LoadingSpinnerModule } from '../../loading-spinner/loading-spinner.module';
import { PaginationBarModule } from '../../pagination-bar/pagination-bar.module';
import { NewsCardComponent } from './news-card.component';

@NgModule({
  declarations: [NewsCardComponent],
  exports: [NewsCardComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule,
    PaginationBarModule,
    LoadingSpinnerModule,
  ],
})
export class NewsCardModule {}
