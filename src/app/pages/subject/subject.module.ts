import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectComponent } from './subject.component';
import { SubjectPageRoutingModule } from './subject-routing.module';
import { AngularMaterialModule } from '../../app-common/angular-material.module';
import { PostBadgeModule } from '../../components/post-badge/post-badge.module';



@NgModule({
  declarations: [SubjectComponent],
  imports: [
    CommonModule,
    SubjectPageRoutingModule,
    AngularMaterialModule,
    PostBadgeModule
  ]
})
export class SubjectModule { }
