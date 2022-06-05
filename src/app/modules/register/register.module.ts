import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../../core/angular-material.module';
import { CardModule } from '../../core/components/card/card.module';
import { StateButtonModule } from '../../core/components/state-button/state-button.module';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterPage } from './register.page';

@NgModule({
  declarations: [RegisterPage],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    RegisterRoutingModule,
    StateButtonModule,
    CardModule,
  ],
})
export class RegisterPageModule {}
