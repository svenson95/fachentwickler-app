import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AngularMaterialModule } from '../../app-common/angular-material.module';
import { MatchingGameComponent } from './matching-game.component';
import { PostBadgeModule } from '../post-badge/post-badge.module';

@NgModule({
    declarations: [MatchingGameComponent],
    exports: [MatchingGameComponent],
    imports: [
        CommonModule,
        AngularMaterialModule,
        RouterModule,
        PostBadgeModule
    ]
})
export class MatchingGameModule { }
