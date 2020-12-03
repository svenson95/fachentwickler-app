import { NgModule } from '@angular/core';
import {Routes, RouterModule, Route} from '@angular/router';
import {subjectsData} from '../data/data-subjects';

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
  const subjects: Route[] = [];
  subjectsData.map(sub => sub.subject).forEach((sub: string) => {
    subjects.push({
      path: sub + '/:topic/:post',
      loadChildren: () => import('src/app/pages/post/post.module').then(m => m.PostModule)
    },);
  });
  return subjects;
};

const routes: Routes = [
  ...subjectsPaths(),
  ...postPaths(),
  {
    path: '',
    loadChildren: () => import('src/app/pages/landing-page/landing-page.module').then(m => m.LandingPageModule),
    data: { animation: 'HomePage' }
  },
  {
    path: 'dashboard',
    loadChildren: () => import('src/app/pages/dashboard/dashboard.module').then(m => m.DashboardModule),
    data: { animation: 'DashboardPage' }
  },
  {
    path: 'mein-profil',
    loadChildren: () => import('src/app/pages/my-profile/my-profile.module').then(m => m.MyProfileModule),
    data: { animation: 'MyProfilePage' }
  },
  {
    path: 'einstellungen',
    loadChildren: () => import('src/app/pages/settings/settings.module').then(m => m.SettingsModule),
    data: { animation: 'SettingsPage' }
  },
  {
    path: 'login',
    loadChildren: () => import('src/app/pages/login/login.module').then(m => m.LoginModule),
    data: { animation: 'LoginPage' }
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
