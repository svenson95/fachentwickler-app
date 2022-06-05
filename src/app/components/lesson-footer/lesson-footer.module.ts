import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../../pipes/pipes.module';
import { AngularMaterialModule } from '../../shared/angular-material.module';
import { StateButtonModule } from '../state-button/state-button.module';
import { LessonFooterComponent } from './lesson-footer.component';

@NgModule({
  declarations: [LessonFooterComponent],
  exports: [LessonFooterComponent],
  imports: [CommonModule, AngularMaterialModule, RouterModule, StateButtonModule, PipesModule],
})
export class LessonFooterModule {}
