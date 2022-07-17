import { NgModule } from '@angular/core';
import { PreloadAllModules, Route, RouterModule, Routes } from '@angular/router';

import { subjects } from '@constants/menu-items';
import { AuthGuardService } from '@guards/auth-guard.service';
import { NotAuthGuardService } from '@guards/not-auth-guard.service';
import { VerifyGuardService } from '@guards/verify-guard.service';

const subjectRoutes = (): Array<Route> => {
  const subjectPaths: Route[] = [];
  subjects.forEach((sub) => {
    subjectPaths.push({
      path: sub.url.substr(1),
      loadChildren: () => import('./modules/subject/subject.module').then((m) => m.SubjectPageModule),
    });
  });
  return subjectPaths;
};

const authRoutes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./modules/auth/login/login.module').then((m) => m.LoginPageModule),
    canActivate: [NotAuthGuardService],
  },
  {
    path: 'passwort-vergessen',
    loadChildren: () =>
      import('./modules/auth/forgot-password/forgot-password.module').then((m) => m.ForgotPasswordPageModule),
    canActivate: [NotAuthGuardService],
  },
  {
    path: 'registrieren',
    loadChildren: () => import('./modules/auth/register/register.module').then((m) => m.RegisterPageModule),
    canActivate: [NotAuthGuardService],
  },
  {
    path: 'verifizieren',
    loadChildren: () => import('./modules/auth/verify/verify.module').then((m) => m.VerifyPageModule),
    canActivate: [VerifyGuardService],
  },
];

const otherRoutes: Routes = [
  {
    path: 'about',
    loadChildren: () => import('./modules/other-pages/about/about.module').then((m) => m.AboutPageModule),
  },
  {
    path: 'feedback',
    loadChildren: () => import('./modules/other-pages/feedback/feedback.module').then((m) => m.FeedbackPageModule),
  },
  {
    path: 'impressum',
    loadChildren: () => import('./modules/other-pages/legal/legal.module').then((m) => m.LegalPageModule),
  },
];

const userRoutes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/user-pages/dashboard/dashboard.module').then((m) => m.DashboardPageModule),
    canActivate: [AuthGuardService],
  },
  {
    path: 'mein-profil',
    loadChildren: () => import('./modules/user-pages/my-profile/my-profile.module').then((m) => m.MyProfilePageModule),
    canActivate: [AuthGuardService],
  },
  {
    path: 'lehrmaterial',
    loadChildren: () =>
      import('./modules/user-pages/teacher-files/teacher-files.module').then((m) => m.TeacherFilesPageModule),
    canActivate: [AuthGuardService],
  },
  {
    path: 'mitteilungen',
    loadChildren: () => import('./modules/user-pages/messages/messages.module').then((m) => m.MessagesPageModule),
    canActivate: [AuthGuardService],
  },
  {
    path: 'lehrplan',
    loadChildren: () => import('./modules/user-pages/curriculum/curriculum.module').then((m) => m.CurriculumPageModule),
    canActivate: [AuthGuardService],
  },
  {
    path: 'vertretungsplan',
    loadChildren: () =>
      import('./modules/user-pages/substitution-schedule/substitution-schedule.module').then(
        (m) => m.SubstitutionSchedulePageModule,
      ),
    canActivate: [AuthGuardService],
  },
  {
    path: 'klausuren',
    loadChildren: () => import('./modules/user-pages/exams/exams.module').then((m) => m.ExamsPageModule),
    canActivate: [AuthGuardService],
  },
  {
    path: 'pruefungs-simulator',
    loadChildren: () =>
      import('./modules/user-pages/audit-simulator/audit-simulator.module').then((m) => m.AuditSimulatorPageModule),
    canActivate: [AuthGuardService],
  },
];

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/landing/landing.module').then((m) => m.LandingPageModule),
  },
  {
    path: 'search',
    loadChildren: () => import('./modules/search/search.module').then((m) => m.SearchPageModule),
  },
  ...authRoutes,
  ...otherRoutes,
  ...userRoutes,
  ...subjectRoutes(),
  {
    path: '**',
    loadChildren: () => import('./modules/not-found/not-found.module').then((m) => m.NotFoundPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      preloadingStrategy: PreloadAllModules,
      // TODO: check if legacy relative link resolution is still needed
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
