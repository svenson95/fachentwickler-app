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
    megaphoneOutline,
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
    title: 'Lernfeld<wbr/> 1',
    shortTitle: 'LF 1',
    url: '/lf-1',
    icon: 'earth-outline'
  },
  {
    title: 'Lernfeld<wbr/> 2',
    shortTitle: 'LF 2',
    url: '/lf-2',
    icon: 'business-outline'
  },
  {
    title: 'Lernfeld<wbr/> 3',
    shortTitle: 'LF 3',
    url: '/lf-3',
    icon: 'pie-chart-outline',
  },
  {
    title: 'Lernfeld<wbr/> 4-1',
    shortTitle: 'LF 4-1',
    url: '/lf-4-1',
    icon: 'flash-outline',
  },
  {
    title: 'Lernfeld<wbr/> 4-2',
    shortTitle: 'LF 4-2',
    url: '/lf-4-2',
    icon: 'hardware-chip-outline',
  },
  {
    title: 'Lernfeld<wbr/> 5',
    shortTitle: 'LF 5',
    url: '/lf-5',
    icon: 'code-slash-outline',
  },
  {
    title: 'Lernfeld<wbr/> 6',
    shortTitle: 'LF 6',
    url: '/lf-6',
    icon: 'code-slash-outline',
  },
  {
    title: 'Lernfeld<wbr/> 7',
    shortTitle: 'LF 7',
    url: '/lf-7',
    icon: 'git-network-outline',
  },
  {
    title: 'Lernfeld<wbr/> 8',
    shortTitle: 'LF 8',
    url: '/lf-8',
    icon: 'swap-horizontal-outline',
  },
  {
    title: 'Lernfeld<wbr/> 9',
    shortTitle: 'LF 9',
    url: '/lf-9',
    icon: 'globe-outline',
  },
  {
    title: 'Wahl<wbr/>pflicht',
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
    title: 'Englisch',
    shortTitle: 'Eng',
    url: '/englisch',
    icon: 'language-outline',
  },
  {
    title: 'Deutsch',
    shortTitle: 'Deu',
    url: '/deutsch',
    icon: 'pencil-outline',
  },
];

export const areas: MenuItem[] = [
  {
    title: 'Syntax',
    shortTitle: 'Syntax',
    url: '/syntax',
    icon: 'code-slash-outline',
  },
  {
    title: 'Angewandte<wbr/> Informatik',
    shortTitle: 'Ang. Inf.',
    url: '/angewandte-informatik',
    icon: 'library-outline',
  },
  {
    title: 'Technische<wbr/> Informatik',
    shortTitle: 'Tech. Inf.',
    url: '/technische-informatik',
    icon: 'library-outline',
  },
  {
    title: 'Praktische<wbr/> Informatik',
    shortTitle: 'Prak. Inf.',
    url: '/praktische-informatik',
    icon: 'library-outline',
  },
  {
    title: 'Theoretische<wbr/> Informatik',
    shortTitle: 'Theo. Inf.',
    url: '/theoretische-informatik',
    icon: 'library-outline',
  }
];

export const internal: MenuItem[] = [
  {
    title: 'Lehrmaterial',
    shortTitle: 'Lehrmaterial',
    url: '/lehrmaterial',
    icon: 'folder-outline',
  },
  {
    title: 'Mitteilungen',
    shortTitle: 'Mitteilungen',
    url: '/mitteilungen',
    icon: 'mail-outline',
  },
  {
    title: 'Lehrplan',
    shortTitle: 'Lehrplan',
    url: '/lehrplan',
    icon: 'file-tray-full-outline',
  },
  {
    title: 'Vertretungs<wbr/>plan',
    shortTitle: 'Vertretungsplan',
    url: '/vertretungsplan',
    icon: 'today-outline',
  },
  {
    title: 'Schuljahres<wbr/>plan',
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

export const pages = [...subjects, ...areas, ...internal];
