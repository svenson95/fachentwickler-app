import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../../app-common/angular-material.module';

import { MessagesPage } from './messages.page';
import { MessagesPageRoutingModule } from './messages-routing.module';

import { NewsCardContainerModule } from '../../containers/news-card-container/news-card-container.module';



@NgModule({
  declarations: [MessagesPage],
  imports: [
    CommonModule,
    MessagesPageRoutingModule,
    AngularMaterialModule,
    NewsCardContainerModule
  ]
})
export class MessagesPageModule { }
