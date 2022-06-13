import { NgModule } from '@angular/core';
import { SearchFieldModule } from '../../core/components/search-field/search-field.module';
import { SharedModule } from '../../shared/shared.module';
import { SearchRoutingModule } from './search-routing.module';
import { SearchPage } from './search.page';

@NgModule({
  declarations: [SearchPage],
  imports: [SharedModule, SearchRoutingModule, SearchFieldModule],
})
export class SearchPageModule {}
