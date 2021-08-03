import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LessonFooterComponent } from './lesson-footer.component';
import { AngularMaterialModule } from '../../app-common/angular-material.module';
import { ButtonStateModule } from '../button-state/button-state.module';
import { PipesModule } from '../../pipes/pipes.module';



@NgModule({
  declarations: [LessonFooterComponent],
  exports: [LessonFooterComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule,
    ButtonStateModule,
    PipesModule
  ]
})
export class LessonFooterModule { }
