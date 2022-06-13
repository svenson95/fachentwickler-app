import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { AboutPageRoutingModule } from './about-routing.module';
import { AboutPage } from './about.page';

@NgModule({
  declarations: [AboutPage],
  imports: [SharedModule, AboutPageRoutingModule],
})
export class AboutPageModule {}
