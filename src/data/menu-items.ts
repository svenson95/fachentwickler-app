import {
  bodyOutline,
  businessOutline,
  calendarOutline,
  codeSlashOutline,
  earthOutline,
  fileTrayFullOutline,
  flashOutline,
  folderOutline,
  gitNetworkOutline,
  globeOutline,
  hardwareChipOutline,
  languageOutline,
  libraryOutline,
  mailOutline,
  pencilOutline,
  pieChartOutline,
  schoolOutline,
  serverOutline,
  swapHorizontalOutline,
  todayOutline,
} from 'ionicons/icons';
import { MenuItem } from '../app/models/menu-item';

export const subjects: MenuItem[] = [
  {
    title: 'Lernfeld 1',
    shortTitle: 'LF-1',
    url: '/lf-1',
    icon: earthOutline
  },
  {
    title: 'Lernfeld 2',
    shortTitle: 'LF-2',
    url: '/lf-2',
    icon: businessOutline
  },
  {
    title: 'Lernfeld 3',
    shortTitle: 'LF-3',
    url: '/lf-3',
    icon: pieChartOutline,
  },
  {
    title: 'Lernfeld 4-1',
    shortTitle: 'LF-4-1',
    url: '/lf-4-1',
    icon: flashOutline,
  },
  {
    title: 'Lernfeld 4-2',
    shortTitle: 'LF-4-2',
    url: '/lf-4-2',
    icon: hardwareChipOutline,
  },
  {
    title: 'Lernfeld 5',
    shortTitle: 'LF-5',
    url: '/lf-5',
    icon: codeSlashOutline,
  },
  {
    title: 'Lernfeld 6',
    shortTitle: 'LF-6',
    url: '/lf-6',
    icon: codeSlashOutline,
  },
  {
    title: 'Lernfeld 7',
    shortTitle: 'LF-7',
    url: '/lf-7',
    icon: gitNetworkOutline,
  },
  {
    title: 'Lernfeld 8',
    shortTitle: 'LF-8',
    url: '/lf-8',
    icon: swapHorizontalOutline,
  },
  {
    title: 'Lernfeld 9',
    shortTitle: 'LF-9',
    url: '/lf-9',
    icon: globeOutline,
  },
  {
    title: 'Wahlpflicht',
    shortTitle: 'WP',
    url: '/wp',
    icon: serverOutline,
  },
  {
    title: 'WiSo',
    shortTitle: 'WiSo',
    url: '/wiso',
    icon: bodyOutline,
  },
  {
    title: 'Englisch',
    shortTitle: 'Eng',
    url: '/englisch',
    icon: languageOutline,
  },
  {
    title: 'Deutsch',
    shortTitle: 'De',
    url: '/deutsch',
    icon: pencilOutline,
  },
];

export const areas: MenuItem[] = [
  {
    title: 'Syntax',
    shortTitle: 'Syntax',
    url: '/syntax',
    icon: codeSlashOutline,
  },
  {
    title: 'Angewandte Informatik',
    shortTitle: 'Ang. Inf.',
    url: '/angewandte-informatik',
    icon: libraryOutline,
  },
  {
    title: 'Technische Informatik',
    shortTitle: 'Tech. Inf.',
    url: '/technische-informatik',
    icon: libraryOutline,
  },
  {
    title: 'Praktische Informatik',
    shortTitle: 'Prak. Inf.',
    url: '/praktische-informatik',
    icon: libraryOutline,
  },
  {
    title: 'Theoretische Informatik',
    shortTitle: 'Theo. Inf.',
    url: '/theoretische-informatik',
    icon: libraryOutline,
  }
];

export const myClass: MenuItem[] = [
  {
    title: 'Mitteilungen',
    shortTitle: 'Mitteilungen',
    url: '/mitteilungen',
    icon: mailOutline,
  },
  {
    title: 'Lehrmaterial',
    shortTitle: 'Lehrmaterial',
    url: '/lehrmaterial',
    icon: folderOutline,
  },
  {
    title: 'Lehrplan',
    shortTitle: 'Lehrplan',
    url: '/lehrplan',
    icon: 'file-tray-full-outline',
  },
  {
    title: 'Vertretungsplan',
    shortTitle: 'Vertretungsplan',
    url: '/vertretungsplan',
    icon: todayOutline,
  },
  {
    title: 'Schuljahresplan',
    shortTitle: 'Schuljahresplan',
    url: '/schuljahresplan',
    icon: 'calendar-outline',
  },
  {
    title: 'Feedback',
    shortTitle: 'Feedback',
    url: '/feedback',
    icon: 'megaphone-outline',
  },
  {
    title: 'Klausuren',
    shortTitle: 'Klausuren',
    url: '/klausuren',
    icon: 'school-outline',
  },
];

export const pages = [...subjects, ...areas, ...myClass];
