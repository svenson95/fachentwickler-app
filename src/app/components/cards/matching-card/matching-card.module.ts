import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AngularMaterialModule } from '../../../app-common/angular-material.module';
import { MatchingCardComponent } from './matching-card.component';
import { PostBadgeModule } from '../../post-badge/post-badge.module';

@NgModule({
    declarations: [MatchingCardComponent],
    exports: [MatchingCardComponent],
    imports: [
        CommonModule,
        AngularMaterialModule,
        RouterModule,
        PostBadgeModule
    ]
})
export class MatchingCardModule { }
