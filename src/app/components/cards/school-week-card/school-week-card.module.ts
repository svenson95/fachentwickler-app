import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../../../app-common/angular-material.module';

import { SchoolWeekCardComponent } from './school-week-card.component';

import { PostLinkModule } from '../../post-link/post-link.module';
import { LoadingSpinnerModule } from '../../loading-spinner/loading-spinner.module';
import { PipesModule } from '../../../pipes/pipes.module';



@NgModule({
  declarations: [SchoolWeekCardComponent],
  exports: [SchoolWeekCardComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    PostLinkModule,
    LoadingSpinnerModule,
    PipesModule
  ]
})
export class SchoolWeekCardModule { }
