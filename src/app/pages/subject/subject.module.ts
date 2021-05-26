import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../../app-common/angular-material.module';

import { SubjectComponent } from './subject.component';
import { SubjectPageRoutingModule } from './subject-routing.module';
import { PostLinkModule } from '../../components/post-link/post-link.module';
import { PostElementModule } from '../../components/post-element/post-element.module';



@NgModule({
  declarations: [SubjectComponent],
    imports: [
        CommonModule,
        SubjectPageRoutingModule,
        AngularMaterialModule,
        PostLinkModule,
        PostElementModule
    ]
})
export class SubjectModule { }
