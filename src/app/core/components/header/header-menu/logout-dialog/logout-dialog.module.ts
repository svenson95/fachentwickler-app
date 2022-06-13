import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { LogoutDialogComponent } from './logout-dialog.component';

@NgModule({
  declarations: [LogoutDialogComponent],
  exports: [LogoutDialogComponent],
  imports: [SharedModule],
})
export class LogoutDialogModule {}
