import {
  bodyOutline,
  businessOutline,
  calendarOutline,
  codeSlashOutline,
  colorPaletteOutline,
  desktopOutline,
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
  phonePortraitOutline,
  pieChartOutline,
  radioOutline,
  rocketOutline,
  schoolOutline,
  serverOutline,
  swapHorizontalOutline,
  terminalOutline,
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
    icon: languageOutline,
  },
  {
    title: 'Lernfeld 6',
    shortTitle: 'LF-6',
    url: '/lf-6',
    icon: codeSlashOutline,
  },
  {
    title: 'Lernfeld 7-1',
    shortTitle: 'LF-7-1',
    url: '/lf-7-1',
    icon: gitNetworkOutline,
  },
  {
    title: 'Lernfeld 7-2',
    shortTitle: 'LF-7-2',
    url: '/lf-7-2',
    icon: radioOutline,
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
    title: 'Deutsch',
    shortTitle: 'De',
    url: '/deutsch',
    icon: pencilOutline,
  },
];

export const study: MenuItem[] = [
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

export const languages: MenuItem[] = [
  {
    title: 'Assembler',
    shortTitle: 'assembler',
    url: '/assembler',
    icon: rocketOutline,
  },
  {
    title: 'Systemsprachen',
    shortTitle: 'System',
    url: '/systemsprachen',
    icon: terminalOutline,
  },
  {
    title: 'Backend',
    shortTitle: 'Backend',
    url: '/backend',
    icon: serverOutline,
  },
  {
    title: 'Frontend',
    shortTitle: 'Frontend',
    url: '/frontend',
    icon: desktopOutline,
  },
  {
    title: 'App',
    shortTitle: 'App',
    url: '/app',
    icon: phonePortraitOutline,
  },
  {
    title: 'Skriptsprachen',
    shortTitle: 'Skript',
    url: '/skriptsprachen',
    icon: colorPaletteOutline,
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
    title: 'Klausuren',
    shortTitle: 'Klausuren',
    url: '/klausuren',
    icon: schoolOutline,
  },
  {
    title: 'Lehrplan',
    shortTitle: 'Lehrplan',
    url: '/lehrplan',
    icon: fileTrayFullOutline,
  },
  {
    title: 'Lehrmaterial',
    shortTitle: 'Lehrmaterial',
    url: '/lehrmaterial',
    icon: folderOutline,
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
    url: 'http://www.osz-teltow.de/organisatorisches/ablaufplaene/20_21/se-fi_20-21.pdf',
    icon: calendarOutline,
  }
];

export const pages = [...subjects, ...study, ...languages, ...myClass];
