import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ExamsRoutingModule } from './exams-routing.module';
import { ExamsPage } from './exams.page';

@NgModule({
  declarations: [ExamsPage],
  imports: [SharedModule, ExamsRoutingModule],
})
export class ExamsPageModule {}
