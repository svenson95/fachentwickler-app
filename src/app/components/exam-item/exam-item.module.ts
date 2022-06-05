import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PipesModule } from '../../pipes/pipes.module';
import { AngularMaterialModule } from '../../shared/angular-material.module';
import { LoadingSpinnerModule } from '../loading-spinner/loading-spinner.module';
import { PostLinkModule } from '../post-link/post-link.module';
import { ExamItemComponent } from './exam-item.component';

@NgModule({
  declarations: [ExamItemComponent],
  exports: [ExamItemComponent],
  imports: [CommonModule, AngularMaterialModule, PostLinkModule, LoadingSpinnerModule, PipesModule],
})
export class ExamItemModule {}
