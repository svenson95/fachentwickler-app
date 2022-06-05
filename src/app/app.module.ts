/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import localeDe from '@angular/common/locales/de';
import { LOCALE_ID, NgModule } from '@angular/core';
import { MatNativeDateModule, MAT_RIPPLE_GLOBAL_OPTIONS, RippleGlobalOptions } from '@angular/material/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeleteImageDialogModule } from './components/dialogs/delete-image-dialog/delete-image-dialog.module';
import { ImageManagerDialogModule } from './components/dialogs/image-manager-dialog/image-manager-dialog.module';
import { LogoutDialogComponent } from './components/dialogs/logout-dialog/logout-dialog.component';
import { HeaderMenuModule } from './components/header-menu/header-menu.module';
import { LoadingSpinnerModule } from './components/loading-spinner/loading-spinner.module';
import { NavLinkModule } from './components/nav-link/nav-link.module';
import { SearchFieldModule } from './components/search-field/search-field.module';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { AngularMaterialModule } from './shared/angular-material.module';
import { AppIconComponent } from './shared/app-icon/app-icon.component';
import { ContentComponent } from './shared/content/content.component';
import { HamburgerIconComponent } from './shared/hamburger-icon/hamburger-icon.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';

const globalRippleConfig: RippleGlobalOptions = {
  animation: {
    enterDuration: 200,
    exitDuration: 500,
  },
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HamburgerIconComponent,
    SidenavComponent,
    ContentComponent,
    AppIconComponent,
    LogoutDialogComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatNativeDateModule,
    RouterModule,
    ImageManagerDialogModule,
    DeleteImageDialogModule,
    SearchFieldModule,
    HeaderMenuModule,
    LoadingSpinnerModule,
    NavLinkModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'de-DE' },
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'fill' },
    },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: {
          java: () => import('highlight.js/lib/languages/java'),
          javascript: () => import('highlight.js/lib/languages/javascript'),
          sql: () => import('highlight.js/lib/languages/sql'),
          php: () => import('highlight.js/lib/languages/php'),
        },
      },
    },
    { provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: globalRippleConfig },
  ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    registerLocaleData(localeDe);
  }
}
