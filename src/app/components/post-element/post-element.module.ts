import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';
import { AngularMaterialModule } from '../../app-common/angular-material.module';

import { PostElementComponent } from './post-element.component';



@NgModule({
  declarations: [PostElementComponent],
  exports: [PostElementComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    HighlightModule,
  ]
})
export class PostElementModule { }
