import { MenuItem } from '@models/menu-item';

export const subjects: MenuItem[] = [
  {
    title: 'Lernfeld 1',
    shortTitle: 'LF-1',
    url: '/lf-1',
    icon: 'earth-outline',
  },
  {
    title: 'Lernfeld 2',
    shortTitle: 'LF-2',
    url: '/lf-2',
    icon: 'business-outline',
  },
  {
    title: 'Lernfeld 3',
    shortTitle: 'LF-3',
    url: '/lf-3',
    icon: 'pie-chart-outline',
  },
  {
    title: 'Lernfeld 4-1',
    shortTitle: 'LF-4-1',
    url: '/lf-4-1',
    icon: 'flash-outline',
  },
  {
    title: 'Lernfeld 4-2',
    shortTitle: 'LF-4-2',
    url: '/lf-4-2',
    icon: 'hardware-chip-outline',
  },
  {
    title: 'Lernfeld 5',
    shortTitle: 'LF-5',
    url: '/lf-5',
    icon: 'language-outline',
  },
  {
    title: 'Lernfeld 6',
    shortTitle: 'LF-6',
    url: '/lf-6',
    icon: 'code-slash-outline',
  },
  {
    title: 'Lernfeld 7-1',
    shortTitle: 'LF-7-1',
    url: '/lf-7-1',
    icon: 'git-network-outline',
  },
  {
    title: 'Lernfeld 7-2',
    shortTitle: 'LF-7-2',
    url: '/lf-7-2',
    icon: 'radio-outline',
  },
  {
    title: 'Lernfeld 8',
    shortTitle: 'LF-8',
    url: '/lf-8',
    icon: 'swap-horizontal-outline',
  },
  {
    title: 'Lernfeld 9',
    shortTitle: 'LF-9',
    url: '/lf-9',
    icon: 'globe-outline',
  },
  // {
  //   title: 'Lernfeld 10-1',
  //   shortTitle: 'LF-10-1',
  //   url: '/lf-10-1',
  //   icon: globeOutline,
  // },
  // {
  //   title: 'Lernfeld 10-2',
  //   shortTitle: 'LF-10-1',
  //   url: '/lf-10-2',
  //   icon: globeOutline,
  // },
  // {
  //   title: 'Lernfeld 11',
  //   shortTitle: 'LF-11',
  //   url: '/lf-11',
  //   icon: globeOutline,
  // },
  {
    title: 'Wahlpflicht',
    shortTitle: 'WP',
    url: '/wp',
    icon: 'server-outline',
  },
  {
    title: 'WiSo',
    shortTitle: 'WiSo',
    url: '/wiso',
    icon: 'body-outline',
  },
  {
    title: 'Deutsch',
    shortTitle: 'De',
    url: '/deutsch',
    icon: 'pencil-outline',
  },
];

export const languages: MenuItem[] = [
  {
    title: 'Assembler',
    shortTitle: 'assembler',
    url: '/assembler',
    icon: 'rocket-outline',
  },
  {
    title: 'Systemsprachen',
    shortTitle: 'System',
    url: '/systemsprachen',
    icon: 'terminal-outline',
  },
  {
    title: 'Backend',
    shortTitle: 'Backend',
    url: '/backend',
    icon: 'server-outline',
  },
  {
    title: 'Frontend',
    shortTitle: 'Frontend',
    url: '/frontend',
    icon: 'desktop-outline',
  },
  {
    title: 'App',
    shortTitle: 'App',
    url: '/app',
    icon: 'phone-portrait-outline',
  },
  {
    title: 'Skriptsprachen',
    shortTitle: 'Skript',
    url: '/skriptsprachen',
    icon: 'color-palette-outline',
  },
];

export const myClass: MenuItem[] = [
  {
    title: 'Mitteilungen',
    shortTitle: 'Mitteilungen',
    url: '/mitteilungen',
    icon: 'mail-outline',
  },
  {
    title: 'Klausuren',
    shortTitle: 'Klausuren',
    url: '/klausuren',
    icon: 'school-outline',
  },
  {
    title: 'Lehrplan',
    shortTitle: 'Lehrplan',
    url: '/lehrplan',
    icon: 'file-tray-full-outline',
  },
  {
    title: 'Lehrmaterial',
    shortTitle: 'Lehrmaterial',
    url: '/lehrmaterial',
    icon: 'folder-outline',
  },
  {
    title: 'Vertretungs<wbr/>plan',
    shortTitle: 'Vertretungs<wbr/>plan',
    url: '/vertretungsplan',
    icon: 'today-outline',
  },
  {
    title: 'Schuljahresplan',
    shortTitle: 'Schuljahresplan',
    url: 'http://www.osz-teltow.de/organisatorisches/ablaufplaene/21_22/se-fi_21-22.pdf',
    icon: 'calendar-outline',
  },
];

export const pages = [...subjects, ...languages, ...myClass];
