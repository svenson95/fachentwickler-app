import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../../app-common/angular-material.module';

import { MatchingPage } from './matching.page';
import { MatchingRoutingModule } from './matching-routing.module';

import { LessonFooterModule } from '../../components/lesson-footer/lesson-footer.module';
import { MatchingCardModule } from '../../components/cards/matching-card/matching-card.module';
import { LoadingSpinnerModule } from '../../components/loading-spinner/loading-spinner.module';


@NgModule({
  declarations: [MatchingPage],
  exports: [MatchingPage],
  imports: [
    CommonModule,
    MatchingRoutingModule,
    AngularMaterialModule,
    LessonFooterModule,
    MatchingCardModule,
    LoadingSpinnerModule
  ]
})
export class MatchingPageModule { }
