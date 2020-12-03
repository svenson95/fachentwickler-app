import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditPostComponent } from './edit-post.component';
import { AngularMaterialModule } from '../../app-common/angular-material.module';
import { EditPostRoutingModule } from './edit-post-routing.module';



@NgModule({
  declarations: [EditPostComponent],
  imports: [
    CommonModule,
    EditPostRoutingModule,
    AngularMaterialModule
  ]
})
export class EditPostModule { }
