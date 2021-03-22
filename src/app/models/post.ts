import { ElementType } from './element-type';

export interface Post {
  _id?: string;
  url: string;
  title?: string;
  description?: string;
  subject: string;
  type: 'article' | 'tasks' | 'index-cards' | 'quiz' | 'test';
  lessonDate: string;
  lastUpdate: string;
  schoolWeek: string;
  elements: PostElement[];
}

export interface PostElement {
  type: ElementType | string;
  content: string;
  toggable?: boolean;
  language?: 'java' | 'php' | 'javascript' | 'sql';
  list?: Array<string | SublistItem>;
  ordered?: boolean;
  rows?: TableRow[];
  object?: object;
  size?: string;
}

interface SublistItem {
  content?: string;
  sublist: string[];
}

interface TableRow {
  type: 'header' | 'default';
  columns: TableColumn[];
}

interface TableColumn {
  align: 'left' | 'middle' | 'right';
  content: string;
  colSpan?: number;
  rowSpan?: number;
}
