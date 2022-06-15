import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared/shared.module';

import { PruefungsSimulatorPageRoutingModule } from './audit-simulator-routing.module';
import { AuditSimulatorPage } from './audit-simulator.page';

@NgModule({
  declarations: [AuditSimulatorPage],
  imports: [SharedModule, PruefungsSimulatorPageRoutingModule],
})
export class AuditSimulatorPageModule {}
