import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardModule } from '../../components/card/card.module';
import { AngularMaterialModule } from '../../shared/angular-material.module';
import { NotFoundPageRoutingModule } from './not-found-routing.module';
import { NotFoundPage } from './not-found.page';

@NgModule({
  declarations: [NotFoundPage],
  imports: [CommonModule, AngularMaterialModule, NotFoundPageRoutingModule, CardModule],
})
export class NotFoundPageModule {}
