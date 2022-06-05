import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../../core/angular-material.module';
import { LoadingSpinnerModule } from '../../core/components/loading-spinner/loading-spinner.module';
import { LessonFooterModule } from '../../shared/components/lesson-footer/lesson-footer.module';
import { IndexCardModule } from './index-card/index-card.module';
import { IndexcardsRoutingModule } from './indexcards-routing.module';
import { IndexcardsPage } from './indexcards.page';

@NgModule({
  declarations: [IndexcardsPage],
  imports: [
    CommonModule,
    IndexcardsRoutingModule,
    AngularMaterialModule,
    LessonFooterModule,
    IndexCardModule,
    LoadingSpinnerModule,
  ],
})
export class IndexcardsPageModule {}
