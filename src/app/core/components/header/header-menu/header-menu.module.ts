import { NgModule } from '@angular/core';

import { SharedModule } from '../../../../shared/shared.module';

import { HeaderMenuComponent } from './header-menu.component';
import { ImageManagerDialogModule } from './image-manager-dialog/image-manager-dialog.module';
import { LogoutDialogModule } from './logout-dialog/logout-dialog.module';

@NgModule({
  declarations: [HeaderMenuComponent],
  exports: [HeaderMenuComponent],
  imports: [SharedModule, LogoutDialogModule, ImageManagerDialogModule],
})
export class HeaderMenuModule {}
