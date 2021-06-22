import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PruefungsSimulatorComponent } from './pruefungssimulator.component';

const routes: Routes = [
  {
    path: '',
    component: PruefungsSimulatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PruefungsSimulatorPageRoutingModule {}
