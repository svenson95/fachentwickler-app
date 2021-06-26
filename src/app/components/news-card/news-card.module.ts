import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../../app-common/angular-material.module';

import { NewsCardComponent } from './news-card.component';
import { PageComponentModule } from '../../app-common/page/page.module';



@NgModule({
  declarations: [NewsCardComponent],
  exports: [NewsCardComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule,
    PageComponentModule
  ]
})
export class NewsCardModule { }
