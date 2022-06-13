import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { MessagesPageRoutingModule } from './messages-routing.module';
import { MessagesPage } from './messages.page';

@NgModule({
  declarations: [MessagesPage],
  imports: [SharedModule, MessagesPageRoutingModule],
})
export class MessagesPageModule {}
