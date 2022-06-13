import { CommonModule, DatePipe } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HighlightModule } from 'ngx-highlightjs';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { AngularMaterialModule } from './angular-material.module';
import { CardComponent } from './components/card/card.component';
import { CheckmarkComponent } from './components/checkmark/checkmark.component';
import { ExamItemComponent } from './components/exam-item/exam-item.component';
import { LessonFooterComponent } from './components/lesson-footer/lesson-footer.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { NewsCardComponent } from './components/news-card/news-card.component';
import { PaginationBarComponent } from './components/pagination-bar/pagination-bar.component';
import { PostBadgeComponent } from './components/post-badge/post-badge.component';
import { PostElementComponent } from './components/post-element/post-element.component';
import { PostLinkComponent } from './components/post-link/post-link.component';
import { ScheduleCardComponent } from './components/schedule-card/schedule-card.component';
import { ScheduleComponent } from './components/schedule-card/schedule/schedule.component';
import { SchoolWeekCardComponent } from './components/school-week-card/school-week-card.component';
import { StateButtonComponent } from './components/state-button/state-button.component';
import { PipesModule } from './pipes/pipes.module';

const components = [
  CardComponent,
  CheckmarkComponent,
  LoadingSpinnerComponent,
  StateButtonComponent,
  PostLinkComponent,
  PostElementComponent,
  PostBadgeComponent,
  NewsCardComponent,
  ExamItemComponent,
  LessonFooterComponent,
  SchoolWeekCardComponent,
  PaginationBarComponent,
  ScheduleCardComponent,
  ScheduleComponent,
];

const modules = [CommonModule, AngularMaterialModule, RouterModule, PipesModule, NgxSkeletonLoaderModule];

@NgModule({
  declarations: [components],
  exports: [modules, components, FormsModule, ReactiveFormsModule],
  imports: [modules, HighlightModule],
  providers: [DatePipe],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
