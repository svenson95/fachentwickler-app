import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { NavLinkComponent } from './nav-link.component';

@NgModule({
  declarations: [NavLinkComponent],
  exports: [NavLinkComponent],
  imports: [CommonModule, RouterModule, MatListModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NavLinkModule {}
