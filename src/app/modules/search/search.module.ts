import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../../core/angular-material.module';
import { LoadingSpinnerModule } from '../../core/components/loading-spinner/loading-spinner.module';
import { SearchFieldModule } from '../../core/components/search-field/search-field.module';
import { PostLinkModule } from '../../shared/components/post-link/post-link.module';
import { SearchRoutingModule } from './search-routing.module';
import { SearchPage } from './search.page';

@NgModule({
  declarations: [SearchPage],
  imports: [
    CommonModule,
    AngularMaterialModule,
    SearchRoutingModule,
    PostLinkModule,
    LoadingSpinnerModule,
    SearchFieldModule,
  ],
})
export class SearchPageModule {}
