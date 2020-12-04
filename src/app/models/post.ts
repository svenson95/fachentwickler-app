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
  type: ElementType | string;
  content: string;
  language?: 'java' | 'php' | 'javascript' | 'sql';
  list?: Array<string | SublistItem>;
  ordered?: boolean;
  rows?: TableRow[];
  object?: object;
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
