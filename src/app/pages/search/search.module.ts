import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../../app-common/angular-material.module';
import { LoadingSpinnerModule } from '../../components/loading-spinner/loading-spinner.module';
import { PostLinkModule } from '../../components/post-link/post-link.module';
import { SearchFieldModule } from '../../components/search-field/search-field.module';
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
