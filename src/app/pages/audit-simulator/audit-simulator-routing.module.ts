import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuditSimulatorPage } from './audit-simulator.page';

const routes: Routes = [
  {
    path: '',
    component: AuditSimulatorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PruefungsSimulatorPageRoutingModule {}
