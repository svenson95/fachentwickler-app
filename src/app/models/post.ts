import {ElementType} from './element-type';

export interface Post {
  title?: string;
  description?: string;
  url: string;
  topic: string;
  subject: string;
  lessonDate: string;
  lastUpdate: string;
  schoolWeek: string;
  elements: PostElement[];
}

export interface PostElement {
  type: ElementType;
  content: string;
  language?: 'java' | 'php' | 'javascript' | 'sql';
  list?: Array<string | SublistItem>;
  ordered?: boolean | null;
  rows?: TableRow[];
  object?: object | null;
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
  colSpan?: any;
}
