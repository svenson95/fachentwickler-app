import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CardModule } from '../../core/components/card/card.module';
import { LoadingSpinnerModule } from '../../core/components/loading-spinner/loading-spinner.module';
import { PostElementModule } from '../../shared/components/post-element/post-element.module';
import { PostLinkModule } from '../../shared/components/post-link/post-link.module';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { SubjectPageRoutingModule } from './subject-routing.module';
import { SubjectPage } from './subject.page';

@NgModule({
  declarations: [SubjectPage],
  imports: [
    CommonModule,
    SubjectPageRoutingModule,
    CardModule,
    PostLinkModule,
    PostElementModule,
    LoadingSpinnerModule,
    PipesModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SubjectPageModule {}
