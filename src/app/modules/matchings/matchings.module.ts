import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../../core/angular-material.module';
import { LoadingSpinnerModule } from '../../core/components/loading-spinner/loading-spinner.module';
import { LessonFooterModule } from '../../shared/components/lesson-footer/lesson-footer.module';
import { MatchingsCardModule } from './matchings-card/matchings-card.module';
import { MatchingsRoutingModule } from './matchings-routing.module';
import { MatchingsPage } from './matchings.page';

@NgModule({
  declarations: [MatchingsPage],
  exports: [MatchingsPage],
  imports: [
    CommonModule,
    MatchingsRoutingModule,
    AngularMaterialModule,
    LessonFooterModule,
    MatchingsCardModule,
    LoadingSpinnerModule,
  ],
})
export class MatchingsPageModule {}
