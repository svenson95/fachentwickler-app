import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../../app-common/angular-material.module';

import { IndexCardPage } from './index-card.page';
import { IndexCardRoutingModule } from './index-card-routing.module';

import { LessonFooterModule } from '../../components/lesson-footer/lesson-footer.module';
import { IndexCardModule } from '../../components/cards/index-card/index-card.module';
import { LoadingSpinnerModule } from '../../components/loading-spinner/loading-spinner.module';


@NgModule({
  declarations: [IndexCardPage],
  imports: [
    CommonModule,
    IndexCardRoutingModule,
    AngularMaterialModule,
    LessonFooterModule,
    IndexCardModule,
    LoadingSpinnerModule
  ]
})
export class IndexCardPageModule { }
