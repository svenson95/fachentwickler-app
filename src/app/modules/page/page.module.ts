import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularMaterialModule } from '../../app-common/angular-material.module';
import { PageComponent } from './page.component';
import { HeaderComponent } from '../../app-common/header/header.component';
import { SidenavComponent } from '../../app-common/sidenav/sidenav.component';
import { ContentComponent } from '../../app-common/content/content.component';
import { LogoutDialogComponent } from '../../components/logout-dialog/logout-dialog.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    PageComponent,
    HeaderComponent,
    SidenavComponent,
    ContentComponent,
    LogoutDialogComponent
  ],
  exports: [
    SidenavComponent,
    ContentComponent,
    PageComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule,
  ]
})
export class PageComponentModule { }
