import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexCardsComponent } from './index-cards.component';
import { IndexCardsRoutingModule } from './index-cards-routing.module';
import { AngularMaterialModule } from '../../app-common/angular-material.module';


@NgModule({
  declarations: [IndexCardsComponent],
  imports: [
    CommonModule,
    IndexCardsRoutingModule,
    AngularMaterialModule
  ]
})
export class IndexCardsModule { }
