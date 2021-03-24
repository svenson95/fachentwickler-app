
export interface IndexCards {
  _id?: string;
  url: string;
  title: string;
  description: string;
  subject: string;
  type: string;
  topicId: string;
  lessonDate: string;
  lastUpdate: string;
  schoolWeek: string;
  questions: Question[];
}

interface Question {
  question: string;
  answer: string;
}
