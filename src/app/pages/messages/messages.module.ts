import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../../app-common/angular-material.module';
import { NewsCardContainerModule } from '../../containers/news-card-container/news-card-container.module';
import { MessagesPageRoutingModule } from './messages-routing.module';
import { MessagesPage } from './messages.page';

@NgModule({
  declarations: [MessagesPage],
  imports: [
    CommonModule,
    MessagesPageRoutingModule,
    AngularMaterialModule,
    NewsCardContainerModule,
  ],
})
export class MessagesPageModule {}
