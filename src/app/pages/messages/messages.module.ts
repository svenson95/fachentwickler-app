import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../../app-common/angular-material.module';

import { MessagesComponent } from './messages.component';
import { MessagesPageRoutingModule } from './messages-routing.module';

import { NewsCardModule } from '../../components/cards/news-card/news-card.module';



@NgModule({
  declarations: [MessagesComponent],
    imports: [
      CommonModule,
      MessagesPageRoutingModule,
      AngularMaterialModule,
      NewsCardModule
    ]
})
export class MessagesModule { }
