import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PipesModule } from '../../../pipes/pipes.module';
import { AngularMaterialModule } from '../../../shared/angular-material.module';
import { LoadingSpinnerModule } from '../../loading-spinner/loading-spinner.module';
import { PostLinkModule } from '../../post-link/post-link.module';
import { SchoolWeekCardComponent } from './school-week-card.component';

@NgModule({
  declarations: [SchoolWeekCardComponent],
  exports: [SchoolWeekCardComponent],
  imports: [CommonModule, AngularMaterialModule, PostLinkModule, LoadingSpinnerModule, PipesModule],
})
export class SchoolWeekCardModule {}
