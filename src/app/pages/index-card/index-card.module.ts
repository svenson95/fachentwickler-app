import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../../app-common/angular-material.module';
import { IndexCardModule } from '../../components/cards/index-card/index-card.module';
import { LessonFooterModule } from '../../components/lesson-footer/lesson-footer.module';
import { LoadingSpinnerModule } from '../../components/loading-spinner/loading-spinner.module';
import { IndexCardRoutingModule } from './index-card-routing.module';
import { IndexCardPage } from './index-card.page';

@NgModule({
  declarations: [IndexCardPage],
  imports: [
    CommonModule,
    IndexCardRoutingModule,
    AngularMaterialModule,
    LessonFooterModule,
    IndexCardModule,
    LoadingSpinnerModule,
  ],
})
export class IndexCardPageModule {}
