import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CurriculumPageRoutingModule } from './curriculum-routing.module';
import { CurriculumPage } from './curriculum.page';

@NgModule({
  declarations: [CurriculumPage],
  imports: [SharedModule, CurriculumPageRoutingModule],
})
export class CurriculumPageModule {}
