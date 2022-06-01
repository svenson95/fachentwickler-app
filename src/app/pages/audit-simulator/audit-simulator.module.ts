import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../../app-common/angular-material.module';
import { LoadingSpinnerModule } from '../../components/loading-spinner/loading-spinner.module';
import { PruefungsSimulatorPageRoutingModule } from './audit-simulator-routing.module';
import { AuditSimulatorPage } from './audit-simulator.page';

@NgModule({
  declarations: [AuditSimulatorPage],
  imports: [
    CommonModule,
    PruefungsSimulatorPageRoutingModule,
    AngularMaterialModule,
    FormsModule,
    LoadingSpinnerModule,
  ],
})
export class AuditSimulatorPageModule {}
