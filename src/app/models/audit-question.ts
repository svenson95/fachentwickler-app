export interface AuditQuestion {
  question: string;
  description?: string;
  image?: string;
  choices?: string[];
  answer: number | string;
}
