import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CardModule } from '../../components/card/card.module';
import { StateButtonModule } from '../../components/state-button/state-button.module';
import { AngularMaterialModule } from '../../shared/angular-material.module';
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
