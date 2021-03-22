
export interface Subject {
  subject: string;
  description: string;
  topics: string[] | Topic[];
  tests?: string[];
}

export interface Topic {
  title: string;
  links: string[];
}
