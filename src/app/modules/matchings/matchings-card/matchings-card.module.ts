import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../../../core/angular-material.module';
import { CardModule } from '../../../core/components/card/card.module';
import { MatchingCardComponent } from './matchings-card.component';

@NgModule({
  declarations: [MatchingCardComponent],
  exports: [MatchingCardComponent],
  imports: [CommonModule, AngularMaterialModule, CardModule],
})
export class MatchingsCardModule {}
