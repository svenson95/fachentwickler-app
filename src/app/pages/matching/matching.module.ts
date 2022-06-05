import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatchingCardModule } from '../../components/cards/matching-card/matching-card.module';
import { LessonFooterModule } from '../../components/lesson-footer/lesson-footer.module';
import { LoadingSpinnerModule } from '../../components/loading-spinner/loading-spinner.module';
import { AngularMaterialModule } from '../../shared/angular-material.module';
import { MatchingRoutingModule } from './matching-routing.module';
import { MatchingPage } from './matching.page';

@NgModule({
  declarations: [MatchingPage],
  exports: [MatchingPage],
  imports: [
    CommonModule,
    MatchingRoutingModule,
    AngularMaterialModule,
    LessonFooterModule,
    MatchingCardModule,
    LoadingSpinnerModule,
  ],
})
export class MatchingPageModule {}
