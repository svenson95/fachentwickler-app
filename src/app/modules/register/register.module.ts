import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterPage } from './register.page';

@NgModule({
  declarations: [RegisterPage],
  imports: [SharedModule, RegisterRoutingModule],
})
export class RegisterPageModule {}
