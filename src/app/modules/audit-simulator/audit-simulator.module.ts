import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../../core/angular-material.module';
import { CardModule } from '../../core/components/card/card.module';
import { LoadingSpinnerModule } from '../../core/components/loading-spinner/loading-spinner.module';
import { PruefungsSimulatorPageRoutingModule } from './audit-simulator-routing.module';
import { AuditSimulatorPage } from './audit-simulator.page';

@NgModule({
  declarations: [AuditSimulatorPage],
  imports: [
    CommonModule,
    PruefungsSimulatorPageRoutingModule,
    AngularMaterialModule,
    CardModule,
    FormsModule,
    LoadingSpinnerModule,
  ],
})
export class AuditSimulatorPageModule {}
