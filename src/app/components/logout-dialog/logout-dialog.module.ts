import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoutDialogComponent } from './logout-dialog.component';
import {AngularMaterialModule} from '../../app-common/angular-material.module';



@NgModule({
  declarations: [LogoutDialogComponent],
  exports: [LogoutDialogComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
  ]
})
export class LogoutDialogModule { }
