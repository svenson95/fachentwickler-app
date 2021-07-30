import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../../app-common/angular-material.module';

import { MatchingComponent } from './matching.component';
import { MatchingRoutingModule } from './matching-routing.module';
import { LessonFooterModule } from '../../components/lesson-footer/lesson-footer.module';
import { MatchingCardModule } from '../../components/cards/matching-card/matching-card.module';


@NgModule({
    declarations: [MatchingComponent],
    exports: [MatchingComponent],
    imports: [
        CommonModule,
        MatchingRoutingModule,
        AngularMaterialModule,
        LessonFooterModule,
        MatchingCardModule
    ]
})
export class MatchingModule { }
