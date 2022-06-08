import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardModule } from '../../core/components/card/card.module';
import { LoadingSpinnerModule } from '../../core/components/loading-spinner/loading-spinner.module';
import { NewsCardModule } from '../../shared/components/news-card/news-card.module';
import { MessagesPageRoutingModule } from './messages-routing.module';
import { MessagesPage } from './messages.page';

@NgModule({
  declarations: [MessagesPage],
  imports: [CommonModule, MessagesPageRoutingModule, CardModule, NewsCardModule, LoadingSpinnerModule],
})
export class MessagesPageModule {}
