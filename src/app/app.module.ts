import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { HIGHLIGHT_OPTIONS, HighlightModule } from 'ngx-highlightjs';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { AngularMaterialModule } from './app-common/angular-material.module';
import { ThemeModule } from './services/theme.module';
import { PageComponentModule } from './app-common/page/page.module';
import { SnackbarModule } from './app-common/snackbar/snackbar.module';

import localeDe from '@angular/common/locales/de';
registerLocaleData(localeDe);

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
    ThemeModule,
    PageComponentModule,
    SnackbarModule,
    HighlightModule,
    MatNativeDateModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'de-DE'},
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}},
    {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true},
    {provide: HIGHLIGHT_OPTIONS, useValue: {fullLibraryLoader: () => import('highlight.js')}},
  ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
