import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { SearchFieldComponent } from './search-field.component';

@NgModule({
  declarations: [SearchFieldComponent],
  exports: [SearchFieldComponent],
  imports: [SharedModule],
})
export class SearchFieldModule {}
