import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ForgotPasswordPageRoutingModule } from './forgot-password-routing.module';
import { ForgotPasswordPage } from './forgot-password.page';

@NgModule({
  declarations: [ForgotPasswordPage],
  imports: [SharedModule, ForgotPasswordPageRoutingModule],
})
export class ForgotPasswordPageModule {}
