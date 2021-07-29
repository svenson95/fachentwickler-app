import { ElementType } from './element-type';

export interface PostElement {
  type: ElementType | string;
  content?: string;
  hidden?: boolean;
  language?: 'java' | 'php' | 'javascript' | 'sql';
  list?: Array<string | SublistItem>;
  ordered?: boolean;
  rows?: TableRow[];
  object?: object;
  size?: string;
  elements?: PostElement[];
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
