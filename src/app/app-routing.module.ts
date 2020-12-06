import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { subjectsData } from '../data/data-subjects';
import { AuthGuardService } from './services/auth/auth-guard.service';

const subjectsPaths = (): Array<Route> => {
  const subjects: Route[] = [];
  subjectsData.map(sub => sub.subject).forEach((sub: string) => {
    subjects.push({
      path: sub,
      loadChildren: () => import('src/app/pages/subject/subject.module').then(m => m.SubjectModule)
    });
  });
  return subjects;
};

const postPaths = () => {
  const posts: Route[] = [];
  subjectsData.map(sub => sub.subject).forEach((sub: string) => {
    posts.push({
      path: sub + '/:topic/:post',
      loadChildren: () => import('src/app/pages/post/post.module').then(m => m.PostModule)
    });
  });
  return posts;
};

const indexCardsPaths = () => {
  const indexCards: Route[] = [];
  subjectsData.map(sub => sub.subject).forEach((sub: string) => {
    indexCards.push({
      path: sub + '/:topic/:post/index-cards',
      loadChildren: () => import('src/app/pages/index-cards/index-cards.module').then(m => m.IndexCardsModule)
    });
  });
  return indexCards;
};

const quizPaths = () => {
  const quizzes: Route[] = [];
  subjectsData.map(sub => sub.subject).forEach((sub: string) => {
    quizzes.push({
      path: sub + '/:topic/:post/quiz',
      loadChildren: () => import('src/app/pages/quiz/quiz.module').then(m => m.QuizModule)
    });
  });
  return quizzes;
};

const routes: Routes = [
  ...subjectsPaths(),
  ...postPaths(),
  ...indexCardsPaths(),
  ...quizPaths(),
  {
    path: '',
    loadChildren: () => import('src/app/pages/landing-page/landing-page.module').then(m => m.LandingPageModule),
    data: { animation: 'HomePage' }
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
    path: 'login',
    loadChildren: () => import('src/app/pages/login/login.module').then(m => m.LoginModule),
    data: { animation: 'LoginPage' }
  },
  {
    path: 'register',
    loadChildren: () => import('src/app/pages/register/register.module').then(m => m.RegisterModule),
    data: { animation: 'RegisterPage' }
  },
  {
    path: 'about',
    loadChildren: () => import('src/app/pages/about/about.module').then(m => m.AboutModule),
    data: { animation: 'AboutPage' }
  },
  {
    path: 'impressum',
    loadChildren: () => import('src/app/pages/legal/legal.module').then(m => m.LegalModule),
    data: { animation: 'LegalPage' }
  },
  {
    path: 'lehrmaterial',
    loadChildren: () => import('src/app/pages/teacher-files/teacher-files.module').then(m => m.TeacherFilesModule)
  },
  {
    path: 'mitteilungen',
    loadChildren: () => import('src/app/pages/messages/messages.module').then(m => m.MessagesModule)
  },
  {
    path: 'lehrplan',
    loadChildren: () => import('src/app/pages/curriculum/curriculum.module').then(m => m.CurriculumModule)
  },
  {
    path: 'vertretungsplan',
    loadChildren: () => import('src/app/pages/substitution-schedule/substitution-schedule.module').then(m => m.SubstitutionScheduleModule)
  },
  {
    path: 'feedback',
    loadChildren: () => import('src/app/pages/feedback/feedback.module').then(m => m.FeedbackModule)
  },
  {
    path: 'klausuren',
    loadChildren: () => import('src/app/pages/exams/exams.module').then(m => m.ExamsModule)
  },
  // {
  //   path: '**',
  //   redirectTo: '/login'
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
