import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../../app-common/angular-material.module';

import { PruefungsSimulatorComponent } from './pruefungssimulator.component';
import { PruefungsSimulatorPageRoutingModule } from './pruefungssimulator-routing.module';

import { LoadingSpinnerModule } from '../../components/loading-spinner/loading-spinner.module';



@NgModule({
  declarations: [PruefungsSimulatorComponent],
  imports: [
    CommonModule,
    PruefungsSimulatorPageRoutingModule,
    AngularMaterialModule,
    FormsModule,
    LoadingSpinnerModule
  ]
})
export class PruefungssimulatorModule { }
