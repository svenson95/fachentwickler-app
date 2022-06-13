import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { MyProfilePageRoutingModule } from './my-profile-routing.module';
import { MyProfilePage } from './my-profile.page';

@NgModule({
  declarations: [MyProfilePage],
  imports: [SharedModule, MyProfilePageRoutingModule],
})
export class MyProfilePageModule {}
