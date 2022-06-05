import { NgModule } from '@angular/core';
import { PreloadAllModules, Route, RouterModule, Routes } from '@angular/router';
import { subjects } from './constants/menu-items';
import { AuthGuardService } from './services/guards/auth-guard.service';
import { NotAuthGuardService } from './services/guards/not-auth-guard.service';
import { VerifyGuardService } from './services/guards/verify-guard.service';

const subjectsPaths = (): Array<Route> => {
  const subjectPaths: Route[] = [];
  subjects.forEach((sub) => {
    subjectPaths.push({
      path: sub.url.substr(1),
      loadChildren: () => import('./pages/subject/subject.module').then((m) => m.SubjectPageModule),
    });
  });
  return subjectPaths;
};

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/landing/landing.module').then((m) => m.LandingPageModule),
    data: { animation: 'StartPage' },
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then((m) => m.AboutPageModule),
    data: { animation: 'AboutPage' },
  },
  {
    path: 'feedback',
    loadChildren: () => import('./pages/feedback/feedback.module').then((m) => m.FeedbackPageModule),
  },
  {
    path: 'impressum',
    loadChildren: () => import('./pages/legal/legal.module').then((m) => m.LegalPageModule),
    data: { animation: 'LegalPage' },
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then((m) => m.LoginPageModule),
    canActivate: [NotAuthGuardService],
    data: { animation: 'LoginPage' },
  },
  {
    path: 'forgot-password',
    loadChildren: () =>
      import('./pages/forgot-password/forgot-password.module').then((m) => m.ForgotPasswordPageModule),
    canActivate: [NotAuthGuardService],
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then((m) => m.RegisterPageModule),
    canActivate: [NotAuthGuardService],
    data: { animation: 'RegisterPage' },
  },
  {
    path: 'verify',
    loadChildren: () => import('./pages/verify/verify.module').then((m) => m.VerifyPageModule),
    canActivate: [VerifyGuardService],
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then((m) => m.DashboardPageModule),
    data: { animation: 'DashboardPage' },
    canActivate: [AuthGuardService],
  },
  {
    path: 'mein-profil',
    loadChildren: () => import('./pages/my-profile/my-profile.module').then((m) => m.MyProfilePageModule),
    data: { animation: 'MyProfilePage' },
    canActivate: [AuthGuardService],
  },
  {
    path: 'lehrmaterial',
    loadChildren: () => import('./pages/teacher-files/teacher-files.module').then((m) => m.TeacherFilesPageModule),
    canActivate: [AuthGuardService],
  },
  {
    path: 'mitteilungen',
    loadChildren: () => import('./pages/messages/messages.module').then((m) => m.MessagesPageModule),
    canActivate: [AuthGuardService],
  },
  {
    path: 'mitteilungen/:url',
    loadChildren: () => import('./pages/news-article/news-article.module').then((m) => m.NewsArticlePageModule),
    canActivate: [AuthGuardService],
  },
  {
    path: 'lehrplan',
    loadChildren: () => import('./pages/curriculum/curriculum.module').then((m) => m.CurriculumPageModule),
    canActivate: [AuthGuardService],
  },
  {
    path: 'vertretungsplan',
    loadChildren: () =>
      import('./pages/substitution-schedule/substitution-schedule.module').then(
        (m) => m.SubstitutionSchedulePageModule,
      ),
    canActivate: [AuthGuardService],
  },
  {
    path: 'klausuren',
    loadChildren: () => import('./pages/exams/exams.module').then((m) => m.ExamsPageModule),
    canActivate: [AuthGuardService],
  },
  {
    path: 'pruefungssimulator',
    loadChildren: () =>
      import('./pages/audit-simulator/audit-simulator.module').then((m) => m.AuditSimulatorPageModule),
    canActivate: [AuthGuardService],
  },
  {
    path: 'search',
    loadChildren: () => import('./pages/search/search.module').then((m) => m.SearchPageModule),
  },
  ...subjectsPaths(),
  {
    path: ':subject/:topic/:post',
    loadChildren: () => import('./pages/post/post.module').then((m) => m.PostPageModule),
  },
  {
    path: ':subject/:topic/:post/edit',
    loadChildren: () => import('./pages/edit-post/edit-post.module').then((m) => m.EditPostPageModule),
    canActivate: [AuthGuardService],
  },
  {
    path: ':subject/:topic/:title/karteikarten',
    loadChildren: () => import('./pages/index-card/index-card.module').then((m) => m.IndexCardPageModule),
  },
  {
    path: ':subject/:topic/:title/quiz',
    loadChildren: () => import('./pages/quiz/quiz.module').then((m) => m.QuizPageModule),
  },
  {
    path: ':subject/:topic/:title/matching',
    loadChildren: () => import('./pages/matching/matching.module').then((m) => m.MatchingPageModule),
  },
  {
    path: '**',
    loadChildren: () => import('./pages/not-found/not-found.module').then((m) => m.NotFoundPageModule),
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
