import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularMaterialModule } from './app-common/angular-material.module';
import { PageComponentModule } from './app-common/page/page.module';
import { LoadingInterceptor } from './interceptors/loading.interceptor';

@NgModule({
    declarations: [AppComponent],
    imports: [
      CommonModule,
      BrowserModule,
      BrowserAnimationsModule,
      AppRoutingModule,
      FormsModule,
      HttpClientModule,
      AngularMaterialModule,
      ReactiveFormsModule,
      PageComponentModule,
    ],
    providers: [
      {
        provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
        useValue: { appearance: 'fill' }
      },
      {
        provide: HTTP_INTERCEPTORS,
        useClass: LoadingInterceptor,
        multi: true
      }
    ],
    entryComponents: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
