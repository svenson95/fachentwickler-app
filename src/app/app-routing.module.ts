import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route, PreloadAllModules } from '@angular/router';

import { AuthGuardService } from './services/guards/auth-guard.service';
import { NotAuthGuardService } from './services/guards/not-auth-guard.service';
import { VerifyGuardService } from './services/guards/verify-guard.service';
import { subjects } from './constants/menu-items';

/* tslint:disable: max-line-length */

const subjectsPaths = (): Array<Route> => {
  const subjectPaths: Route[] = [];
  subjects.forEach(sub => {
    subjectPaths.push({
      path: sub.url.substr(1),
      loadChildren: () => import('src/app/pages/subject/subject.module').then(m => m.SubjectPageModule)
    });
  });
  return subjectPaths;
};

const postPaths = (): Array<Route> => {
  const posts: Route[] = [];
  subjects.forEach(sub => {
    posts.push({
      path: sub.url.substr(1) + '/:topic/:post',
      loadChildren: () => import('src/app/pages/post/post.module').then(m => m.PostPageModule)
    });
  });
  return posts;
};

const editPostPaths = (): Array<Route> => {
  const posts: Route[] = [];
  subjects.forEach(sub => {
    posts.push({
      path: sub.url.substr(1) + '/:topic/:post/edit',
      loadChildren: () => import('src/app/pages/edit-post/edit-post.module').then(m => m.EditPostPageModule),
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
      loadChildren: () => import('src/app/pages/index-card/index-card.module').then(m => m.IndexCardPageModule)
    });
  });
  return indexCards;
};

const quizPaths = (): Array<Route> => {
  const quizzes: Route[] = [];
  subjects.forEach(sub => {
    quizzes.push({
      path: sub.url.substr(1) + '/:topic/:title/quiz',
      loadChildren: () => import('src/app/pages/quiz/quiz.module').then(m => m.QuizPageModule)
    });
  });
  return quizzes;
};

const matchingPaths = (): Array<Route> => {
  const matchings: Route[] = [];
  subjects.forEach(sub => {
    matchings.push({
      path: sub.url.substr(1) + '/:topic/:title/matching',
      loadChildren: () => import('src/app/pages/matching/matching.module').then(m => m.MatchingPageModule)
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
    loadChildren: () => import('src/app/pages/landing/landing.module').then(m => m.LandingPageModule),
    data: { animation: 'StartPage' }
  },
  {
    path: 'about',
    loadChildren: () => import('src/app/pages/about/about.module').then(m => m.AboutPageModule),
    data: { animation: 'AboutPage' }
  },
  {
    path: 'feedback',
    loadChildren: () => import('src/app/pages/feedback/feedback.module').then(m => m.FeedbackPageModule)
  },
  {
    path: 'impressum',
    loadChildren: () => import('src/app/pages/legal/legal.module').then(m => m.LegalPageModule),
    data: { animation: 'LegalPage' }
  },
  {
    path: 'login',
    loadChildren: () => import('src/app/pages/login/login.module').then(m => m.LoginPageModule),
    canActivate: [NotAuthGuardService],
    data: { animation: 'LoginPage' }
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('src/app/pages/forgot-password/forgot-password.module').then(m => m.ForgotPasswordPageModule),
    canActivate: [NotAuthGuardService]
  },
  {
    path: 'register',
    loadChildren: () => import('src/app/pages/register/register.module').then(m => m.RegisterPageModule),
    canActivate: [NotAuthGuardService],
    data: { animation: 'RegisterPage' }
  },
  {
    path: 'verify',
    loadChildren: () => import('src/app/pages/verify/verify.module').then(m => m.VerifyPageModule),
    canActivate: [VerifyGuardService]
  },
  {
    path: 'dashboard',
    loadChildren: () => import('src/app/pages/dashboard/dashboard.module').then(m => m.DashboardPageModule),
    data: { animation: 'DashboardPage' },
    canActivate: [AuthGuardService]
  },
  {
    path: 'mein-profil',
    loadChildren: () => import('src/app/pages/my-profile/my-profile.module').then(m => m.MyProfilePageModule),
    data: { animation: 'MyProfilePage' },
    canActivate: [AuthGuardService]
  },
  {
    path: 'lehrmaterial',
    loadChildren: () => import('src/app/pages/teacher-files/teacher-files.module').then(m => m.TeacherFilesPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'mitteilungen',
    loadChildren: () => import('src/app/pages/messages/messages.module').then(m => m.MessagesPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'mitteilungen/:url',
    loadChildren: () => import('src/app/pages/news-article/news-article.module').then(m => m.NewsArticlePageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'lehrplan',
    loadChildren: () => import('src/app/pages/curriculum/curriculum.module').then(m => m.CurriculumPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'vertretungsplan',
    loadChildren: () => import('src/app/pages/substitution-schedule/substitution-schedule.module').then(m => m.SubstitutionSchedulePageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'klausuren',
    loadChildren: () => import('src/app/pages/exams/exams.module').then(m => m.ExamsPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'pruefungssimulator',
    loadChildren: () => import('src/app/pages/audit-simulator/audit-simulator.module').then(m => m.AuditSimulatorPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'search',
    loadChildren: () => import('src/app/pages/search/search.module').then(m => m.SearchPageModule)
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
