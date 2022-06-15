import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { SubjectPageRoutingModule } from './subject-routing.module';
import { SubjectPage } from './subject.page';

@NgModule({
  declarations: [SubjectPage],
  imports: [SharedModule, SubjectPageRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SubjectPageModule {}
