import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';

import { NavLinkComponent } from './nav-link.component';

@NgModule({
  declarations: [NavLinkComponent],
  exports: [NavLinkComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatListModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NavLinkModule { }
