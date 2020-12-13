import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurriculumComponent } from './curriculum.component';
import { CurriculumPageRoutingModule } from './curriculum-routing.module';
import { AngularMaterialModule } from '../../app-common/angular-material.module';
import { SchoolWeekCardModule } from '../../components/school-week-card/school-week-card.module';



@NgModule({
  declarations: [CurriculumComponent],
  imports: [
    CommonModule,
    CurriculumPageRoutingModule,
    AngularMaterialModule,
    SchoolWeekCardModule
  ]
})
export class CurriculumModule { }
