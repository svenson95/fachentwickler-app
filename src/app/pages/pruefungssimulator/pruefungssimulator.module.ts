import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PruefungsSimulatorComponent } from './pruefungssimulator.component';
import { PruefungsSimulatorPageRoutingModule } from './pruefungssimulator-routing.module';
import { AngularMaterialModule } from '../../app-common/angular-material.module';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [PruefungsSimulatorComponent],
    imports: [
        CommonModule,
        PruefungsSimulatorPageRoutingModule,
        AngularMaterialModule,
        FormsModule
    ]
})
export class PruefungssimulatorModule { }
