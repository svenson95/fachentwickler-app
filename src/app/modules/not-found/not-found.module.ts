import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { NotFoundPageRoutingModule } from './not-found-routing.module';
import { NotFoundPage } from './not-found.page';

@NgModule({
  declarations: [NotFoundPage],
  imports: [SharedModule, NotFoundPageRoutingModule],
})
export class NotFoundPageModule {}
