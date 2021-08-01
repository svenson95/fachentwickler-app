import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../../app-common/angular-material.module';

import { PostElementComponent } from './post-element.component';

import { HighlightModule } from 'ngx-highlightjs';
import { LoadingSpinnerModule } from '../loading-spinner/loading-spinner.module';



@NgModule({
  declarations: [PostElementComponent],
  exports: [PostElementComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    HighlightModule,
    LoadingSpinnerModule,
  ]
})
export class PostElementModule { }
