import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../../app-common/angular-material.module';
import { SchoolWeekCardModule } from '../../components/cards/school-week-card/school-week-card.module';
import { LoadingSpinnerModule } from '../../components/loading-spinner/loading-spinner.module';
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
