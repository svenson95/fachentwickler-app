import { NgModule } from '@angular/core';
import { PreloadAllModules, Route, RouterModule, Routes } from '@angular/router';
import { subjects } from './core/constants/menu-items';
import { AuthGuardService } from './core/guards/auth-guard.service';
import { NotAuthGuardService } from './core/guards/not-auth-guard.service';
import { VerifyGuardService } from './core/guards/verify-guard.service';

const subjectsPaths = (): Array<Route> => {
  const subjectPaths: Route[] = [];
  subjects.forEach((sub) => {
    subjectPaths.push({
      path: sub.url.substr(1),
      loadChildren: () => import('./modules/subject/subject.module').then((m) => m.SubjectPageModule),
    });
  });
  return subjectPaths;
};

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/landing/landing.module').then((m) => m.LandingPageModule),
    data: { animation: 'StartPage' },
  },
  {
    path: 'about',
    loadChildren: () => import('./modules/about/about.module').then((m) => m.AboutPageModule),
    data: { animation: 'AboutPage' },
  },
  {
    path: 'feedback',
    loadChildren: () => import('./modules/feedback/feedback.module').then((m) => m.FeedbackPageModule),
  },
  {
    path: 'impressum',
    loadChildren: () => import('./modules/legal/legal.module').then((m) => m.LegalPageModule),
    data: { animation: 'LegalPage' },
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then((m) => m.LoginPageModule),
    canActivate: [NotAuthGuardService],
    data: { animation: 'LoginPage' },
  },
  {
    path: 'forgot-password',
    loadChildren: () =>
      import('./modules/forgot-password/forgot-password.module').then((m) => m.ForgotPasswordPageModule),
    canActivate: [NotAuthGuardService],
  },
  {
    path: 'register',
    loadChildren: () => import('./modules/register/register.module').then((m) => m.RegisterPageModule),
    canActivate: [NotAuthGuardService],
    data: { animation: 'RegisterPage' },
  },
  {
    path: 'verify',
    loadChildren: () => import('./modules/verify/verify.module').then((m) => m.VerifyPageModule),
    canActivate: [VerifyGuardService],
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then((m) => m.DashboardPageModule),
    data: { animation: 'DashboardPage' },
    canActivate: [AuthGuardService],
  },
  {
    path: 'mein-profil',
    loadChildren: () => import('./modules/my-profile/my-profile.module').then((m) => m.MyProfilePageModule),
    data: { animation: 'MyProfilePage' },
    canActivate: [AuthGuardService],
  },
  {
    path: 'lehrmaterial',
    loadChildren: () => import('./modules/teacher-files/teacher-files.module').then((m) => m.TeacherFilesPageModule),
    canActivate: [AuthGuardService],
  },
  {
    path: 'mitteilungen',
    loadChildren: () => import('./modules/messages/messages.module').then((m) => m.MessagesPageModule),
    canActivate: [AuthGuardService],
  },
  {
    path: 'lehrplan',
    loadChildren: () => import('./modules/curriculum/curriculum.module').then((m) => m.CurriculumPageModule),
    canActivate: [AuthGuardService],
  },
  {
    path: 'vertretungsplan',
    loadChildren: () =>
      import('./modules/substitution-schedule/substitution-schedule.module').then(
        (m) => m.SubstitutionSchedulePageModule,
      ),
    canActivate: [AuthGuardService],
  },
  {
    path: 'klausuren',
    loadChildren: () => import('./modules/exams/exams.module').then((m) => m.ExamsPageModule),
    canActivate: [AuthGuardService],
  },
  {
    path: 'pruefungssimulator',
    loadChildren: () =>
      import('./modules/audit-simulator/audit-simulator.module').then((m) => m.AuditSimulatorPageModule),
    canActivate: [AuthGuardService],
  },
  {
    path: 'search',
    loadChildren: () => import('./modules/search/search.module').then((m) => m.SearchPageModule),
  },
  ...subjectsPaths(),
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
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
