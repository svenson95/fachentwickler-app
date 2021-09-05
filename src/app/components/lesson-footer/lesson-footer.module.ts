import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LessonFooterComponent } from './lesson-footer.component';
import { AngularMaterialModule } from '../../app-common/angular-material.module';
import { StateButtonModule } from '../state-button/state-button.module';
import { PipesModule } from '../../pipes/pipes.module';



@NgModule({
  declarations: [LessonFooterComponent],
  exports: [LessonFooterComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule,
    StateButtonModule,
    PipesModule
  ]
})
export class LessonFooterModule { }
