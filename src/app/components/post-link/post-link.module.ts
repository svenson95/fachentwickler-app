import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../../app-common/angular-material.module';

import { PostLinkComponent } from './post-link.component';
import { PostBadgeModule } from '../post-badge/post-badge.module';
import { PipesModule } from '../../pipes/pipes.module';



@NgModule({
  declarations: [PostLinkComponent],
  exports: [PostLinkComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule,
    PostBadgeModule,
    PipesModule,
  ]
})
export class PostLinkModule { }
