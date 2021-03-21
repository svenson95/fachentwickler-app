import { Component, OnInit } from '@angular/core';

import { HeaderService } from '../../services/header.service';
import { DataService } from '../../services/data/data.service';
import { Quiz } from '../../models/quiz';
import { IndexCards } from '../../models/index-cards';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  testUser = {
    email: 'test@mail.de',
    name: 'test',
    progress: ["5f42941d165d0ab470bc57cc", "5f429429165d0ab470bc57cd", "5f9d54856ff184d2ed5ed51a", "5f9d55fa604cc04f638e4d3a", "5f9d5860604cc04f638e4d3c", "5f9d57b9604cc04f638e4d3b", "5f9d5931604cc04f638e4d3d", "5f429ff8165d0ab470bc5802", "5f429107165d0ab470bc57ca", "5f4295f6220657ed697dc56b", "5f429610220657ed697dc56c", "5f429c59165d0ab470bc57e2", "5f42966b220657ed697dc56d", "5f4296b7220657ed697dc56e", "5f429a69165d0ab470bc57d1", "5f429b98165d0ab470bc57db", "5f9b001cee0aeb489582d0f1", "5f4296c8220657ed697dc56f", "5f429a87165d0ab470bc57d2", "5f429a9d165d0ab470bc57d3", "5f429ad5165d0ab470bc57d6", "5f42a001165d0ab470bc5803", "5f4296e5220657ed697dc570", "5f429ba9165d0ab470bc57dc", "5f42929e165d0ab470bc57cb", "5f429451165d0ab470bc57cf", "5f429bd6165d0ab470bc57dd", "5f429caf165d0ab470bc57e4", "5f429c22165d0ab470bc57e1", "5f429e3c165d0ab470bc57f0", "5f429b0e165d0ab470bc57d7", "5f429d2e165d0ab470bc57eb", "5f083a88757f87cdceba18be", "5fcb0032248e32ecd46ac13c", "5f8ca961eac9e043cd102fc1", "5f429efb165d0ab470bc57f9", "5f429521220657ed697dc56a", "5f085932286ad9151bdd46b3", "5f429e6a165d0ab470bc57f3", "5f429e7b165d0ab470bc57f4", "5f429ebf165d0ab470bc57f8", "5f429aad165d0ab470bc57d4", "5f429f08165d0ab470bc57fa", "5f429e4e165d0ab470bc57f1", "5f429e8b165d0ab470bc57f5", "5f429cbc165d0ab470bc57e5", "5f429f28165d0ab470bc57fc", "5f429ccb165d0ab470bc57e6", "5f429f13165d0ab470bc57fb", "5f429bfb165d0ab470bc57df", "5f429c0f165d0ab470bc57e0", "5f429f3d165d0ab470bc57fd", "5f429469165d0ab470bc57d0", "5f429be8165d0ab470bc57de", "5f8cbee0d5590b36f17addfe", "5f4294d0220657ed697dc566", "5f429708220657ed697dc572", "5f429722220657ed697dc573", "5f42972c220657ed697dc574", "5f429cdf165d0ab470bc57e7", "5f429ac3165d0ab470bc57d5", "5f4294e8220657ed697dc567", "5f429b1c165d0ab470bc57d8", "5f4294fc220657ed697dc568", "5f429b2f165d0ab470bc57d9", "5f429cf5165d0ab470bc57e8", "5f429d06165d0ab470bc57e9", "5f429f5f165d0ab470bc57fe", "5f429511220657ed697dc569", "5f429ea6165d0ab470bc57f6", "5f429b3b165d0ab470bc57da", "5f429f6d165d0ab470bc57ff", "5f52d95840176c127e1aeb32", "5f52e77a5ee8123c555e10cc", "5f540e266feaa90903d076a6", "5f429eb6165d0ab470bc57f7", "5f5426ad27fcf75fef587d15", "5f542ec427fcf75fef587d16", "5f54393a27fcf75fef587d17", "5f544944d1558c8c92c27fce", "5f54b303d925d3f250400f9a", "5f54c768d925d3f250400f9b", "5f4296fa220657ed697dc571", "5f54da5a273e10e02b060dc6", "5f5aaa5bbdb52a2d1afdedc4", "5f5abbb685c8fb4fe6bab267", "5f5bc09d34b55e68718c8877", "5f429d16165d0ab470bc57ea", "5f5bc6ba899c7f782fad9c38", "5f5bdce0e0acc304ed36c395", "5f5f8e464e57623fa9531474", "5f5f97914e57623fa9531475", "5f429e00165d0ab470bc57ef", "5f6fe46a539ea9f7ca3856ef", "5f79fd90322ea57fbdb3b037", "5f429fa0165d0ab470bc5800", "5f429fb1165d0ab470bc5801", "5f429dd7165d0ab470bc57ee", "5f43d3dcf067639a259359c6", "5f67ad91257ec895e489e34c"],
    role: 'user',
    theme: 'light',
    _id: '5f1a3dca8d16e73572a16f50'
  };

  testDashboard = {
    allLessons: ["5f42941d165d0ab470bc57cc","5f429429165d0ab470bc57cd","5f9d54856ff184d2ed5ed51a","5f9d55fa604cc04f638e4d3a","5f9d5860604cc04f638e4d3c","5f9d57b9604cc04f638e4d3b","5f9d5931604cc04f638e4d3d","5f429ff8165d0ab470bc5802","5f429107165d0ab470bc57ca","5f4295f6220657ed697dc56b","5f429610220657ed697dc56c","5f429c59165d0ab470bc57e2","5f42966b220657ed697dc56d","5f4296b7220657ed697dc56e","5f429a69165d0ab470bc57d1","5f429b98165d0ab470bc57db","5f9b001cee0aeb489582d0f1","5f4296c8220657ed697dc56f","5f429a87165d0ab470bc57d2","5f429a9d165d0ab470bc57d3","5f429ad5165d0ab470bc57d6","5f42a001165d0ab470bc5803","5f4296e5220657ed697dc570","5f429ba9165d0ab470bc57dc","5f42929e165d0ab470bc57cb","5f429451165d0ab470bc57cf","5f429bd6165d0ab470bc57dd","5f429caf165d0ab470bc57e4","5f429c22165d0ab470bc57e1","5f429e3c165d0ab470bc57f0","5f429b0e165d0ab470bc57d7","5f429d2e165d0ab470bc57eb","5f083a88757f87cdceba18be","5fcb0032248e32ecd46ac13c","5f8ca961eac9e043cd102fc1","5f429efb165d0ab470bc57f9","5f429521220657ed697dc56a","5f085932286ad9151bdd46b3","5f429e6a165d0ab470bc57f3","5f429e7b165d0ab470bc57f4","5f429ebf165d0ab470bc57f8","5f429aad165d0ab470bc57d4","5f429f08165d0ab470bc57fa","5f429e4e165d0ab470bc57f1","5f429e8b165d0ab470bc57f5","5f429cbc165d0ab470bc57e5","5f429f28165d0ab470bc57fc","5f429ccb165d0ab470bc57e6","5f429f13165d0ab470bc57fb","5f429bfb165d0ab470bc57df","5f429c0f165d0ab470bc57e0","5f429f3d165d0ab470bc57fd","5f429469165d0ab470bc57d0","5f429be8165d0ab470bc57de","5f8cbee0d5590b36f17addfe","5f4294d0220657ed697dc566","5f429708220657ed697dc572","5f429722220657ed697dc573","5f42972c220657ed697dc574","5f429cdf165d0ab470bc57e7","5f429ac3165d0ab470bc57d5","5f4294e8220657ed697dc567","5f429b1c165d0ab470bc57d8","5f4294fc220657ed697dc568","5f429b2f165d0ab470bc57d9","5f429cf5165d0ab470bc57e8","5f429d06165d0ab470bc57e9","5f429f5f165d0ab470bc57fe","5f429511220657ed697dc569","5f429ea6165d0ab470bc57f6","5f429b3b165d0ab470bc57da","5f429f6d165d0ab470bc57ff","5f52d95840176c127e1aeb32","5f52e77a5ee8123c555e10cc","5f540e266feaa90903d076a6","5f429eb6165d0ab470bc57f7","5f5426ad27fcf75fef587d15","5f542ec427fcf75fef587d16","5f54393a27fcf75fef587d17","5f544944d1558c8c92c27fce","5f54b303d925d3f250400f9a","5f54c768d925d3f250400f9b","5f4296fa220657ed697dc571","5f54da5a273e10e02b060dc6","5f5aaa5bbdb52a2d1afdedc4","5f5abbb685c8fb4fe6bab267","5f5bc09d34b55e68718c8877","5f429d16165d0ab470bc57ea","5f5bc6ba899c7f782fad9c38","5f5bdce0e0acc304ed36c395","5f5f8e464e57623fa9531474","5f5f97914e57623fa9531475","5f429e00165d0ab470bc57ef","5f6fe46a539ea9f7ca3856ef","5f79fd90322ea57fbdb3b037","5f429fa0165d0ab470bc5800","5f429fb1165d0ab470bc5801","5f429dd7165d0ab470bc57ee","5f43d3dcf067639a259359c6","5f67ad91257ec895e489e34c","5f6f5d29819cd4bad66c53fa","5f6f661b819cd4bad66c53fb","5f6f7e2c539ea9f7ca3856ea","5f6f8877539ea9f7ca3856eb","5f67957b257ec895e489e34b","5f6fcb16539ea9f7ca3856ed","5f6fb787539ea9f7ca3856ec","5f6771ed099124b4435ab146","5f675c12099124b4435ab145","5f678019257ec895e489e349","5f6fd2d8539ea9f7ca3856ee","5f6ffbd6423653727ec87b9b","5f7a5a1d26fca377f7ed4e68","5f9594c94363ea1e064c8d53","5f6abb2f10e47777946f0883","5f88cd98a0d0cb421f136a50","5f7a5a3d26fca377f7ed4e69","5f7a5afe26fca377f7ed4e6a","5f6ff02dcff7fce41d0e4bb8","5f7a5bc126fca377f7ed4e6b","5fa1173ffb7df8ef19c6439f","5f88ce2ca0d0cb421f136a51","5f88ce3ea0d0cb421f136a52","5f917a9b99d66f66e8a9b053","5fa11062fb7df8ef19c64399","5fa11212fb7df8ef19c6439b","5f9e9023cdb75d208eba17ee","5fa110d8fb7df8ef19c6439a","5fa12b89641a40621c5ff725","5fa402042821ae28382ab279","5fa1137afb7df8ef19c6439c","5fa416f62821ae28382ab27a","5fa1141dfb7df8ef19c6439e","5fdfcde505e5115de4b7fb80","5fdfd00a8c8c2a5e54a4a3ff","5fdfd8218c8c2a5e54a4a408","5fdfd5248c8c2a5e54a4a406","5fdfd82b8c8c2a5e54a4a409","5fdfdd128c8c2a5e54a4a40f","5fdfde6f8c8c2a5e54a4a410","5fdfd83a8c8c2a5e54a4a40a","5fdfde7b8c8c2a5e54a4a412","5fdfd2c88c8c2a5e54a4a402","5fdfd2d78c8c2a5e54a4a403","5fdfd8478c8c2a5e54a4a40b","5fdfd3508c8c2a5e54a4a404","5fdfd5da8c8c2a5e54a4a407","5fdfd85a8c8c2a5e54a4a40c","5fdfda778c8c2a5e54a4a40d","5fdfdbb88c8c2a5e54a4a40e","5fdfd0bf8c8c2a5e54a4a401","5fdfd39c8c8c2a5e54a4a405","5ffc82b6e3bc33038ff5f154","5ffca13ae3bc33038ff5f16d","5ffca2c6e3bc33038ff5f16e","5ffca3e0e3bc33038ff5f16f"],
    lessonsPercentage: 64,
    nextLesson: {
      description: 'Aufgaben vom 09.12.2020',
      lessonDate: '2020-12-09',
      postId: '5fdfdbb88c8c2a5e54a4a40e',
      subject: 'lf-6',
      title: 'Planung von Relationalen Datenbanken',
      type: 'article',
      url: 'entwickeln_und_bereitstellen_von_anwendungssystemen/planung_von_relationalen_datenbanken'
    }
  };

  testSchoolWeek = {
    schoolWeek: '8',
    posts: [
      {description: "Mitschrift vom 10.02.2020", lessonDate: "2020-02-10", postId: "5f429f28165d0ab470bc57fc", schoolWeek: "8", subject: "deutsch", title: "Präsentieren - Einleitung", type: "article", url: "kommunikation_und_informationsquellen/praesentieren_einleitung"},
      {description: "Mitschrift vom 11.02.2020", lessonDate: "2020-02-11", postId: "5f429ccb165d0ab470bc57e6", schoolWeek: "8", subject: "lf-6", title: "Statische Methoden (in Java)", type: "article", url: "entwickeln_und_bereitstellen_von_anwendungssystemen/statische_methoden"},
      {description: "Mitschrift vom 11.02.2020", lessonDate: "2020-02-11", postId: "5f429f13165d0ab470bc57fb", schoolWeek: "8", subject: "deutsch", title: "Testvorbereitung - Zusammenfassung (Blätter)", type: "article", url: "kommunikation_und_informationsquellen/testvorbereitung_zusammenfassung_blaetter"},
      {description: "Aufgaben vom 12.02.2020", lessonDate: "2020-02-12", postId: "5f429c0f165d0ab470bc57e0", schoolWeek: "8", subject: "lf-4-2", title: "Aufgaben Gesetze der Boolschen Algebra", type: "tasks", url: "boolsche_algebra/aufgaben_gesetze_der_boolschen_algebra"},
      {description: "Mitschrift vom 12.02.2020", lessonDate: "2020-02-12", postId: "5f429f3d165d0ab470bc57fd", schoolWeek: "8", subject: "deutsch", title: "Foliengesetz (Bullet-Chart)", type: "article", url: "grammatik/foliengesetz_bullet_chart"},
      {description: "Aufgaben vom 14.02.2020", lessonDate: "2020-02-14", postId: "5f4294d0220657ed697dc566", schoolWeek: "8", subject: "lf-1", title: "Übung zur Berechnung der Wirtschaftlichkeit (1/2)", type: "tasks", url: "wirtschaftskennziffern/uebung_zur_berechnung_der_wirtschaftlichkeit_1"}
    ]
  };

  testQuiz: Quiz;
  testIndexcards: IndexCards;

  constructor(private headerService: HeaderService,
              private dataService: DataService
  ) {
    this.headerService.setPageTitle('Start');
    this.loadTestData();
  }

  ngOnInit(): void {
  }

  loadTestData(): void {
    this.dataService.getQuiz('oeffentliche_netze_und_dienste/quiz-fuer-test').subscribe(
      (data) => {
        this.testQuiz = data;
      },
      (error) => {
        console.log('Error while GET quiz', error);
      }
    );

    this.dataService.getIndexCards('kollisionsdomaene_duplexing/karteikarten-fuer-test').subscribe(
      (data) => {
        this.testIndexcards = data;
      },
      (error) => {
        console.log('Error while GET index-cards', error);
      }
    );
  }

}
