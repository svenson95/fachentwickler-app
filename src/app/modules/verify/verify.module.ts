import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../../core/angular-material.module';
import { CardModule } from '../../core/components/card/card.module';
import { StateButtonModule } from '../../core/components/state-button/state-button.module';
import { CheckmarkModule } from '../../shared/components/checkmark/checkmark.module';
import { VerifyPageRoutingModule } from './verify-routing.module';
import { VerifyPage } from './verify.page';

@NgModule({
  declarations: [VerifyPage],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    VerifyPageRoutingModule,
    StateButtonModule,
    CardModule,
    CheckmarkModule,
  ],
})
export class VerifyPageModule {}
