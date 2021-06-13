import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../angular-material.module';
import { NgxDropzoneModule } from 'ngx-dropzone';

import { PageComponent } from './page.component';
import { HeaderComponent } from '../header/header.component';
import { AppIconComponent } from '../app-icon/app-icon.component';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { ContentComponent } from '../content/content.component';
import { LogoutDialogComponent } from '../../components/logout-dialog/logout-dialog.component';
import { ImageManagerDialogComponent } from '../../components/image-manager-dialog/image-manager-dialog.component';
import { DeleteImageDialogComponent } from '../../components/delete-image-dialog/delete-image-dialog.component';


@NgModule({
  declarations: [
    PageComponent,
    HeaderComponent,
    AppIconComponent,
    SidenavComponent,
    ContentComponent,
    LogoutDialogComponent,
    ImageManagerDialogComponent,
    DeleteImageDialogComponent
  ],
  exports: [
    SidenavComponent,
    ContentComponent,
    PageComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule,
    FormsModule,
    NgxDropzoneModule
  ]
})
export class PageComponentModule { }
