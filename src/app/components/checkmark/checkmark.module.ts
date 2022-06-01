import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CheckmarkComponent } from './checkmark.component';

@NgModule({
  declarations: [CheckmarkComponent],
  exports: [CheckmarkComponent],
  imports: [CommonModule],
})
export class CheckmarkModule {}
