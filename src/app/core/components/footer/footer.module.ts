import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../../angular-material.module';
import { AppIconModule } from '../app-icon/app-icon.module';
import { FooterComponent } from './footer.component';

@NgModule({
  declarations: [FooterComponent],
  exports: [FooterComponent],
  imports: [CommonModule, AngularMaterialModule, AppIconModule],
})
export class FooterModule {}
