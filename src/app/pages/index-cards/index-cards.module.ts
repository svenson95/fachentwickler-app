import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexCardsComponent } from './index-cards.component';
import { IndexCardsRoutingModule } from './index-cards-routing.module';
import { AngularMaterialModule } from '../../app-common/angular-material.module';
import { LessonFooterModule } from '../../components/lesson-footer/lesson-footer.module';
import { IndexCardModule } from '../../components/cards/index-card/index-card.module';


@NgModule({
  declarations: [IndexCardsComponent],
    imports: [
        CommonModule,
        IndexCardsRoutingModule,
        AngularMaterialModule,
        LessonFooterModule,
        IndexCardModule
    ]
})
export class IndexCardsModule { }
