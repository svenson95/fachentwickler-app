import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../../../core/angular-material.module';
import { CardModule } from '../../../core/components/card/card.module';
import { MatchingsCardComponent } from './matchings-card.component';

@NgModule({
  declarations: [MatchingsCardComponent],
  exports: [MatchingsCardComponent],
  imports: [CommonModule, AngularMaterialModule, CardModule],
})
export class MatchingsCardModule {}
