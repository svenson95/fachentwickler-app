import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CardModule } from '../../components/card/card.module';
import { StateButtonModule } from '../../components/state-button/state-button.module';
import { AngularMaterialModule } from '../../shared/angular-material.module';
import { ForgotPasswordPageRoutingModule } from './forgot-password-routing.module';
import { ForgotPasswordPage } from './forgot-password.page';

@NgModule({
  declarations: [ForgotPasswordPage],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    ForgotPasswordPageRoutingModule,
    StateButtonModule,
    CardModule,
  ],
})
export class ForgotPasswordPageModule {}
