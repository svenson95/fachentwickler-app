import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../../../shared/angular-material.module';
import { CardModule } from '../../card/card.module';
import { MatchingCardComponent } from './matching-card.component';

@NgModule({
  declarations: [MatchingCardComponent],
  exports: [MatchingCardComponent],
  imports: [CommonModule, AngularMaterialModule, CardModule],
})
export class MatchingCardModule {}
