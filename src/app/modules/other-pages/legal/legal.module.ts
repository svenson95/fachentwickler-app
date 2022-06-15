import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared/shared.module';

import { LegalPageRoutingModule } from './legal-routing.module';
import { LegalPage } from './legal.page';

@NgModule({
  declarations: [LegalPage],
  imports: [SharedModule, LegalPageRoutingModule],
})
export class LegalPageModule {}
