import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostElementComponent } from './post-element.component';
import { AngularMaterialModule } from '../../app-common/angular-material.module';



@NgModule({
  declarations: [PostElementComponent],
  exports: [PostElementComponent],
  imports: [
    CommonModule,
    AngularMaterialModule
  ]
})
export class PostElementModule { }
