import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardModule } from '../../components/card/card.module';
import { AboutPageRoutingModule } from './about-routing.module';
import { AboutPage } from './about.page';

@NgModule({
  declarations: [AboutPage],
  imports: [CommonModule, AboutPageRoutingModule, CardModule],
})
export class AboutPageModule {}
