import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../../../shared/angular-material.module';
import { LogoutDialogComponent } from './logout-dialog.component';

@NgModule({
  declarations: [LogoutDialogComponent],
  exports: [LogoutDialogComponent],
  imports: [CommonModule, AngularMaterialModule],
})
export class LogoutDialogModule {}
