import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../../app-common/angular-material.module';
import { CardModule } from '../../components/card/card.module';
import { CheckmarkModule } from '../../components/checkmark/checkmark.module';
import { StateButtonModule } from '../../components/state-button/state-button.module';
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
