import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardModule } from '../../core/components/card/card.module';
import { LegalPageRoutingModule } from './legal-routing.module';
import { LegalPage } from './legal.page';

@NgModule({
  declarations: [LegalPage],
  imports: [CommonModule, LegalPageRoutingModule, CardModule],
})
export class LegalPageModule {}
