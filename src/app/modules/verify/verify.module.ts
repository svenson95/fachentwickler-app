import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { VerifyPageRoutingModule } from './verify-routing.module';
import { VerifyPage } from './verify.page';

@NgModule({
  declarations: [VerifyPage],
  imports: [SharedModule, VerifyPageRoutingModule],
})
export class VerifyPageModule {}
