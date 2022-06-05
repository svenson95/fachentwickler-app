import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../../core/angular-material.module';
import { CardModule } from '../../core/components/card/card.module';
import { NotFoundPageRoutingModule } from './not-found-routing.module';
import { NotFoundPage } from './not-found.page';

@NgModule({
  declarations: [NotFoundPage],
  imports: [CommonModule, AngularMaterialModule, NotFoundPageRoutingModule, CardModule],
})
export class NotFoundPageModule {}
