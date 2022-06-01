import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../../app-common/angular-material.module';
import { LegalPageRoutingModule } from './legal-routing.module';
import { LegalPage } from './legal.page';

@NgModule({
  declarations: [LegalPage],
  imports: [CommonModule, LegalPageRoutingModule, AngularMaterialModule],
})
export class LegalPageModule {}
