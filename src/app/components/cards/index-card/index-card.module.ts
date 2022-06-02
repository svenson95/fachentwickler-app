import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardModule } from '../../card/card.module';
import { IndexCardComponent } from './index-card.component';

@NgModule({
  declarations: [IndexCardComponent],
  exports: [IndexCardComponent],
  imports: [CommonModule, CardModule],
})
export class IndexCardModule {}
