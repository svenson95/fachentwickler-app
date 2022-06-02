import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardModule } from '../../components/card/card.module';
import { NewsCardContainerModule } from '../../containers/news-card-container/news-card-container.module';
import { MessagesPageRoutingModule } from './messages-routing.module';
import { MessagesPage } from './messages.page';

@NgModule({
  declarations: [MessagesPage],
  imports: [
    CommonModule,
    MessagesPageRoutingModule,
    CardModule,
    NewsCardContainerModule,
  ],
})
export class MessagesPageModule {}
