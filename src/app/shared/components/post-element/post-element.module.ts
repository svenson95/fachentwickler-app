import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HighlightModule } from 'ngx-highlightjs';
import { AngularMaterialModule } from '../../../core/angular-material.module';
import { LoadingSpinnerModule } from '../../../core/components/loading-spinner/loading-spinner.module';
import { PostElementComponent } from './post-element.component';

@NgModule({
  declarations: [PostElementComponent],
  exports: [PostElementComponent],
  imports: [CommonModule, AngularMaterialModule, HighlightModule, LoadingSpinnerModule],
})
export class PostElementModule {}
