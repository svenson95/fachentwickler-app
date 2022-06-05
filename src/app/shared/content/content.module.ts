import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoadingSpinnerModule } from '../../components/loading-spinner/loading-spinner.module';
import { FooterModule } from '../footer/footer.module';
import { ContentComponent } from './content.component';

@NgModule({
  declarations: [ContentComponent],
  exports: [ContentComponent],
  imports: [CommonModule, RouterModule, FooterModule, LoadingSpinnerModule],
})
export class ContentModule {}
