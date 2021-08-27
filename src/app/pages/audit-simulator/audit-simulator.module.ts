import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../../app-common/angular-material.module';

import { AuditSimulatorPage } from './audit-simulator.page';
import { PruefungsSimulatorPageRoutingModule } from './audit-simulator-routing.module';

import { LoadingSpinnerModule } from '../../components/loading-spinner/loading-spinner.module';



@NgModule({
  declarations: [AuditSimulatorPage],
  imports: [
    CommonModule,
    PruefungsSimulatorPageRoutingModule,
    AngularMaterialModule,
    FormsModule,
    LoadingSpinnerModule
  ]
})
export class AuditSimulatorPageModule { }
