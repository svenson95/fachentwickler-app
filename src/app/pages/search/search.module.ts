import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../../app-common/angular-material.module';

import { SearchPage } from './search.page';
import { SearchRoutingModule } from './search-routing.module';

import { PostLinkModule } from '../../components/post-link/post-link.module';
import { LoadingSpinnerModule } from '../../components/loading-spinner/loading-spinner.module';
import { SearchFieldModule } from '../../components/search-field/search-field.module';



@NgModule({
  declarations: [SearchPage],
  imports: [
    CommonModule,
    AngularMaterialModule,
    SearchRoutingModule,
    PostLinkModule,
    LoadingSpinnerModule,
    SearchFieldModule
  ]
})
export class SearchPageModule { }
