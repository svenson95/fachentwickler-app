import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ImageManagerDialogModule } from '../../../../shared/dialogs/image-manager-dialog/image-manager-dialog.module';
import { LogoutDialogModule } from '../../../../shared/dialogs/logout-dialog/logout-dialog.module';
import { AngularMaterialModule } from '../../../angular-material.module';
import { HeaderMenuComponent } from './header-menu.component';

@NgModule({
  declarations: [HeaderMenuComponent],
  exports: [HeaderMenuComponent],
  imports: [CommonModule, AngularMaterialModule, LogoutDialogModule, ImageManagerDialogModule],
})
export class HeaderMenuModule {}
