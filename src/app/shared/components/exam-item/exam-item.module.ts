import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../../../core/angular-material.module';
import { LoadingSpinnerModule } from '../../../core/components/loading-spinner/loading-spinner.module';
import { PipesModule } from '../../pipes/pipes.module';
import { PostLinkModule } from '../post-link/post-link.module';
import { ExamItemComponent } from './exam-item.component';

@NgModule({
  declarations: [ExamItemComponent],
  exports: [ExamItemComponent],
  imports: [CommonModule, AngularMaterialModule, PostLinkModule, LoadingSpinnerModule, PipesModule],
})
export class ExamItemModule {}
