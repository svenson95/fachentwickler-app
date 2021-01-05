import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../../app-common/angular-material.module';

import { SearchComponent } from './search.component';
import { SearchRoutingModule } from './search-routing.module';
import {PostLinkModule} from '../../components/post-link/post-link.module';



@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    SearchRoutingModule,
    PostLinkModule
  ]
})
export class SearchModule { }
