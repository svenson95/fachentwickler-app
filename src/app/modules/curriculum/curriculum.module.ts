import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../../core/angular-material.module';
import { LoadingSpinnerModule } from '../../core/components/loading-spinner/loading-spinner.module';
import { SchoolWeekCardModule } from '../../shared/components/school-week-card/school-week-card.module';
import { CurriculumPageRoutingModule } from './curriculum-routing.module';
import { CurriculumPage } from './curriculum.page';

@NgModule({
  declarations: [CurriculumPage],
  imports: [
    CommonModule,
    CurriculumPageRoutingModule,
    AngularMaterialModule,
    SchoolWeekCardModule,
    FormsModule,
    LoadingSpinnerModule,
  ],
})
export class CurriculumPageModule {}
