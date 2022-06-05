import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../../../core/angular-material.module';
import { StateButtonModule } from '../../../core/components/state-button/state-button.module';
import { PipesModule } from '../../pipes/pipes.module';
import { LessonFooterComponent } from './lesson-footer.component';

@NgModule({
  declarations: [LessonFooterComponent],
  exports: [LessonFooterComponent],
  imports: [CommonModule, AngularMaterialModule, RouterModule, StateButtonModule, PipesModule],
})
export class LessonFooterModule {}
