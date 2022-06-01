import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AngularMaterialModule } from '../../app-common/angular-material.module';
import { LoadingSpinnerModule } from '../../components/loading-spinner/loading-spinner.module';
import { PostElementModule } from '../../components/post-element/post-element.module';
import { PostLinkModule } from '../../components/post-link/post-link.module';
import { PipesModule } from '../../pipes/pipes.module';
import { SubjectPageRoutingModule } from './subject-routing.module';
import { SubjectPage } from './subject.page';

@NgModule({
  declarations: [SubjectPage],
  imports: [
    CommonModule,
    SubjectPageRoutingModule,
    AngularMaterialModule,
    PostLinkModule,
    PostElementModule,
    LoadingSpinnerModule,
    PipesModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SubjectPageModule {}
