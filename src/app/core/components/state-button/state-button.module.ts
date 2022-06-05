import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../../angular-material.module';
import { LoadingSpinnerModule } from '../loading-spinner/loading-spinner.module';
import { StateButtonComponent } from './state-button.component';

@NgModule({
  declarations: [StateButtonComponent],
  exports: [StateButtonComponent],
  imports: [CommonModule, AngularMaterialModule, LoadingSpinnerModule],
})
export class StateButtonModule {}
