import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';

import { NavLinkComponent } from './nav-link.component';

@NgModule({
  declarations: [NavLinkComponent],
  exports: [NavLinkComponent],
  imports: [SharedModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NavLinkModule {}
