import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route, PreloadAllModules } from '@angular/router';

import { AuthGuardService } from './services/auth/auth-guard.service';
import { NotAuthGuardService } from './services/auth/not-auth-guard.service';
import { VerifyGuardService } from './services/auth/verify-guard.service';
import { subjects } from './constants/menu-items';

const subjectsPaths = (): Array<Route> => {
  const subjectPaths: Route[] = [];
  subjects.forEach(sub => {
    subjectPaths.push({
      path: sub.url.substr(1),
      loadChildren: () => import('src/app/pages/subject/subject.module').then(m => m.SubjectModule)
    });
  });
  return subjectPaths;
};

const postPaths = (): Array<Route> => {
  const posts: Route[] = [];
  subjects.forEach(sub => {
    posts.push({
      path: sub.url.substr(1) + '/:topic/:post',
      loadChildren: () => import('src/app/pages/post/post.module').then(m => m.PostModule)
    });
  });
  return posts;
};

const editPostPaths = (): Array<Route> => {
  const posts: Route[] = [];
  subjects.forEach(sub => {
    posts.push({
      path: sub.url.substr(1) + '/:topic/:post/edit',
      loadChildren: () => import('src/app/pages/edit-post/edit-post.module').then(m => m.EditPostModule),
      canActivate: [AuthGuardService]
    });
  });
  return posts;
};

const indexCardsPaths = (): Array<Route> => {
  const indexCards: Route[] = [];
  subjects.forEach(sub => {
    indexCards.push({
      path: sub.url.substr(1) + '/:topic/:title/karteikarten',
      loadChildren: () => import('src/app/pages/index-cards/index-cards.module').then(m => m.IndexCardsModule)
    });
  });
  return indexCards;
};

const quizPaths = (): Array<Route> => {
  const quizzes: Route[] = [];
  subjects.forEach(sub => {
    quizzes.push({
      path: sub.url.substr(1) + '/:topic/:title/quiz',
      loadChildren: () => import('src/app/pages/quiz/quiz.module').then(m => m.QuizModule)
    });
  });
  return quizzes;
};

const matchingPaths = (): Array<Route> => {
  const matchings: Route[] = [];
  subjects.forEach(sub => {
    matchings.push({
      path: sub.url.substr(1) + '/:topic/:title/matching',
      loadChildren: () => import('src/app/pages/matching/matching.module').then(m => m.MatchingModule)
    });
  });
  return matchings;
};

const routes: Routes = [
  ...subjectsPaths(),
  ...postPaths(),
  ...editPostPaths(),
  ...indexCardsPaths(),
  ...quizPaths(),
  ...matchingPaths(),
  {
    path: '',
    loadChildren: () => import('src/app/pages/landing-page/landing-page.module').then(m => m.LandingPageModule),
    data: { animation: 'StartPage' }
  },
  {
    path: 'about',
    loadChildren: () => import('src/app/pages/about/about.module').then(m => m.AboutModule),
    data: { animation: 'AboutPage' }
  },
  {
    path: 'feedback',
    loadChildren: () => import('src/app/pages/feedback/feedback.module').then(m => m.FeedbackModule)
  },
  {
    path: 'impressum',
    loadChildren: () => import('src/app/pages/legal/legal.module').then(m => m.LegalModule),
    data: { animation: 'LegalPage' }
  },
  {
    path: 'login',
    loadChildren: () => import('src/app/pages/login/login.module').then(m => m.LoginModule),
    canActivate: [NotAuthGuardService],
    data: { animation: 'LoginPage' }
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('src/app/pages/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule),
    canActivate: [NotAuthGuardService]
  },
  {
    path: 'register',
    loadChildren: () => import('src/app/pages/register/register.module').then(m => m.RegisterModule),
    canActivate: [NotAuthGuardService],
    data: { animation: 'RegisterPage' }
  },
  {
    path: 'verify',
    loadChildren: () => import('src/app/pages/verify/verify.module').then(m => m.VerifyModule),
    canActivate: [VerifyGuardService]
  },
  {
    path: 'dashboard',
    loadChildren: () => import('src/app/pages/dashboard/dashboard.module').then(m => m.DashboardModule),
    data: { animation: 'DashboardPage' },
    canActivate: [AuthGuardService]
  },
  {
    path: 'mein-profil',
    loadChildren: () => import('src/app/pages/my-profile/my-profile.module').then(m => m.MyProfileModule),
    data: { animation: 'MyProfilePage' },
    canActivate: [AuthGuardService]
  },
  {
    path: 'einstellungen',
    loadChildren: () => import('src/app/pages/settings/settings.module').then(m => m.SettingsModule),
    data: { animation: 'SettingsPage' },
    canActivate: [AuthGuardService]
  },
  {
    path: 'lehrmaterial',
    loadChildren: () => import('src/app/pages/teacher-files/teacher-files.module').then(m => m.TeacherFilesModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'mitteilungen',
    loadChildren: () => import('src/app/pages/messages/messages.module').then(m => m.MessagesModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'mitteilungen/:url',
    loadChildren: () => import('src/app/pages/news-article/news-article.module').then(m => m.NewsArticleModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'lehrplan',
    loadChildren: () => import('src/app/pages/curriculum/curriculum.module').then(m => m.CurriculumModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'vertretungsplan',
    loadChildren: () => import('src/app/pages/substitution-schedule/substitution-schedule.module').then(m => m.SubstitutionScheduleModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'klausuren',
    loadChildren: () => import('src/app/pages/exams/exams.module').then(m => m.ExamsModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'pruefungssimulator',
    loadChildren: () => import('src/app/pages/pruefungssimulator/pruefungssimulator.module').then(m => m.PruefungssimulatorModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'search',
    loadChildren: () => import('src/app/pages/search/search.module').then(m => m.SearchModule)
  },
  // {
  //   path: '**',
  //   redirectTo: '/login'
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      preloadingStrategy: PreloadAllModules,
      relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
